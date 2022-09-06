import React from 'react';
import Header from "../Components/Header";
import Form from "../Components/Form";
import {useParams} from "react-router";

export default function EditTodo() {
  const todoId = useParams().todoId;

  return (
    <div>
      <div className="container">
        <div className="app-wrapper">
          <div>
            <Header 
              title="Edit todo"
            />
          </div>
          <div>
            <Form
              todoId={todoId}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
