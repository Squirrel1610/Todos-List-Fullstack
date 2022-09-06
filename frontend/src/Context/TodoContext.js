import { createContext, useContext, useEffect, useReducer} from "react";
import TodoReducer from "./TodoReducer";
import API from "../api";
import { getTodos } from "./TodoActions";

const INITIALSTATE = {
    input: '',
    todos: []
}

export const TodoContext = createContext(INITIALSTATE);
export const useTodoContext = () => useContext(TodoContext);


export const TodoContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(TodoReducer, INITIALSTATE);

    useEffect(() => {
        const getData = async () => {
            try {
                let response = await API.get("api/todos");
                if(response){
                    console.log(response.data.message);
                    dispatch(getTodos(response.data.data));
                }
            } catch (error) {
                console.error(error.response.data.message);
            }
        }

        getData();
    }, []);

    const value = {
        input: state.input,
        todos: state.todos,
        dispatch,
    };

    return <TodoContext.Provider value={value}>
        {children}
    </TodoContext.Provider>
}