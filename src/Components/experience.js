import React from 'react'
import { Component } from 'react/cjs/react.production.min'
import { ExpSubmit } from './submit';
import "/Users/vaibhavbansal/cv-project/src/styles/experience.css"

class Experience extends Component {
    constructor(){
        super();

        this.state={
            send:false
        }
        this.handleChange=this.handleChange.bind(this);
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
        <div className="experience">
       <form>
            <label>
                Company Name
                <input type="text" name='comp' onChange={this.handleChange} value={this.state.comp}/>
            </label>
            <label>
                Role
                <input type="text" name='role' onChange={this.handleChange} value={this.state.role}/>
            </label>
            <div className="date">
            <label>
                Start date
                <input type="text" value={this.state.start} name='start' onChange={this.handleChange}/>
            </label>
            <label>
                End Date
                <input type="text"  value={this.state.endD} name='endD' onChange={this.handleChange}/>
            </label>
            </div>
            <label>
                Details
                <input type="text" name='details' onChange={this.handleChange} value={this.state.details}/>
            </label>
            <button type="submit" onClick={this.handleClick}>Send</button>
        </form> 
        
        {this.state.send && <ExpSubmit comp={this.state.comp} role={this.state.role} start={this.state.start}
        end={this.state.endD} detail={this.state.details} /> }
        </div>
    )
    }
}

export default Experience
