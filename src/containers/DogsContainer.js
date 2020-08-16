import React, {Component} from 'react'
import fetchDogs from '../actions/fetchDogs'
import Dogs from '../components/Dogs' 
import { connect } from 'react-redux'

class DogsContainer extends Component {

    componentDidMount(){
        this.props.fetchDogs()
    }
    

    render(){
        return(
            <div className="dogs">
                <Dogs mutts={this.props.dogs}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        dogs: state.dogs.dogs
    }
}

export default connect(mapStateToProps, {fetchDogs})(DogsContainer) 