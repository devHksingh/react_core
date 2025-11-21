import React from "https://esm.sh/react@19.1.0";
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client";

const language = (props) => {
  return React.createElement(
    "div",
    {
      style: {
        backgroundColor: props.backgroundColor,
        color: props.color,
        padding: props.padding,
        border: props.border,
      },
    },
    props.name
  );
};

const App = () => {
  return React.createElement(
    "div",
    { style: { border: "1rem solid  green", backgroundColor: "aqua" } },
    [
      React.createElement(
        "h1",
        { style: { border: "1rem solid  red" } },
        "Backend Language"
      ),
      React.createElement(language, {
        backgroundColor: "purple",
        color: "white",
        padding: "1rem",
        border: "1px solid  lime",
        name: "Python",
      }),
      React.createElement(language, {
        backgroundColor: "yellow",
        color: "black",
        padding: "1rem",
        border: "1px solid  green",
        name: "JavaScript",
      }),
    ]
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(React.createElement(App));
