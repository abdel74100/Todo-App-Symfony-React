import React, { useContext } from 'react';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/core/styles';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import TableBody from '@material-ui/core/TableBody';
import { TodoContext } from '../contexts/TodoContext';

function TodoTable() {
    const useStyles = makeStyles({
        table: {
            width: "850px",
            margin: "auto",
        },
    });
    const classes = useStyles();
    const context = useContext(TodoContext)
    console.log(context)
    return (
        <Table className={classes.table} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Tasks</TableCell>
                    <TableCell >Done</TableCell>
                    <TableCell >Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>
                        <TextField label='Add a new task' fullwidth="true" />
                    </TableCell>

                    <TableCell align="right">
                        <AddIcon />
                    </TableCell>
                </TableRow>
                {context.todos.map((c) => (
                    <TableRow key={c.id}>
                        <TableCell >{c.name}</TableCell>
                        <TableCell component="th" scope="row">
                            {c.done ? "did !" : "Have to do!"}
                        </TableCell>
                        <TableCell >
                            <EditIcon />
                            <DeleteIcon />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>



    );

}

export default TodoTable;