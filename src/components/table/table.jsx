import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';

export default (props) => (
    <Paper >
        <Table >
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell numeric>Nome</TableCell>
                    <TableCell numeric>Anterior</TableCell>
                    <TableCell numeric>Atual</TableCell>
                    <TableCell numeric>Diferença</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.data.map(row => {
                    const dif = row.RatingAtual - row.RatingAnterior;
                    return (
                        <TableRow key={row.ID}>
                            <TableCell component="th" scope="row">
                                {row.ID}
                            </TableCell>
                            <TableCell >{row.NOME}</TableCell>
                            <TableCell numeric>{row.RatingAnterior}</TableCell>
                            <TableCell numeric>{row.RatingAtual}</TableCell>
                            <TableCell numeric>{dif} 
                            <Icon className={dif >= 0 ? "green" : "red"}>{dif >= 0 ? "arrow_upward" : "arrow_downward"}</Icon></TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    </Paper>
)
