import './App.css';
import {Fragment} from "react";
import {Routes, Route} from "react-router-dom";
import { AddTodo, EditTodo, Home } from './Imports';


function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<AddTodo />} />
        <Route path='/edit/:todoId' element={<EditTodo />} />
      </Routes>
    </Fragment>
  );
}

export default App;
