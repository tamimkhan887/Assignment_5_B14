# DevStack

DevStack is a responsive React app to mark what kind of technology are using building an app and also track those technology about which a user know

## Technologies Used

- React 
- TypeScript
- Vite
- Tailwind CSS
- React Icons
- React Spinners
- React Toastify
- JSON data loaded from `public/data.json`

## Features

1. **Explore technology options**: View each technology's icon, description, category, difficulty, rating, and badge.
2. **Build a custom stack**: Add technologies to your stack with duplicate selection prevention and instant visual feedback.
3. **Manage selections easily**: Remove individual technologies, clear the full stack, and see helpful toast notifications for each action.

### Prerequisites

- Node.js 18 or newer
- npm


## React Questions and Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript. We use JSX in React because it makes writing and understanding the UI much easier and more readable.

### 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is data that is managed inside a component. When the state changes, React updates the component and shows the new data.

### 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook is used to store and manage data that can change inside a component. In this project, I used it in the `Technologies` component to keep track of the selected technologies and the available technology IDs. I also used it in `App` to keep the data-fetching promise stable.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is mainly used for handling side effects, such as fetching data or interacting with external systems after a component renders.

However, I didn't use `useEffect` to load the JSON data in this project. Instead, I created the fetch promise in `App` using `useState`, and then used React's `use` hook inside `Technologies` to read the promise. The data is handled with `Suspense`.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React needs a unique `key` to identify each item in a list. It helps React understand which items have changed, been added, or been removed. This makes updating the list more efficient and avoids rendering issues.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different parts of the UI depending on a condition.

For example, in the `YourStack` component, I check whether `selectedTecnology.length === 0`. If it is empty, I show **"Your Stack is empty"**. Otherwise, I display the selected technologies.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child through props. If the child needs to send something back to the parent, the parent can pass a callback function as a prop, and the child can call that function with the required data.

In this project, `Technologies` passes the selected technology data and setter functions to components like `TechnologyCard` and `YourStack`. These child components can then use the setter functions to update the parent's state.

