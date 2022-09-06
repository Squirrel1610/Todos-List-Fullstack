import React from 'react'
import Header from "../Components/Header";
import Form from "../Components/Form";

export default function AddTodo() {
  return (
    <div>
      <div className="container">
        <div className="app-wrapper">
          <div>
            <Header 
              title="Add todo"
            />
          </div>
          <div>
            <Form />
          </div>
        </div>
      </div>
    </div>
  )
}
