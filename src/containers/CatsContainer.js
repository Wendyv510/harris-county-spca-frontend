import React, {Component} from 'react'
import fetchCats from '../actions/fetchCats'
import Cats from '../components/Cats' 
import { connect } from 'react-redux'

class CatsContainer extends Component {
    
    componentDidMount(){
         this.props.fetchCats()
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
        cats: state.catReducer.cats
    }
}

export default connect(mapStateToProps, {fetchCats})(CatsContainer) 