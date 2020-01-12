import React from 'react'
import Commands from "./Commands"
var cursor = 0;
var isPrevKeyArr = false;
class CommandLine extends React.Component {
  constructor(props){
    super()
    this.state = {
      messages: props.startupMessages,
      history: [""],
    }
  }
  componentDidMount() {
    // Help new vistors know what to do
    this.addCommands("help")
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
      // add to history
    this.setState({
      history: [...this.state.history, input]})
        //Check command
        await new Promise(r => setTimeout(r, 10))
    this.setState({
      messages: [...this.state.messages, Commands.checkCommand(input)]});
      if(input == "clear") {
        this.setState({messages: []})
      }

  }
  onKeyDown = (e) => {
    if(!isPrevKeyArr)
      cursor = 0;

    let input =  document.getElementById("terminalInput").innerHTML.toLowerCase();
    if(e.key == 'Enter')
    {
      e.preventDefault();
      this.addCommands(input);
    } else if(e.key == "ArrowUp"){
      if(cursor < (this.state.history.length -1)) {
        cursor++;
      }
    } else if(e.key == "ArrowDown"){
      if(cursor > 0) {
        cursor--;
      }
    }
    if(e.key =="ArrowUp" || e.key == "ArrowDown") {
      let text = this.state.history[this.state.history.length - cursor];
      document.getElementById("terminalInput").innerHTML = (text === undefined) ? "" : text;
    }
        isPrevKeyArr = (e.key =="ArrowUp" || e.key == "ArrowDown")
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
