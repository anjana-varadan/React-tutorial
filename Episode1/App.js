//Create an new <h1> element and adding inner HTML to it and append to the root element
// const element = document.createElement("h1")
// element.innerHTML="Hello World Inside Script!"
// console.log(element)
// const root = document.getElementById("root")
// console.log(root)
// root.appendChild(element)

//adding inner HTML to the root element directly (using setTimeout() to provide 2 sec delay)
// setTimeout(() => {
//     const root = document.getElementById("root")
// root.innerHTML = "Hello world inside script"
// }, 2000)

// const element = React.createElement("h1", {}, "Hello Inside Script") //returns JS object not the HTML tag
// console.log(element)
// const root = ReactDOM.createRoot(document.getElementById("root")) // create dom root and assign element with id=root as root
// root.render(element) //render will convert js object to browser understandable html tags

{
  /* < div id = "parent" >
    <div id="child">
        <h1>Hello</h1>
        <h2>Hi</h2>
    </div>
</div > */
}

// const element = React.createElement("div", { id: "parent" },
//     React.createElement("div", { id: "child" },
//         [React.createElement("h1", {}, "Hello"), React.createElement("h2", {}, "hi")]
//     )
// )

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(element)

{
  /* < div id = "parent" >
    <div id="child1">
        <h1>Hello</h1>
        <h2>Hi</h2>
    </div>
    <div id="child2">
        <h1>Hello</h1>
        <h2>Hi</h2>
    </div>
</div >  */
}

// const element = React.createElement("div", { id: "parent" }, [
//     React.createElement("div", { id: "child1" },
//         [React.createElement("h1", {}, "Hello1"), React.createElement("h2", {}, "hi1")]),
//     React.createElement("div", { id: "child2" },
//         [React.createElement("h1", {}, "hello2"), React.createElement("h2", {}, "hi2")])
// ])

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(element) //render will replace what was there in root (do not append)

<div>
  <h1></h1>
</div>;
