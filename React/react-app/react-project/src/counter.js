import React, { Component } from 'react';


const ErrorCatch=()=>{
  throw(new Error("Error occured!"));
  return(
    <div></div>
  )
}
class counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
        number:0
    };
  }
  componentWillMount(){
    console.log("componenetWillMount: (deprecated)");
  }

  componentDidMount(){
    console.log("componenetDidMount");
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log("shouldComponentUpdate")
    if(nextState.number%5===0){
      return false;
    }
    return true;
  }

  componentWillUpdate(nextProps,nextState){
    console.log("componentWillUpdate");
  }

  componentDidUpdate(nextProps,nextState){
    console.log("componentDidUpdate");
  }


  handleIncrease = ()=>{
    this.setState((state)=>({
        number : state.number+1
    })
    );

}
handleDecrease = ()=>{
  this.setState((state)=>({
    number : state.number-1
})
);
}
componentDidCatch(error,info){
  this.setState({
    error:true
  })
}
  render() {
    return (
      <div>
      <h1>Counter</h1>
      <div>number:{this.state.number}</div>
      {this.state.number===4 && <ErrorCatch/>}
      <button type="button" onClick={this.handleIncrease}>+</button>
      <button type="button" onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default counter;
