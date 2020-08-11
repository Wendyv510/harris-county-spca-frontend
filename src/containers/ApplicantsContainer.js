import React, {Component} from 'react'
import Applicants from '../components/Applicants'
import {fetchApplicants} from '../actions/fetchApplicants'
import ApplicantForm from '../components/ApplicantForm' 
import { connect } from 'react-redux'

class ApplicantsContainer extends Component {

    componentDidMount(){
        this.props.fetchApplicants()
      }

    render(){
        return(
            <div className="applicants">
                <Applicants/>
                <ApplicantForm/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        applicants: state.applicants
    }
}

export default connect(mapStateToProps, {fetchApplicants})(ApplicantsContainer) 