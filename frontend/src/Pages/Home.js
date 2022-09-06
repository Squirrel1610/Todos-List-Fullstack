import React from 'react';
import Header from "../Components/Header";
import TodoList from "../Components/TodoList";
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <div className="container">
        <div className="app-wrapper">
          <div>
            <Link to="/add">
              <button className='button-add'>
                Add todo
              </button>
            </Link>
          </div>
          <div>
            <Header 
              title="Todos - list"
            />
          </div>
          <div>
            <TodoList />
          </div>
        </div>
      </div>
    </div>
  )
}
