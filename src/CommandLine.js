import React from 'react'
import Commands from "./Commands"
class CommandLine extends React.Component {
  constructor(props){
    super()
    this.state = {
      messages: props.startupMessages
    }
  }
  loadStartUp = () => {
    var arr = [];
    for(let [i, c] of this.state.messages.entries())
    {
      let v = c.split("<br>")
      if(v.length == 1) {
        arr.push( (<div key = {c + i}>{c}</div>))
      }
      else {
        for(let [i2, c2] of v.entries()) {
          arr.push( (<div key = {c + i + c2 + i2}>{c2}</div>))
        }
      }
    }
    return arr;
  }
  async addCommands(input) {
    document.getElementById("terminalInput").innerHTML = "";
    this.setState({
      messages: [...this.state.messages, "levih>" + input]})
        //Check command
        await new Promise(r => setTimeout(r, 10))
    this.setState({
      messages: [...this.state.messages, Commands.checkCommand(input)]});


  }
  onKeyDown = (e) => {
    let input =  document.getElementById("terminalInput").innerHTML;
    if(e.key == 'Enter')
    {
      e.preventDefault();
      this.addCommands(input);
    }

  }
  render() {
    const startUpMessages = this.loadStartUp();
    const style = {
      position: "absolute",
      width: "95%",
      height: "100%",
      outline: "0px solid transparent",
      display: "inline-block"
    }
    return (
    <div>
      {startUpMessages}
      <span>levih></span>
      <div id= "terminalInput" contentEditable="true" onKeyDown={this.onKeyDown} style={style}>

      </div>
    </div>
    )
  }
}
export default CommandLine;
