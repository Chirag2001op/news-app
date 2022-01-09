import React from "react";
import { Card, Button } from "react-bootstrap";

export default function NewsItem(props) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.imgURL} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Button variant="primary" className="btn-sm" >Read More</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
