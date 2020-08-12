import React, {Component} from 'react'

class ApplicantForm extends Component {

    render(){
        return(
            <div className="ApplicantForm">
                <form>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" placeholder="Name"/>
                    </div>
                    <div>
                        <label htmlFor="pet_name">Pet's Name</label>
                        <input type="text" name="pet_name" placeholder="Pet's Name"/>
                    </div>
                    <div>
                        <label htmlFor="email_address">Email</label>
                        <input type="text" name="email_address" placeholder="Email"/>
                    </div>
                    <div>
                        <label htmlFor="phone_number">Phone Number</label>
                        <input type="text" name="phone_number" placeholder="(555)555-5555"/>
                    </div>
                    <div>
                        <label htmlFor="address">Address</label>
                        <input type="text" name="address" placeholder="Address"/>
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

