import React from "react";
import ReactDOM from "react-dom/client";

const title = <h1>Inside Functional Component</h1>;
const HeadComponent = () => (<h1 id="heading">{title}</h1>);

const HeadingComponent = () => (
  <div id="container">
    <HeadComponent />
    <h1 id="heading">Inside Header Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
