import React, { Component } from 'react'
import { withRouter } from "react-router-dom";

import employeesReducer from "../../reducers/employeeReducer"
import { withReducer} from "../../reducers/withReducer"
import injectReducer  from '../../reducers/inducer'
import { connect } from 'react-redux'

class Products extends Component {
    render() {
        console.log('Context')
        console.log(this.context)
        return (
            <div>
                Product
            </div>
        )
    }
}



export default  connect()(Products)