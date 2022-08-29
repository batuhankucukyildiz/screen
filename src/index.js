import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import axios from "axios";
import App from "./App";

const User = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fecthData = async () => {
      const key = process.env.API_KEY;
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/comments`
      );
      setData(response.data);
    };
    fecthData();
  }, []);

  return (
    <div className="container">
      <ul>
        {data.map((repo) => (
          <div key={repo.id}>
            <App information={repo.email} />
            <App generalnumber={repo.id} />
          </div>
        ))}
      </ul>
    </div>
  );
};

ReactDom.render(<User />, document.querySelector("#root"));
