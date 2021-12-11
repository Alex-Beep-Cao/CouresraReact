import Menu from "./MenuCompont";
import { DISHES } from "../shared/dishes";
import Dishdetail from "./DishdetailCompont";
import { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterCompont";
import Home from "./HomeComponent";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
    };
  }

  render() {
    const HomePage = () => {
      return <Home />;
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
          {/* the default route. if the nothing match return this default route  */}
          <Redirect to="/home" />
        </Switch>

        <Footer />
      </div>
    );
  }
}
export default Main;
