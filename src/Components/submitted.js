import React from 'react'
import { Component } from 'react/cjs/react.production.min'

class Submitted extends Component {
    // static f = this.props.fname;
    constructor(props){
        super(props);
    }
    display(){
    this.setState({
        fname:this.props.fname
    })
    // console.log(this.props.fname)
}

    render(){
    return (
        <div>
          <h1>Name : {this.props.fname} {this.props.lname}</h1>
          
        </div>
    )
}
}


export default Submitted
