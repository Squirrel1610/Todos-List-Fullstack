const TodoReducer = (state, action) => {
    let newState;
    switch(action.type){
        case "SET_INPUT":
            newState = {
                ...state,
                input: action.payload
            }
            break;

        case "GET_TODOS":
            newState = {
                ...state,
                todos: action.payload
            }
            break;
        
        case "ADD_TODO":
            newState = {
                ...state,
                todos: [...state.todos, action.payload]
            }
            break;

        case "EDIT_TODO":
            newState = {
                ...state,
                todos: state.todos.map((todo) => {
                    if(todo._id === action.payload._id){
                        todo = action.payload;
                    }
                    return todo;
                })
            }
            break;

        case "DELETE_TODO":
            newState = {
                ...state,
                todos: state.todos.filter((todo) => todo._id !== action.payload)
            }
            break;

        case "COMPLETE_TODO":
            newState = {
                ...state,
                todos: state.todos.map((todo) => {
                    if(todo._id === action.payload._id){
                        todo = action.payload;
                    }
                    return todo;
                })
            }
            break;

        default:
            break;
    }

    return newState;
}

export default TodoReducer;