import React from 'react';
import {Link} from "react-router-dom";
import { useTodoContext } from '../Context/TodoContext';
import { deleteTodo, completeTodo } from '../Context/TodoActions';
import API from '../api';

export default function TodoList() {
  const {todos, dispatch} = useTodoContext();

  const handleDelete = async (todoId) => {
    try {
      let response = await API.delete(`api/todos/delete/${todoId}`);

      if(response && response.data.success){
        dispatch(deleteTodo(todoId));
        console.log(response.data.message);
      }
    } catch (error) {
      console.error(error.response.data.message);
    }
  } 

  const handleComplete = async (todoId) => {
    try {
      let response = await API.patch(`api/todos/complete/${todoId}`);

      if(response && response.data.success){
        dispatch(completeTodo(response.data.data));
        console.log(response.data.message);
      }
    } catch (error) {
      console.error(error.response.data.message);
    }
  } 

  return (
        <div>
          {todos?.map((todo) => {
            return (
              <li className="list-item" key={todo._id}>
              <input
                type="text"
                value={todo.title}
                className={`list ${todo.completed ? "complete" : ""}`}
                onChange={(e) => e.preventDefault()}
              />
              <div>
                {todo.completed === true ? (
                  <button className="button-complete task-button green">
                    <i className="fa fa-check-circle"></i>
                  </button>
                ) : (
                  <button className="button-complete task-button" onClick={(e) => handleComplete(todo._id)}>
                    <i className="fa fa-check-circle"></i>
                  </button>
                )}
                <Link to={"/edit/" + todo._id}>
                  <button className="button-edit task-button">
                    <i className="fa fa-edit"></i>
                  </button>
                </Link>
                <button className="button-delete task-button" onClick={(e) => handleDelete(todo._id)}>
                  <i className="fa fa-trash"></i>
                </button>
              </div>
            </li>
            )
          })}
        </div>
  )
}

