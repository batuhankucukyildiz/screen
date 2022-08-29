import React from "react";
import Card from "react-bootstrap/Card";
import "./style.css";

import "bootstrap/dist/css/bootstrap.min.css";
{
  /* Bootstrap kütüphanesi dahil edildi. */
}

const App = ({ information, generalnumber }) => {
  return (
    <Card className="stylecss">
      <Card.Body>{props.information}</Card.Body>
      <Card.Title>{props.generalnumber}</Card.Title>
    </Card>
  );
};

export default App;
