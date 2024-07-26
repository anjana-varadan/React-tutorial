import React from 'react';
import ReactDOM from 'react-dom/client';

const element = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" },
        [React.createElement("h1", {}, "Hello1"), React.createElement("h2", {}, "hi1")]),
    React.createElement("div", { id: "child2" },
        [React.createElement("h1", {}, "hello2"), React.createElement("h2", {}, "hi2")])
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(element) //render will replace what was there in root (do not append)
