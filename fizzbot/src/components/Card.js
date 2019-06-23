import React, { Component } from 'react';

class Card extends Component  {

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
          console.log(data.message)
      },
    );
  }

  render(){
    return (
      <div className="card">
        <div className="card-body">
          {this.state.message}
        </div>
      </div>
    )
  }
}

export default Card;