import React, {Component} from 'react'
import fetchCats from '../actions/fetchCats'
import Cats from '../components/Cats' 
import { connect } from 'react-redux'

class CatsContainer extends Component {
    
    componentDidMount(){
         this.props.fetchCats()
      
        // fetch('https://localhost:3001/api/v1/cats')
        // .then(response => response.json())
        // .then(cats =>  console.log(cats))
    
    }
    

    render(){
        return(
            <div className="cats">
                <Cats felines = {this.props.cats}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        cats: state.cats
    }
}

export default connect(mapStateToProps, {fetchCats})(CatsContainer) 