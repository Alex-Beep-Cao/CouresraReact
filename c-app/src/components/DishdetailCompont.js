import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderDish({ dish }) {
  if (dish != null) {
    return (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  } else {
    return <div></div>;
  }
}

const RenderComment = ({ dish }) => {
  if (dish != null) {
    return (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <p style={{ margin: "10px" }}>Comments:</p>
          {dish.comments.map((c) => {
            return (
              <div>
                <div style={{ margin: "10px" }}>{c.comment} </div>
                <div style={{ margin: "10px" }}>
                  -- {c.author},{" "}
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  }).format(new Date(Date.parse(c.date)))}
                </div>
              </div>
            );
          })}
        </Card>
      </div>
    );
  } else {
    return <div></div>;
  }
};
const DishDetail = (props) => {
  return (
    <div className="container">
      <div className="row">
        <RenderDish dish={props.dish} />
        <RenderComment dish={props.dish} />
      </div>
    </div>
  );
};

export default DishDetail;
