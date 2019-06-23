import React, { Component } from 'react';

class Button extends Component  {
  
    //This object will hold in our data thats waiting to be rendered, stores output from api call
    constructor() {
      super();
  
      this.state = {
        message: '',
        nextQuestion: '',
      };
    }
  
    componentDidMount() {
      fetch(`https://api.noopschallenge.com/fizzbot`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          message: data.message,
          nextQuestion: data.nextQuestion }) 
          console.log(data)
      }, 
    );
  }


  render(){
    return (
      <div>
        <button onClick = {this.message} type="button" className="btn btn-outline-warning">Ask Away</button>
      </div>
    )
  }
}

export default Button;