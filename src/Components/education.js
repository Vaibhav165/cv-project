import React from 'react'
import { Component } from 'react/cjs/react.production.min'
import {EduSubmit} from './submit';
import "/Users/vaibhavbansal/cv-project/src/styles/education.css"

class Education extends Component {
    constructor(){
        super();
        this.state={
            send:false
        }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleClick(e){
        e.preventDefault();
        this.setState({
            send:true
        })
    }
    render(){
    return (
        <div className="education">
         <form>
            <label>
             University Name
             <input type="text" name='univ' onChange={this.handleChange} value={this.state.univ}/>
            </label>
            <div className=""> 
            <label>
             Degree
             <input type="text" name='degree' onChange={this.handleChange} value={this.state.degree}/>
            </label>
            <label>
             Major field
             <input type="text" value={this.state.major} name='major' onChange={this.handleChange}/>
            </label>
            </div>
            <label>
            University Email
             <input type="text"  value={this.state.univEmail} name='univEmail' onChange={this.handleChange}/>
            </label>  
            <button type="submit" onClick={this.handleClick}>Send</button>
        </form>
        {this.state.send && <EduSubmit univ={this.state.univ} deg={this.state.degree} mf={this.state.major}
        uEmail={this.state.univEmail}/>}

        </div>
    )
    }
}

export default Education
