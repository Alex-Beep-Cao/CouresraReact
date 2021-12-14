import Menu from "./MenuCompont";
import DishDetail from "./DishdetailCompont";
import About from "./AboutComponent";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterCompont";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
    };
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };
    const ContactPage = () => {
      return <Contact />;
    };

    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          dish={
            this.state.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          comments={this.state.comments.filter(
            (comment) => comment.dishId === parseInt(match.params.dishId, 10)
          )}
        />
      );
    };
    const AboutPage = () => {
      return <About leaders={this.state.leaders} />;
    };

    return (
      <div>
        <Header />
        {/* can switch below views  */}
        <Switch>
          {/* component just view no props */}
          <Route path="/home" component={HomePage} />
          {/* if you want to pass the props, you should do a fucntional component  */}
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Route path="/menu/:dishId" component={DishWithId} />

          <Route exact path="/contactus" component={ContactPage} />

          <Route path="/aboutus" component={AboutPage} />
          {/* the default route. if the nothing match return this default route  */}
          <Redirect to="/home" />
        </Switch>

        <Footer />
      </div>
    );
  }
}
export default Main;
