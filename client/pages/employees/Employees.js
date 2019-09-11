import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withStyles } from '@material-ui/styles'
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
import employeesStyle from './Employees.style'
import Box from '@material-ui/core/Box'

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
            openModalEditing: false,
            lastName:"",
            firstName:"",
            age:"",
            sex:"",
            location:""
          
            
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
        console.log(this.refs)
        this.setState({
            openModalEditing: !this.state.openModalEditing
        })
    }

    handleDialogTextFieldChange=(e)=>{
        let { target: { id, value } } = event
        this.setState({[id]:value})
        console.log(this.state)
    }

    render() {
        let {classes} = this.props
        let thiz = this
        return (
            <>
           
             <Dialog open={this.state.openModalEditing}  aria-labelledby="form-dialog-title">

                <DialogTitle id="form-dialog-title">Add New Employee</DialogTitle>
                <DialogContent>

                    <TextField
                        id="lastName"
                        label="Last Name"
                        rowsMax="6"
                        fullWidth
                        onChange={this.handleDialogTextFieldChange}
                        className={classes.textField}
                        margin="normal"
                    />
                    <TextField
                        id="firstName"
                        label="First Name"
                        multiline
                        rowsMax="6"
                        fullWidth
                        onChange={this.handleDialogTextFieldChange}
                        margin="normal"
                    />
                    <TextField
                        id="age"
                        label="Age"
                        fullWidth
                        onChange={this.handleDialogTextFieldChange}
                        margin="normal"
                    />
                    <TextField
                        id="standard-multiline-flexible"
                        label="Sex"
                        multiline
                        fullWidth
                        onChange={this.handleDialogTextFieldChange}
                        margin="normal"
                    />

                     <TextField
                        id="location"
                        label="Location"
                        multiline
                        rowsMax="6"
                        fullWidth
                        onChange={this.handleDialogTextFieldChange}
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
            <Button  className={classes.buttonAdd} onClick={this.handleModalEditingOpenClose} variant="contained" color="primary">
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


export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(employeesStyle)(Employees)))