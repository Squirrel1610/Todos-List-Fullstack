import React, {useEffect} from 'react';
import { useTodoContext } from '../Context/TodoContext';
import { setInput, addTodo, editTodo} from '../Context/TodoActions';
import {useNavigate} from "react-router-dom";
import API from '../api';

export default function Form({todoId}) {
    const navigate = useNavigate();  

    const {input, todos, dispatch} = useTodoContext();

    useEffect(() => {
      if(todoId){
        const needEditTodo = todos.find((todo) => todo._id === todoId);
        dispatch(setInput(needEditTodo.title));
      }else{
        dispatch(setInput(""));
      }  
    }, [todoId])


    const handleSubmit = async (e) => {
      e.preventDefault();
      if(todoId){
        //edit todo
        try {
          let response = await API.patch(`api/todos/edit/${todoId}`, {
            title: input
          })
  
          dispatch(editTodo(response.data.data));
          console.log(response.data.message);

          dispatch(setInput(""));
          return navigate("/");
        } catch (error) {
          console.error(error.response.data.message);
        }
      }else{
        //add todo
        try {
          let response = await API.post("api/todos/add", {
            title: input
          })
          
          dispatch(addTodo(response.data.data));
          console.log(response.data.message);

          dispatch(setInput(""));
          return navigate("/");
        } catch (error) {
          console.error(error.response.data.message);
        }
      }
    }

    return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter a Todo..."
            className="task-input"
            value={input}
            onChange={(e) => dispatch(setInput(e.target.value))}
          />
          <button className="button-add" type="submit">
            {!todoId ? "Add" : "Edit"}
          </button>
        </form>
      )
}
