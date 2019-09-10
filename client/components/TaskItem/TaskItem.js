import React, { Component } from 'react'
import taskItemStyles from './TaskItem.style'
import { withStyles } from '@material-ui/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';

class TaskItem extends Component {
    render() {
        const {classes, task, status} = this.props
        return (
            <Card key={task.id} className={classes.card}>
            <CardContent>
                <Grid container justify="space-between">
                    <Grid item md={8}>
                        <Typography component="h2">
                            {task.title}
                        </Typography>
                    </Grid>
                    <Grid item md={4}>
                        {
                            status.label
                        }
                    </Grid>
                </Grid>
                <p>{task.description}</p>
            </CardContent>
            <CardActions className={classes.cardActions}>
            <Fab color="primary" aria-label="add" className={classes.fab} size="small">
                <AddIcon />
            </Fab>
            <Fab color="secondary" aria-label="edit" className={classes.fab} size="small">
                <EditIcon />
            </Fab>
            </CardActions>
        </Card>
        )
    }
}

export default withStyles(taskItemStyles)(TaskItem)