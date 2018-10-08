import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
                    return (
                        <TableRow key={row.ID}>
                            <TableCell component="th" scope="row">
                                {row.ID}
                            </TableCell>
                            <TableCell >{row.NOME}</TableCell>
                            <TableCell numeric>{row.RatingAnterior}</TableCell>
                            <TableCell numeric>{row.RatingAtual}</TableCell>
                            <TableCell numeric>{row.RatingAtual - row.RatingAnterior}</TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    </Paper>
)
