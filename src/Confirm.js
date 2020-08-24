import React, { Component } from 'react'
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import {List, ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

export class Confirm extends Component {
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
        // make every item of values as this.props to avoid writing this.props everytime as this.props.values.firstName
        const {values: {firstName, lastName, email, occupation, city, bio}} = this.props; 
        return (
            // primaryText is the label
            // secondaryText is the actual value passed
            <MultiThemeProvider>
                <>
                    <AppBar title="Confirm User Data"></AppBar> 

                    <List>
                        <ListItem primaryText="First Name" secondaryText={firstName}></ListItem>
                        <ListItem primaryText="Last Name" secondaryText={lastName}></ListItem>
                        <ListItem primaryText="Email" secondaryText={email}></ListItem>
                        <ListItem primaryText="Occupation" secondaryText={occupation}></ListItem>
                        <ListItem primaryText="City" secondaryText={city}></ListItem>
                        <ListItem primaryText="Bio" secondaryText={bio}></ListItem>
                    </List>

                    <RaisedButton label="Confirm and Continue" primary={true} style={styles.button} onClick={this.continue}></RaisedButton>
                    <RaisedButton label="Back" primary={true} style={styles.button} onClick={this.back}></RaisedButton>
                </>
            </MultiThemeProvider>
            
        )
    }
}

const styles = {
    button: { margin : 15}
}

export default Confirm
