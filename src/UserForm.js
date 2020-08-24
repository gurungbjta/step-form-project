import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'
import Confirm from './Confirm'
import Success from './Success'

export class UserForm extends Component {
    // initial state
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    }

    // proceed to the next step
    nextStep = () => {
        const {step} = this.state; // array destructure
        this.setState({step: step + 1});
    }

    // go back to the prev step
    prevStep = () => {
        const {step} = this.state;
        this.setState({step: step - 1});
    }

    // handle fields change like firstName, lastName, email, etc.
    // takes an input and when an event occurs (such as typing), it sets the input to that event value
    handleChange = input => e => {
        this.setState({[input] : e.target.value});
    }

    render() {
        const {step} = this.state; // now we don't have to write this.state everytime we mention "step" later on 
        const {firstName, lastName, email, occupation, city, bio} = this.state; // could've included step here
        const values = {firstName, lastName, email, occupation, city, bio}
        
        // depending on the step, it will return respective component page
        switch(step){
            case 1: // if step is 1, return FormUserDetails and pass nextStep, handleChange, values as props
                return(
                    <FormUserDetails nextStep={this.nextStep} handleChange={this.handleChange} values={values} />
                )

            case 2:
                return(
                    <FormPersonalDetails nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values} />
                )
            
            case 3:
                return(
                    <Confirm nextStep={this.nextStep} prevStep={this.prevStep} values={values} />
                )
            case 4:
                return(
                    <Success />
                )
        }
    }
}

export default UserForm
