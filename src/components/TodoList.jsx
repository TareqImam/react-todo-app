import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList({ todos, handleDeleteTodo, handleUpdateTodo }) {
    return (
        <div>
            {todos.map((todo, index) => {
                return (
                    <TodoCard
                        key={index}
                        index={index}
                        todo={todo}
                        handleDeleteTodo={handleDeleteTodo}
                        handleUpdateTodo={handleUpdateTodo}
                    />
                );
            })}
        </div>
    );
}
