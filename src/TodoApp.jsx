// import { useGetTodosQuery } from "./apis";

import { useState } from "react";
import { useGetTodoQuery } from "./apis";

export const TodoApp = () => {
    // const { data: todos = [], isLoading } = useGetTodosQuery();

    const [todoId, setTodoId] = useState(1);
    const { data: todo, isLoading } = useGetTodoQuery(todoId);

    return (
        <>
            <h1>Todos - RTK Query</h1>
            <hr />
            <h4>isLoading: {isLoading ? "true" : "false"}</h4>
            <pre>{JSON.stringify(todo, null, 2)}</pre>

            <button onClick={() => setTodoId((stateprev) => stateprev - 1)}>
                Prev Todo
            </button>
            <button onClick={() => setTodoId((stateprev) => stateprev + 1)}>
                Next Todo
            </button>

            {/* <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <strong> {todo.completed ? "✅" : "❌"} </strong>
                        {todo.title}
                    </li>
                ))}
            </ul> */}
        </>
    );
};
