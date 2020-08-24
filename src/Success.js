import React, { Component } from 'react'
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'


export class Success extends Component {
    // continue func is called when the button is clicked
    continue = (e) =>{
        e.preventDefault();
        this.props.nextStep(); // calls nextStep() of UserForm and increments step
    }

    back = (e) =>{
        e.preventDefault();
        this.props.prevStep(); // calls prevStep() of UserForm and decrements step
    }

    render() {

        return (
            <MultiThemeProvider>
                <>
                    <AppBar title="Success"></AppBar> 
                    <h1>Thank You for your submission</h1>
                    <p>You will get an email with further instructions</p>
                </>
            </MultiThemeProvider>
            
        )
    }
}

export default Success
