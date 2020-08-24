import React, {Component} from 'react'
import Applicants from '../components/Applicants'
import {fetchApplicants} from '../actions/fetchApplicants'
import { connect } from 'react-redux'

class ApplicantsContainer extends Component {

    componentDidMount(){
        this.props.fetchApplicants();
      }

    render(){
        return(
            <div className="applicants">
                <Applicants people={this.props.applicants}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        applicants: state.applicantReducer.applicants
    }
}

export default connect(mapStateToProps, {fetchApplicants})(ApplicantsContainer) 