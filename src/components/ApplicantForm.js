import React, {Component} from 'react'
import { connect } from 'react-redux'
import addApplicant from '../actions/addApplicant'
import {Redirect} from 'react-router-dom';

class ApplicantForm extends Component {
    
    state={
        name: '',
        pet_name: '',
        email_address: '',
        phone_number: '',
        address: ''
    }
    
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
            [event.target.pet_name]: event.target.value,
            [event.target.email_address]: event.target.value,
            [event.target.phone_number]: event.target.value,
            [event.target.address]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addApplicant(this.state)
        this.setState({
            name: '',
            pet_name: '',
            email_address: '',
            phone_number: '',
            address: ''
        })
        return  <Redirect  to="/" />
    }

    render(){
        return(
            <div className="ApplicantForm">
                <form onSubmit = {this.handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" onChange = {this.handleChange} value={this.state.name} placeholder="Name"/>
                    </div>
                    <div>
                        <label htmlFor="pet_name">Pet's Name</label>
                        <input type="text" name="pet_name" onChange = {this.handleChange} value={this.state.pet_name} placeholder="Pet's Name"/>
                    </div>
                    <div>
                        <label htmlFor="email_address">Email</label>
                        <input type="text" name="email_address" onChange = {this.handleChange} value={this.state.email_address} placeholder="Email"/>
                    </div>
                    <div>
                        <label htmlFor="phone_number">Phone Number</label>
                        <input type="text" name="phone_number" onChange = {this.handleChange} value={this.state.phone_number} placeholder="(555)555-5555"/>
                    </div>
                    <div>
                        <label htmlFor="address">Address</label>
                        <input type="text" name="address" onChange = {this.handleChange} value={this.state.address} placeholder="Address"/>
                    </div>
                    <div>
                        <input type="submit" value="Apply"/>
                    </div>
                </form> 
            </div>
        )
    }
}

export default connect(null,{addApplicant})(ApplicantForm) 

