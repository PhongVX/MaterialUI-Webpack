import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'

class DeleteButtonEmployee extends Component {
    constructor(props) {
        super(props)
    }

    handleDeleteEmployee=()=>{
        this.props.handleDeleteEmployee(this.props.id)
    }

    render() {
        return (
            <>
                <Button onClick={this.handleDeleteEmployee} variant="contained" size="small" color="secondary">
                    <Icon >delete</Icon>
                </Button>
            </>
        )
    }
}


export default  DeleteButtonEmployee