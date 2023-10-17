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
    }),
});

export const { useGetTodosQuery } = todosApi;
