import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import * as employeeActions from '../../actions/employeeActions'

// const useStyles = makeStyles({
//     root: {
//       width: '100%',
//     },
//     tableWrapper: {
//       maxHeight: 407,
//       overflow: 'auto',
//     },
// })

// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
// }

// const useStyles = makeStyles(theme => ({
//     button: {
//       margin: theme.spacing(1),
//     },
//     leftIcon: {
//       marginRight: theme.spacing(1),
//     },
//     rightIcon: {
//       marginLeft: theme.spacing(1),
//     },
//     iconSmall: {
//       fontSize: 20,
//     },
//   }));

class Employees extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rows: [],
            columns: [
                { id: 'last_name', label: 'Last Name', minWidth: 200 },
                { id: 'first_name', label: 'First Name', minWidth: 200 },
                { id: 'age', label: 'Age', minWidth: 100 },
                {
                    id: 'sex',
                    label: 'Sex',
                    minWidth: 120,
                    align: 'right',
                    format: value => value.toLocaleString(),
                },
                {
                    id: 'location',
                    label: 'Location',
                    minWidth: 120,
                    align: 'right',
                    format: value => value.toLocaleString(),
                }
            ],
            rowsPerPage: 10,
            page: 0,
            openModalEditing: false
        }
        this.handleModalEditingOpenClose = this.handleModalEditingOpenClose.bind(this)
        this.handleEditingModalOk = this.handleEditingModalOk.bind(this)
        this.handleModalEditingCancel = this.handleModalEditingCancel.bind(this)
    }

    componentDidMount() {
        const { employeeActionCreators } = this.props
        const { fetchListEmployeeRequest } = employeeActionCreators
        fetchListEmployeeRequest()
    }

    handleChangePage(event, newPage) {
        this.setState({
            page: newPage
        })
    }

    handleChangeRowsPerPage(event) {

        let rowsPerPage = this.state.rowPerPage + event.target.value
        this.setState({
            rowsPerPage,
        })
    }

    handleModalEditingOpenClose(){
        this.setState({
            openModalEditing: !this.state.openModalEditing
        })
    }

    handleEditingModalOk(){
        this.setState({
            openModalEditing: !this.state.openModalEditing
        })
    }

    handleModalEditingCancel(){
        this.setState({
            openModalEditing: !this.state.openModalEditing
        })
    }

    render() {
        let thiz = this
        console.log(this.props.listEmployee)
        // const classes = useStyles();
        return (
            <>
             <Dialog open={this.state.openModalEditing}  aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add New Employee</DialogTitle>
                <DialogContent>
                    <TextField
                        id="standard-multiline-flexible"
                        label="Last Name"
                        rowsMax="6"
                        //value={""}
                        //onChange={handleChange('multiline')}
                        // className={classes.textField}
                        margin="normal"
                    />
                    <TextField
                        id="standard-multiline-flexible"
                        label="First Name"
                        multiline
                        rowsMax="6"
                        //value={""}
                        //onChange={handleChange('multiline')}
                        // className={classes.textField}
                        margin="normal"
                    />
                    <TextField
                        id="standard-multiline-flexible"
                        label="Last Name"
                        rowsMax="6"
                        //value={""}
                        //onChange={handleChange('multiline')}
                        // className={classes.textField}
                        margin="normal"
                    />
                    <TextField
                        id="standard-multiline-flexible"
                        label="First Name"
                        multiline
                        rowsMax="6"
                        //value={""}
                        //onChange={handleChange('multiline')}
                        // className={classes.textField}
                        margin="normal"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleModalEditingCancel} color="primary">
                        Cancel
            </Button>
                    <Button onClick={this.handleEditingModalOk}  color="primary">
                        Ok
            </Button>
                </DialogActions>
            </Dialog>

            <Paper >
             <Button onClick={this.handleModalEditingOpenClose} variant="contained" color="primary">
                Add New &nbsp;
                <Icon >add</Icon>
            </Button>
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
                            {this.props.listEmployee.slice(thiz.state.page * thiz.state.rowsPerPage, thiz.state.page * thiz.state.rowsPerPage + thiz.state.rowsPerPage).map(row => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {this.state.columns.map(column => {
                                            const value = row[column.id];
                                            return (
                                                <>
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.format && typeof value === 'number' ? column.format(value) : value}
                                                    </TableCell>                                                    
                                                </>
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
            </>
        )
    }

}


const mapStateToProps = state => {
    return {
        listEmployee: state.employees.listEmployee
    }
}

const mapDispatchToProps = dispatch => {
    return {
        employeeActionCreators: bindActionCreators(employeeActions, dispatch)
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Employees))