import { CardActions, IconButton } from '@mui/material';
import { Card, Typography, CardContent } from '@mui/material';
import React from 'react';
import EditSquareIcon from '@mui/icons-material/EditSquare';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TodoCard({ index, todo, handleDeleteTodo, handleUpdateTodo }) {
    return (
        <div>
            <Card sx={{ margin: '10px' }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {todo}
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton
                        aria-label="edit"
                        color="primary"
                        onClick={() => handleUpdateTodo(index)}>
                        <EditSquareIcon />
                    </IconButton>
                    <IconButton
                        aria-label="delete"
                        color="error"
                        onClick={() => handleDeleteTodo(index)}>
                        <DeleteIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    );
}
