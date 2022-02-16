import Menu from "./MenuCompont";
import DishDetail from "./DishdetailCompont";
import About from "./AboutComponent";
import { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterCompont";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  postComment,
  fetchDishes,
  fetchComments,
  fetchPromos,
} from "../redux/ActionCreators";
import { actions } from "react-redux-form";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// make state become props
const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

//  resetFeedbackForm form model is 'feedback'
const mapDispatchToProps = (dispatch) => ({
  fetchDishes: () => {
    dispatch(fetchDishes());
  },
  postComment: (dishId, rating, author, comment) =>
    dispatch(postComment(dishId, rating, author, comment), fetchDishes),

  resetFeedbackForm: () => {
    dispatch(actions.reset("feedback"));
  },
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
});

class Main extends Component {
  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
  }
  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishLoading={this.props.dishes.isLoading}
          dishErrMess={this.props.dishes.errMess}
          promotion={
            this.props.promotions.promotions.filter(
              (promo) => promo.featured
            )[0]
          }
          promoLoading={this.props.promotions.isLoading}
          promoErrMess={this.props.promotions.errMess}
        />
      );
    };
    // const ContactPage = () => {
    //   return <Contact />;
    // };

    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          dish={
            this.props.dishes.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          comments={this.props.comments.comments.filter(
            (comment) => comment.dishId === parseInt(match.params.dishId, 10)
          )}
          commentsErrMess={this.props.comments.errMess}
          addComment={this.props.addComment}
          postComment={this.props.postComment}
        />
      );
    };
    const AboutPage = () => {
      return <About leaders={this.props.leaders} />;
    };

    return (
      <div>
        <Header />
        {/* can switch below views  */}
        <TransitionGroup>
          <CSSTransition
            key={this.props.location.key}
            classNames="page"
            timeout={300}
          >
            <Switch>
              {/* component just view no props */}
              <Route path="/home" component={HomePage} />
              {/* if you want to pass the props, you should do a fucntional component  */}
              <Route
                exact
                path="/menu"
                component={() => <Menu dishes={this.props.dishes} />}
              />
              <Route path="/menu/:dishId" component={DishWithId} />

              <Route
                exact
                path="/contactus"
                component={() => (
                  <Contact resetFeedbackForm={this.props.resetFeedbackForm} />
                )}
              />

              <Route path="/aboutus" component={AboutPage} />
              {/* the default route. if the nothing match return this default route  */}
              <Redirect to="/home" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
