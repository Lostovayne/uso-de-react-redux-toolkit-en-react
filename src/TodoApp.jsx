import { useGetTodosQuery } from "./apis";

export const TodoApp = () => {
    const { data: todos = [], isLoading } = useGetTodosQuery();

    return (
        <>
            <h1>Todos - RTK Query</h1>
            <hr />
            <h4>isLoading: {isLoading ? "true" : "false"}</h4>
            <pre>...</pre>

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <strong> {todo.completed ? "✅" : "❌"} </strong>
                        {todo.title}
                    </li>
                ))}
            </ul>

            <button>Next Todo</button>
        </>
    );
};
