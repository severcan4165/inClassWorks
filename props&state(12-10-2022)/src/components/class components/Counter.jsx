import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
      }
    }
    increment = () =>{
        this.setState({
            count : this.state.count +1,
        })
    }
    decrement = ()=>{
        this.setState({
            count : this.state.count -1,
        })
     
    }


  render() {
    return (
       <div className="container text-center mt-4">
        <h1>CLASSFUL COMPONENTS</h1>
        <h2 className="display-4 text-danger">COUNT:{this.state.count} </h2>
        <button onClick={this.increment} className="btn btn-success">
          INC
        </button>

        <button onClick={this.decrement} className="btn btn-danger">
          DEC
        </button>
      </div>
    )
  }
}

export default Counter