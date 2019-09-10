import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import taskBoardStyles from './TaskBoard.style'
import { STATUSES } from "../../../constants"
import TaskList from '../../../components/TaskList'
import TaskForm from '../../../components/TaskForm'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import  * as taskAction from '../../../actions/tasks'


class TaskBoard extends Component {
    
    constructor(props){
        super(props)
        this.state={
            open:false
        }
        this.openForm = this.openForm.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    componentDidMount(){
        const {taskActionCreators} = this.props 
        const {fetchListTaskRequest}= taskActionCreators
        fetchListTaskRequest()
    }

    renderBoard() {
        const { listTask } = this.props;
        let xhtml = null;
        xhtml = (
            <Grid container spacing={2}>
                {
                    STATUSES.map((status, index) => {
                        const taskFiltered = listTask.filter(task => task.status == status.value)
                        return <TaskList key={index} tasks={taskFiltered} status={status} />
                    })
                }
            </Grid>

        );
        return xhtml
    }

    handleClose(){
        this.setState({
            open:false
        })
    }

    renderForm() {
        const {open} = this.state
        let xhtml = (
            <TaskForm open={open} onClose={this.handleClose}/>
        );

        return xhtml;
    }

    openForm(){
        this.setState({
            open:true
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <>
                <Button variant="contained" color="primary" size="small" onClick={this.openForm}>Thêm Mới Công Việc</Button><br />
                <div className={classes.taskboard}>
                    {this.renderBoard()}
                    {this.renderForm()}
                </div>
            </>
        )
    }
}

const mapStateToProps = state =>{
    return{
        listTask: state.tasks.listTask
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        taskActionCreators:bindActionCreators(taskAction, dispatch)
    }
} 

export default withStyles(taskBoardStyles)(connect(mapStateToProps, mapDispatchToProps)(TaskBoard))
