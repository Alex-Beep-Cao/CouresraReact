import React, { useState, Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class Dishdetail extends Component {
  renderDish(dish) {
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
  renderComment(dish) {
    if (dish != null) {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card>
            <p2 style={{ margin: "10px" }}>Comments:</p2>
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
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.renderDish(this.props.selected)}
          {this.renderComment(this.props.selected)}
        </div>
      </div>
    );
  }
}

export default Dishdetail;
