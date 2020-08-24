import React, { Component } from 'react'
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

// UserDetails include name and email
export class FormUserDetails extends Component {
    // continue func is called when the button is clicked to continue to the next step or page
    continue = (e) =>{
        e.preventDefault();
        this.props.nextStep(); // calls nextStep() of UserForm (passed as props to FormUserDetails) which increments step
    }

    render() {
        const {values, handleChange} = this.props;
        // AppBar creates a navbar and RaiseButton creates a button
        // onChange calls the props handleChange that takes an input
        // defaultValue is initially empty as their states are empty (see UserForm state)
        // primary on RaisedButton means primary(blue) color
        // style={styles.button} calls the button of styles
        return ( 
            <MultiThemeProvider>
                <>
                    <AppBar title="Enter User Details"></AppBar> 
                    <TextField hintText="Enter your First Name" floatingLabelText="First Name" onChange={handleChange('firstName')} defaultValue={values.firstName}></TextField>
                    <br/>

                    <TextField hintText="Enter your Last Name" floatingLabelText="Last Name" onChange={handleChange('lastName')} defaultValue={values.lastName}></TextField>
                    <br/>

                    <TextField hintText="Enter your Email" floatingLabelText="Email" onChange={handleChange('email')} defaultValue={values.email}></TextField>
                    <br/>

                    <RaisedButton label="Continue" primary={true} style={styles.button} onClick={this.continue}></RaisedButton>
                </>
            </MultiThemeProvider>
            
        )
    }
}

const styles = {
    button: { margin : 15}
}

export default FormUserDetails
