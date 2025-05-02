import { Button, TextField } from '@mui/material';
import React from 'react'

export default function TodoInput(props) {
    const { handleAddTodo, todoValue, setTodoValue } = props;

    return (
        <div style={{ display: 'flex' }}>
            <TextField
                sx={{ margin: '10px' }}
                fullWidth
                id="fullWidth"
                label="Todo"
                variant="outlined"
                placeholder="Enter your todo"
                value={todoValue}
                onChange={(e) => setTodoValue(e.target.value)}
            />
            <Button
                sx={{ margin: '10px' }}
                variant="contained"
                onClick={() => {
                    handleAddTodo(todoValue);
                    setTodoValue('');
                }}>
                Add
            </Button>
        </div>
    );
}
