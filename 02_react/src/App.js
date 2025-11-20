import React from "https://esm.sh/react@19.1.0";
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client";


const test = ()=>{
  return React.createElement("div",{},[
    React.createElement("h1",{},"JS"),
    React.createElement("p",{},"python")
  ])
}

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1",{},"Backend language"),
    React.createElement(test)
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));

// with jsx

// const App = ()=> <h1>code is updating by cdn with jsx </h1>
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App/>)


/**
 * How above code is work
 * Import the react and react dom library from  cdn 
 * defines a component App . which return react element built with React.createElement . It create a <div> containing an "h1" tag with the text
 * get div container of id "root" .
 * this create a React Root inside that HTML element ("div with id "root").
 * 
 */

/**
 *
 * createElement -> function -> type,config, children
 * dom -> createRoot -> render
 * what is react dom? react -> browser extension
 * what is difference between attribute and property
 * Attributes are static initail values defined in the HTML tag , while properties are dynamic current states of the corresponding Document Object Model (DOM) object that can be changed with JavaScript.
 */
