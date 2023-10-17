import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// import { PokemonApp } from "./PokemonApp.jsx";
import { store } from "./store";
import "./index.css";
import { TodoApp } from "./TodoApp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            {/* <PokemonApp /> */}
            <TodoApp />
        </Provider>
    </React.StrictMode>
);
