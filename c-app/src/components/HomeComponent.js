import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardTitle,
  CardBody,
  CardSubtitle,
} from "reactstrap";
import { Loading } from "./LoadingComponent";

const RenderCard = ({ item, isLoading, errmes }) => {
  if (isLoading) {
    return <Loading />;
  } else if (errmes) {
    return <h4>{errmes}</h4>;
  } else
    return (
      <Card>
        <CardImg src={item.img} alt={item.name}></CardImg>
        <CardBody>
          <CardTitle>{item.name}</CardTitle>
          {item.designation ? (
            <CardSubtitle>{item.designation}</CardSubtitle>
          ) : null}
          <CardText>{item.description}</CardText>
        </CardBody>
      </Card>
    );
};

const Home = ({ dish, promotion, leader, dishesLoading, dishesErrMess }) => {
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          <RenderCard
            item={dish}
            isLoading={dishesLoading}
            errmes={dishesErrMess}
          ></RenderCard>
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={promotion}></RenderCard>
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={leader}></RenderCard>
        </div>
      </div>
    </div>
  );
};

export default Home;
