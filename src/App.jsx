import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { increment, decrement } from "./actions/counter";

function App() {
    const { counter } = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank" rel="noreferrer">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => dispatch(increment())}>+</button>
                <span style={{ padding: "0 1rem" }}>{counter}</span>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
        </>
    );
}

export default App;
