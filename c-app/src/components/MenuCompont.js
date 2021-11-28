import React, { useState, Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
import { DISHES } from "../shared/dishes";
import Dishdetail from "./DishdetailCompont";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null,
      dishes: DISHES,
    };
  }
  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }
  // renderDish(dish) {
  //   if (dish != null) {
  //     return (
  //       <Card>
  //         <CardImg width="100%" src={dish.image} alt={dish.name} />
  //         <CardBody>
  //           <CardTitle>{dish.name}</CardTitle>
  //           <CardText>{dish.description}</CardText>
  //         </CardBody>
  //       </Card>
  //     );
  //   } else {
  //     return <div></div>;
  //   }
  // }
  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        //   each of dish as a li
        // col-12 small and  xsmall screen 一个在一个的下面
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          {menu}
          <Dishdetail selected={this.state.selectedDish} />
        </div>
        {/* <div className="row">{this.renderDish(this.state.selectedDish)}</div> */}
      </div>
    );
  }
}

export default Menu;

// const Menu = ({ dishes }) => {

//   const [selechDish, setselectDish] = useState(null);

//   const onDishSelect = (dish) => {
//     setselectDish(dish);
//   };

//   const renderDish = (dish) => {
//     if (dish != null) {
//       return (
//         <Card>
//           <CardImg src={dish.image} alt={dish.name} />
//           <CardTitle>{dish.name}</CardTitle>
//           <CardText>{dish.description}</CardText>
//         </Card>
//       );
//     } else {
//       return <div></div>;
//     }
//   };

//   const menu = dishes.map((dish) => {
//     return (
//       <div key={dish.id} className="col-12 col-md-5 m-1">
//         <Card onClick={() => onDishSelect(dish)}>
//           <CardImg src={dish.image} alt={dish.name} />
//           <CardBody className="ml-5">
//             <CardTitle>{dish.name}</CardTitle>
//           </CardBody>
//         </Card>
//       </div>
//     );
//   });

//   return (
//     <div className="container">
//       <div className="row">{menu}</div>
//       <div className="row">{renderDish(selechDish)}</div>
//     </div>
//   );
// };

// export default Menu;
