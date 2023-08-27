import React from "react";
import Head from "./Components/Head";
import Todo from "./Components/Todo";
import Foot from "./Components/Foot";
import "./index.css";

const App = () => {
  return (
    <div>
      <Head />
      <Todo />
      <Foot />
    </div>
  );
};

export default App;
