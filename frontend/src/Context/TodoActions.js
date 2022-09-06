export const setInput = (payload) => (
    {
        type: "SET_INPUT",
        payload
    }
)

export const getTodos = (payload) => (
    {
        type: "GET_TODOS",
        payload
    }
)

export const addTodo = (payload) => (
    {
        type: "ADD_TODO",
        payload
    }
)

export const editTodo = (payload) => (
    {
        type: "EDIT_TODO",
        payload
    }
)

export const deleteTodo = (payload) => (
    {
        type: "DELETE_TODO",
        payload
    }
)

export const completeTodo = (payload) => (
    {
        type: "COMPLETE_TODO",
        payload
    }
)