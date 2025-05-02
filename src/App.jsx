import { useEffect, useState } from "react"
import React from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

export default function App() {
    const [todos, setTodos] = useState([]);
    const [todoValue, setTodoValue] = useState([]); 

    function persistData(newList) {
        localStorage.setItem('todos', JSON.stringify({ todos: newList }));
    }

    function handleAddTodo(newTodo) {
      const newTodoList = [...todos, newTodo]
      persistData(newTodoList);
      setTodos(newTodoList);
    }

    function handleDeleteTodo(index) {
      const newTodoList = todos.filter((todo, i) => i !== index);
      persistData(newTodoList);
      setTodos(newTodoList);
    }

    function handleUpdateTodo(index) {
      const updateTodoValue = todos[index];
      setTodoValue(updateTodoValue);
      handleDeleteTodo(index);
    }

    useEffect(() => {
      if(!localStorage){
        return
      }

      let localTodos = localStorage.getItem('todos');
      if(!localTodos){
        return  
      }

      localTodos = JSON.parse(localTodos).todos;
      setTodos(localTodos);
    },[])

  return (
      <>
          <TodoInput
            todoValue={todoValue}
            setTodoValue={setTodoValue}
            handleAddTodo={handleAddTodo}
          />
          <TodoList
              todos={todos}
              handleDeleteTodo={handleDeleteTodo}
              handleUpdateTodo={handleUpdateTodo}
          />
      </>
  );
}
