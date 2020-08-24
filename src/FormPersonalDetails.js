import React, { Component } from 'react'
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

// PersonalDetails include occupation, city, bio
export class FormPersonalDetails extends Component {
    // continue func is called when the button is clicked to continue to next page/step
    continue = (e) =>{
        e.preventDefault();
        this.props.nextStep(); // calls nextStep() of UserForm and increments step
    }

    // back func is called when the button is clicked to go to back to prev page/step
    back = (e) =>{
        e.preventDefault();
        this.props.prevStep(); // calls prevStep() of UserForm and decrements step
    }

    render() {
        const {values, handleChange} = this.props;
        // includes one extra back button that calls back function
        // let's make back button white so primary={false}
        return (
            <MultiThemeProvider>
                <>
                    <AppBar title="Enter Personal Details"></AppBar> 
                    <TextField hintText="Enter your Occupation" floatingLabelText="Occupation" onChange={handleChange('occupation')} defaultValue={values.occupation}></TextField>
                    <br/>

                    <TextField hintText="Enter your City" floatingLabelText="City" onChange={handleChange('city')} defaultValue={values.city}></TextField>
                    <br/>

                    <TextField hintText="Enter your Bio" floatingLabelText="Bio" onChange={handleChange('bio')} defaultValue={values.bio}></TextField>
                    <br/>

                    <RaisedButton label="Continue" primary={true} style={styles.button} onClick={this.continue}></RaisedButton>
                    <RaisedButton label="Back" primary={false} style={styles.button} onClick={this.back}></RaisedButton>
                </>
            </MultiThemeProvider>
            
        )
    }
}

const styles = {
    button: { margin : 15}
}

export default FormPersonalDetails
