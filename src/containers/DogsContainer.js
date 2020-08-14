import React, {Component} from 'react'
import {fetchDogs} from '../actions/fetchDogs'
import Dogs from '../components/Dogs' 
import { connect } from 'react-redux'

class DogsContainer extends Component {

    componentDidMount(){
      //  this.props.fetchDogs()
      
        fetch('https://localhost:3001/api/v1/questions')
        .then(response => response.json())
        .then(dogs => console.log(dogs) )
        
    }
    

    render(){
        return(
            <div className="dogs">
                <Dogs mutts = {this.props.dogs}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        dogs: state.dogs
    }
}

export default connect(mapStateToProps, {fetchDogs})(DogsContainer) 