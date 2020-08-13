import React, {Component} from 'react'

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
            name: event.target.name.value,
            pet_name: event.target.pet_name.value,
            email_address: event.target.email_address.value,
            phone_number: event.target.phone_number.value,
            address: event.target.address.value
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
    }

    render(){
        return(
            <div className="ApplicantForm">
                <form onSubmit = {event => this.handleSubmit(event)}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" onChange = {event => this.handleChange(event)} value={this.state.name} placeholder="Name"/>
                    </div>
                    <div>
                        <label htmlFor="pet_name">Pet's Name</label>
                        <input type="text" name="pet_name" onChange = {event => this.handleChange(event)} value={this.state.pet_name} placeholder="Pet's Name"/>
                    </div>
                    <div>
                        <label htmlFor="email_address">Email</label>
                        <input type="text" name="email_address" onChange = {event => this.handleChange(event)} value={this.state.email_address} placeholder="Email"/>
                    </div>
                    <div>
                        <label htmlFor="phone_number">Phone Number</label>
                        <input type="text" name="phone_number" onChange = {event => this.handleChange(event)} value={this.state.phone_number} placeholder="(555)555-5555"/>
                    </div>
                    <div>
                        <label htmlFor="address">Address</label>
                        <input type="text" name="address" onChange = {event => this.handleChange(event)} value={this.state.address} placeholder="Address"/>
                    </div>
                    <div>
                        <input type="submit" value="Apply"/>
                    </div>
                </form> 
            </div>
        )
    }
}

export default ApplicantForm 

