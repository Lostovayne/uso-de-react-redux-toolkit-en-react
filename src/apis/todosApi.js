import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
    reducerPath: "todos",

    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com",
    }),

    endpoints: (build) => ({
        getTodos: build.query({
            query: () => "/todos",
        }),

        getTodo: build.query({
            query: (todoId) => `/todos/${todoId}`,
        }),
    }),
});

export const { useGetTodosQuery, useGetTodoQuery } = todosApi;
