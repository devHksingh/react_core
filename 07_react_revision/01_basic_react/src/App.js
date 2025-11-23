import React from "https://esm.sh/react@19.1.0";
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client";

const language = (props) => {
  return React.createElement("div", { style: { padding: props.padding } }, [
    React.createElement("h2", {}, props.name),
  ]);
};
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Backend Language"),
    React.createElement(language, { padding: "1rem", name: "Python" }),
    React.createElement(language, { padding: "1rem", name: "JavaScript" }),
  ]);
};
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(App());
// const language = (props) => {
//   return React.createElement(
//     "div",
//     {
//       style: {
//         backgroundColor: props.backgroundColor,
//         color: props.color,
//         padding: props.padding,
//         borderRadius: props.borderRadius,
//       },
//     },
//     [React.createElement("h2", {}, props.name)]
//   );
// };

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement(language, {
//       backgroundColor: "purple",
//       color: "green",
//       padding: "1.2rem",
//       borderRadius: "12px",
//       name: "Python",
//     }),
//     React.createElement(language, {
//       backgroundColor: "lightBlue",
//       color: "blue",
//       padding: "2.2rem",
//       borderRadius: "14px",
//       name: "JavaScript",
//     }),
//   ]);
// };

// const container = document.getElementById("root");
// const root = ReactDOM.createRoot(container);
// root.render(App());
