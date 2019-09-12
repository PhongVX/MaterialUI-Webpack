import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'

class TableCellDeleteButton extends Component {
    constructor(props) {
        super(props)
    }

    handleDelete=()=>{
        this.props.handleDelete(this.props.id)
    }

    render() {
        return (
            <>
                <Button onClick={this.handleDelete} variant="contained" size="small" color="secondary">
                    <Icon >delete</Icon>
                </Button>
            </>
        )
    }
}


export default  TableCellDeleteButton