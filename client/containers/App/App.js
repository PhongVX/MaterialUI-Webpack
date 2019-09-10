import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { MuiThemeProvider } from '@material-ui/core/styles';
// import TaskBoard from './TaskBoard';
import theme from '../../commons/Theme'
import './App.scss'
import {Provider} from 'react-redux'
import configureStore from '../../store/configureStore'
import Layout from '../../components/Layout'

const store = configureStore()

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <MuiThemeProvider theme={theme}>
                    {/* <TaskBoard/> */}
                    <Layout/>
                </MuiThemeProvider>
            </Provider>
        )
    }
}
