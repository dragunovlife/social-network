import React, {Component} from 'react';
import classes from "./TestX.css";
import AppsHeader from '../TemplateApps/AppsHeader/AppsHeader';

//////////////////////////////////////////
var numbers = 0;

function plusOne() {
  numbers++;
  var x = document.getElementById("demo")
  x.innerHTML = numbers;

}
/////////////////////////////////////////

class TestX extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stripBg: ''
    };
  }

  handleClick(e) {
    this.setState({ stripBg: 'yellow' });
  }

  render() {
    const style = { backgroundColor: this.state.stripBg };
    return (
      <div className="App">
      <AppsHeader />
      <div className="App-header">
      <h2 className="fade">Welcome to React</h2>
      </div>
      <div className="App-section">
      <div className="strip" style={ style }>
      <input type="radio" onClick={ e => this.handleClick() } />
      </div>
      </div>

 
      <div>
      <p id="demo"></p>
      <button onClick={plusOne}>Try it</button>
      </div>


      </div>
      );
  }
}

export default TestX;