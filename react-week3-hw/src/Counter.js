import React, { Component } from 'react';
import logo from './logo.svg';

class Counter extends Component
{
    constructor(props) {
      super(props);

      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
      this.reset     = this.reset.bind(this);

      this.state = {
        counter: 0,
      };
    }

    increment() {
      console.log('increment()', this);
      this.setState({
        counter: this.state.counter + 1,
      })
    }

    decrement() {
      console.log('decrement()', this)

      var noNegs = this.state.counter - 1;

      if (noNegs < 1) {
        console.log("wtf")
        noNegs = 0;
        console.log(noNegs);

      }

      console.log(noNegs);

      this.setState({
        counter: noNegs,
      })
    }

    reset(){
      console.log('reset', this)

      this.setState({
        counter: this.state.counter = 0,
      })
    }

  	render() {

  		const { title } = this.props;
      const { counter } = this.state;
  		
  		return (
        <div>
    	        <p>
              Counter: {counter}
              </p>
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>
            <button onClick={this.reset}>reset</button>
        </div>
        );

    }
}


export default Counter;