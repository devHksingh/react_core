import React from "https://esm.sh/react@19.1.0";
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client";

const language = (props) => {
  return React.createElement("div", {}, [
    React.createElement(
      "h4",
      {
        style: {
          backgroundColor: props.backgroundColor,
          padding: props.padding,
        },
      },
      props.name
    ),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Backend language"),
    React.createElement(language, {
      name: "Pyhton",
      backgroundColor: "yellow",
      padding: "2.2rem",
    }),
    React.createElement(language, {
      name: "JavaScript",
      backgroundColor: "orange",
      padding: "1rem",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(React.createElement(App));
