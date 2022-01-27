import React from 'react'
import { Component } from 'react/cjs/react.production.min'
import Random from './random';
import {PerSubmit} from './submit'
import "/Users/vaibhavbansal/cv-project/src/styles/personal.css"

class Personal extends Component {
    constructor(props){
        super(props);
     this.state={
        //  fname:'',
        //  lname:'',
        //  phoneNum:'',
        //  email:'',
        //     country:''  
        send:false  
      }
     this.handleChange = this.handleChange.bind(this);
     this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value //This is how we handle multiple text inputs

            // fname:e.target.value,  I can't do like this as e.target.value is same and that will be stored 
            //lname:e.target.value    both fname and lname and due to this both will display same user's input
            
        });
    }
    handleClick(e){
        // alert(this.state.first)
        e.preventDefault();
        this.setState({send: true})
    }
    render(){
    return (
        <div className='person'>
    
         <form>
             <div className="name"> 
             <label>
                 First Name
                 <input type="text" name="first" onChange={this.handleChange} value={this.state.first}/>
            
             </label>
             <label>
                 Last Name
                 <input type="text" name='last' onChange={this.handleChange} value={this.state.last}/>
             </label>
             </div>
             <div className="contact">
             <label>
                 Phone
                 <input type="number" value={this.state.phoneNum} name='phone' onChange={this.handleChange}/>
             </label>
             <label>
                 Email
                 <input type="email"  value={this.state.email} name='email' onChange={this.handleChange}/>
             </label>
             </div>
             <label>
                 Country
                 <input type="text" name='country' onChange={this.handleChange} value={this.state.country}/>
             </label>
             <button onClick={this.handleClick}>Submit</button>
             {/* {this.state.send &&<PerSubmit fname={this.state.first} lname={this.state.last} num={this.state.phone}
        email={this.state.email} country={this.state.country}/>   } */}
        </form>
        {/* <button onClick={this.handleClick}>Submit</button> */}
        {/* {this.state.send && <Random fname={this.state.first} lname={this.state.last}/> } */}
        {this.state.send &&<PerSubmit fname={this.state.first} lname={this.state.last} num={this.state.phone}
        email={this.state.email} country={this.state.country}/>   }
         
        </div>
        
    )
    }
}

export default Personal
