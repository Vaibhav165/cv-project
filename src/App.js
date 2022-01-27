import './App.css';
import Personal from './Components/Personal';
import Experience from './Components/experience';
import Education from './Components/education';
import Submitted from './Components/submitted';
import { Component } from 'react/cjs/react.production.min';


class App extends Component {
  constructor(){
    super();
    this.state={
      isClick:false,
      send:false
    };

    this.handleClick=this.handleClick.bind(this);
  }
  handleClick(){
    this.setState({isClick:true,
    send:true});
  }
  render(){
    let sub;
    if(this.state.isClick){
     sub= <Submitted click={this.state.isClick}/>;
      }
  return (
    <div className="App">
      <h1>CV Application</h1>
      <Personal/>
      <Experience change={this.handleChange} />
      <Education change={this.handleChange}/>
      {/* <button onClick={this.handleClick}>Submit</button>
    { this.state.send && <Submitted click={this.state.isClick}/>} */}
    </div>
  );
}
}
export default App;
