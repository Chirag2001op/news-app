import React from "react";
import { Card, Button } from "react-bootstrap";

export default function NewsItem(props) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.imgURL?props.imgURL:" "} />
        <Card.Body>
          <Card.Title>{props.title?props.title.slice(0,45):" "}</Card.Title>
          <Card.Text>{props.description?props.description.slice(0,88):" "}</Card.Text>
          <Button href={props.newsUrl} variant="primary" className="btn-sm" >Read More</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
