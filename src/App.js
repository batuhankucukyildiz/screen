import React from "react";
import Card from "react-bootstrap/Card";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
{
  /* Bootstrap kütüphanesi dahil edildi. */
}

const App = ({information,generalnumber}) => {

  const dizi = {information};
  const { name, ...kalanlar } = dizi; // (...) rest/spread operatörüdür.

  return (
   <h2 className="btk">{information}
    
    <img src={generalnumber} alt="" className="imgstyle" />
   </h2>

  );
};

export default App;
