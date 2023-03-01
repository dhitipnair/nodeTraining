import React, { Component, useState } from 'react'



export default class LifeCycleMethod extends Component {
    constructor(props){
        super(props)
        console.log("Calling constructor")
        this.state={count:0}
        this.click=this.click.bind(this)
    }
     click(){
         this.setState((x)=>({...x,count:x+1}))
     }
  render() {
    
      console.log("render method")
    return (
       
      <div>
          LifeCycleMethod
          <button onClick={this.click}>Click</button>
          {/* {this.state.count<3 &&  */}
          <h1>{this.count}</h1>
          {/* } */}
    </div>
    )
  }
  shouldComponentUpdate(){
      // this method will decide whethere the update should be reflected or not if it is return true
      //it will update else it will not call componentDidUpdate
      //it accept 2 args nextprops,nextstate
      //nextprops means before updating the component this method is called and props value is stored
      //nextstate allso state is stored
      console.log("Calling shouldComponentUpdate");
      return true;
  }
  componentWillMount(){
      //if we want to include anything before calling render method this method is used
      //this method is deprecated
      console.log("calling componentWillMount")
  }
  componentWillUnmount(){
      //it is called when a component is destroyed
      //for that we can use conditional rendering and when it goes to else part
      //the component will be destroyed
      console.log("calling componentWillUnmount")

  }
  componentDidMount(){
      console.log("calling componentDidMount")
  }
  componentDidUpdate(){
      //whenever state value or prop value is updated this method is called
      console.log("calling componentDidUpdate")
  }
}
