import React, {Component} from 'react'
import {fetchCats} from '../actions/fetchCats'
import Cats from '../components/Cats' 
import { connect } from 'react-redux'

class CatsContainer extends Component {

    componentDidMount(){
        this.props.fetchCats()
      }

    render(){
        return(
            <div className="cats">
                <Cats/>
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