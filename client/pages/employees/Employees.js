import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';


// const useStyles = makeStyles({
//     root: {
//       width: '100%',
//     },
//     tableWrapper: {
//       maxHeight: 407,
//       overflow: 'auto',
//     },
// })

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rowsData = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9)
];

class Employees extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rows: rowsData,
            columns: [
                { id: 'name', label: 'Name', minWidth: 200 },
                { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
                {
                    id: 'population',
                    label: 'Population',
                    minWidth: 120,
                    align: 'right',
                    format: value => value.toLocaleString(),
                },
                {
                    id: 'size',
                    label: 'Size\u00a0(km\u00b2)',
                    minWidth: 120,
                    align: 'right',
                    format: value => value.toLocaleString(),
                },
                {
                    id: 'density',
                    label: 'Density',
                    minWidth: 120,
                    align: 'right',
                    format: value => value.toFixed(2),
                },
            ],
            rowsPerPage: 10,
            page: 0
        }
    }

    handleChangePage(event, newPage) {
      this.setState({
          page:newPage
      })
    }

    handleChangeRowsPerPage(event) {

      let rowsPerPage = this.state.rowPerPage + event.target.value
      this.setState({
        rowsPerPage,
      })
    }

    render() {
        let thiz = this
        return (
            <Paper >
                <div>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {this.state.columns.map(column => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.rows.slice(thiz.state.page * thiz.state.rowsPerPage, thiz.state.page * thiz.state.rowsPerPage + thiz.state.rowsPerPage).map(row => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {this.state.columns.map(column => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number' ? column.format(value) : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </div>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={this.state.rows.length}
                    rowsPerPage={this.state.rowsPerPage}
                    page={this.state.page}
                    backIconButtonProps={{
                        'aria-label': 'previous page',
                    }}
                    nextIconButtonProps={{
                        'aria-label': 'next page',
                    }}
                    onChangePage={this.handleChangePage.bind(this)}
                     onChangeRowsPerPage={this.handleChangeRowsPerPage.bind(this)}
                />
            </Paper>
        )
    }

}

export default withRouter(Employees)