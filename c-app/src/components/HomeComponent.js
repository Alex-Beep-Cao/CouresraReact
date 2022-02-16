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
import { baseUrl } from "../shared/baseUrl";

const RenderCard = ({ item, isLoading, errmes }) => {
  if (isLoading) {
    return <Loading />;
  } else if (errmes) {
    return <h4>{errmes}</h4>;
  } else console.log("s");
  return (
    <Card>
      <CardImg src={baseUrl + item.image} alt={item.name} />
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

const Home = (props) => {
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          <RenderCard
            item={props.promotion}
            isLoading={props.promoLoading}
            errmes={props.promoErrMess}
          ></RenderCard>
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard
            item={props.dish}
            isLoading={props.dishLoading}
            errmes={props.dishErrMess}
          ></RenderCard>
        </div>
        <div className="col-12 col-md m-1"></div>
      </div>
    </div>
  );
};

export default Home;
