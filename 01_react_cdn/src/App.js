const App = () => {
  return React.createElement(
    "div",
    {class:"test"},// attrebute
    React.createElement("h1", {}, "learn react with cdn (react18)")
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App))




/**
 *
 * createElement -> function -> type,config, children
 * dom -> createRoot -> render
 * what is react dom? react -> browser extension
 * what is difference between attribute and property
 * Attributes are static initail values defined in the HTML tag , while properties are dynamic current states of the corresponding Document Object Model (DOM) object that can be changed with JavaScript.
 */
