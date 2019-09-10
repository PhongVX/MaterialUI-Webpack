import React, { Component } from 'react'
import taskFormStyles from './TaskForm.style'
import { withStyles } from '@material-ui/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

class TaskForm extends Component {
    render() {
        const { open, onClose, classes } = this.props
        return (
            <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                    <TextField
                        id="standard-multiline-flexible"
                        label="Multiline"
                        rowsMax="4"
                        //value={""}
                        //onChange={handleChange('multiline')}
                        className={classes.textField}
                        margin="normal"
                    />
                    <TextField
                        id="standard-multiline-flexible"
                        label="Multiline"
                        multiline
                        rowsMax="4"
                        //value={""}
                        //onChange={handleChange('multiline')}
                        className={classes.textField}
                        margin="normal"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} color="primary">
                        Cancel
            </Button>
                    <Button onClick={onClose} color="primary">
                        Ok
            </Button>
                </DialogActions>
            </Dialog>
        )
    }
}

export default withStyles(taskFormStyles)(TaskForm)