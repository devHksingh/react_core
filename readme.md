## React

React is popular open source JavaScript library used for building user interface especially for web application . React focuses on making UI development easier and more efficient by promoting the use of reusable components - small , self contained pieces that mange their own Logic and UI.

### Key Features of React

- Component-Based Architecture: React applications are built from component which allow developers to split the UI into independent reusable pieces. Each component mange's  its own state and renders independently .
- Virtual DOM : Rather than altering the browsers DOM directly  React creates a virtual DOM in memory. When changes occur only the necessary updates are applied to the real DOM making updates efficient and fast .
- Unidirectional Data Flow: React follows a one way data binding model which makes it easier to understand and debug application s as data flows in a single direction .
- Declarative Syntax : Developers describe what they want the UI to look like  for a given app state and React takes care of updating the UI when the state changes.
- JavaScript and JSX : React lets you write components in JavaScript and a special XML like syntax called JSX , making component creation more readable and expressive.

### How React Works

React works by maintaining a virtual representation of UI (virtual DOM) detecting changes and efficiently updating only the necessary parts of the real DOM. this leads to better performance especially in complex applications with frequently changing UI.

## What is Virtual DOM How it works in React?

- Virtual DOM as a blueprint or draft of webpage made with JavaScript objects.
- Whenever something changes on page like a button click or state changes , React first makes the change in this virtual blueprint (the virtual DOM) instead of updating the real page right away.
- React then compares the new Virtual DOM “blueprint” with the previous one finds out what actually changed and updates only those specific parts on the real web page (the real DOM).
- This process finding differences and updating only what’s needed is called diffing and makes web apps much faster and smoother.

## Easy Step-By-Step

- The app starts, and React creates a Virtual DOM based on your components.
- When data changes (e.g., a user clicks a button), React creates a new Virtual DOM tree reflecting the new state.
- React compares the new Virtual DOM with the old one to find out what changed.
- It only updates the specific changed parts in the real DOM, not the whole page.
- This makes updates much quicker and more efficient

## Reacts reconciliation process step by step

Reacts reconciliation process is the way React updates the web page efficiently when something changes in app .

Step by Step : React Reconciliation process

1. Render Phase
    1. when app updates ( like a button is clicked), React calls the render function to create a new Virtual DOM tree, which is a lightweight copy of the real DOM structure based on the latest data and state.
2. Diffing (Comparing)
    1. React compares the new Virtual DOM with the previous Virtual DOM tree.
    2. It checks element by element to see exactly what changed like if an item was added , removed or updated.
    3. If the elements are of a different type , React will replace the old element and its children with the new one . If they’re the same type, React will replace the old element and its children with the new one . If they’re the same type React only updates the changed attributes or text.
3. Keys in Lists
    1. When dealing with lists , React uses a special key attribute for each item . This helps it quickly figure out which items changed were added or removed making updates even faster
4. Commit Phase (Updating the Real DOM)
    1. After identifying changes , React updates only those specific parts of the real DOM, not the entire page.
    2. This update happens very efficiently in batches so that only the necessary changes are made at once improving your app’s speed.
5. Re-render if Needed
    1. Finally only the components that actually changed are re-rendered while the rest of the page stays the same.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React with cdn</title>
  </head>
  <body>
    <div id="root">
      <h1>Learning React with CDN</h1>
    </div>
    <script type="module" src="./src/App.js"></script>
  </body>
</html>

```

```jsx
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
```

code working

First, we import React and ReactDOM (client version for React 19) using CDN links.

We then create a reusable component called language that accepts props.

Inside this component, we use `React.createElement()` which creates **virtual DOM nodes**.

This function needs three parameters: the tag name, the props object, and the children.

It returns a plain JavaScript object that represents how the UI should look.

React uses this virtual DOM to calculate and apply efficient updates to the real DOM.

Next, we create the `App` component. Inside it, we return a parent `<div>` containing an `<h1>` and two `language` components with different props.

After that, we select the HTML element with id `"root"` and store it in a variable named `container`.

`ReactDOM.createRoot(container)` creates the React root.

This root is the connection point between the virtual DOM React creates and the real DOM inside the browser.

It manages rendering and ensures updates happen efficiently inside the `<div id="root">`.

Finally, `root.render(App())` renders our App component inside the root.

React builds the virtual DOM, compares it with previous renders, and updates only the necessary parts of the real DOM, making the UI fast and efficient.
