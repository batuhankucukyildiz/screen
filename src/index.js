import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import axios from "axios";
import App from "./App";

const User = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
      const fecthData = async () => {
      const response = await axios.get(`https://630c989853a833c5342f7d3b.mockapi.io/users`
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
            
            <App information={repo.name} />
            <App generalnumber={repo.avatar} />
          </div>
        ))}
      </ul>
    </div>
  );
};

ReactDom.render(<User />, document.querySelector("#root"));
