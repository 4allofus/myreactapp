import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
  */
 class Car extends React.Component {
  constructor() {
    super()
    this.state = {color: "white"}
  }
  changeColor = () =>{
    this.setState({color: "blue"})
  }

  render() {
    return (
    <div>
    <h2>This state color: {this.state.color} Car!</h2>
      <h2>This props color: {this.props.color} Car!</h2> 
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
      );
  }
}

class Model extends React.Component{
constructor(){
  super()
  this.state= {color:"purple"}
}

shiftColor = () =>{
  this.setState({color: "pink"})
  alert("color has been changed")
}
  render(){
    return(
      <div>
        <h1>Who own this ?</h1>
        <Car color="red"/>
        <h2>This is in model color: {this.state.color} Model</h2>
        <button type="button" onClick={this.shiftColor}>Change color Model</button>

        <App />
      </div>
    );
  }
}


 ReactDOM.render(<Model />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
