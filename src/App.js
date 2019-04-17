import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Keyboard from './Keyboard'
import Hangman from './Hangman'
import Mask from "./Mask";

const WORDS = ["capitaine", "patate", "bateau"]

class App extends Component {
  state = {
    error: 0,
    word: WORDS[Math.floor(Math.random() * Math.floor(WORDS.length))]
  }

  GenerateMask() {

  }


  render() {
    const { error, word } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <Hangman count={this.state.error}/>
        </header>
        <section>
          <p onClick={() => this.setState({error:this.state.error + 1})}>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Mask word={word}/>
          <Keyboard/>
        </section>
      </div>
    );
  }
}

export default App;
