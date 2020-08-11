import React, {Component} from 'react'

class ApplicantForm extends Component {

    render(){
        return(
            <div className="ApplicantForm">
                <form>
                    <div>
                        <input type="text" name="name" placeholder="Name"/>
                        <label htmlFor="name">Name</label>
                    </div>
                    <div>
                        <input type="text" name="pet_name" placeholder="Pet's Name"/>
                        <label htmlFor="pet_name">Pet's Name</label>
                    </div>
                    <div>
                        <input type="text" name="email_address" placeholder="Email"/>
                        <label htmlFor="email_address">Email</label>
                    </div>
                    <div>
                        <input type="text" name="phone_number" placeholder="(555)555-5555"/>
                        <label htmlFor="phone_number">Phone Number</label>
                    </div>
                    <div>
                        <input type="text" name="address" placeholder="Address"/>
                        <label htmlFor="address">Address</label>
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

