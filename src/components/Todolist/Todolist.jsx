import React from 'react';
import classes from "./Todolist.module.css";
import {TodoApp} from './TodoApp/TodoApp';

const Todolist = (props) => {
  return (
    <div className={classes.content}>
      <h1>Todolist</h1>  
      <TodoApp />
    </div>
  )
}

export default Todolist;

