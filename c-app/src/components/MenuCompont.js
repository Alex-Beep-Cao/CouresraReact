import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

// There are 2 ways to implement functional component
// This is first way
function RenderMenuItem({ dish, onClick }) {
  return (
    <Card onClick={() => onClick(dish.id)}>
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardImgOverlay>
        <CardTitle>{dish.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
}

// This is second way
const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return (
      //   each of dish as a li
      // col-12 small and  xsmall screen 一个在一个的下面
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <RenderMenuItem dish={dish} onClick={props.onClick} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">{menu}</div>
    </div>
  );
};

export default Menu;
