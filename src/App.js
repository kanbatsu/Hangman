import React, { Component } from 'react';
import './App.css';

import Keyboard from './Keyboard'
import Hangman from './Hangman'
import Mask from "./Mask"
import WORDS from "./Words"

const LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const WIN_TXT = ["Félicitations !", "Vous avez réussi à trouver le mot avant d'être pendu !"];
const LOSE_TXT = ["Perdu !", "Vous n'avez pas réussi à trouver le mot, mais vous pouvez renter votre chance !"];

//TODO: Adding space in words
//TODO: Using an API to get a random word instead of an array

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      error: 0,
      word: WORDS[Math.floor(Math.random() * Math.floor(WORDS.length))],
      usedChar: "",
      guessed: 0
    }
  }

  addError = (state) => {
    this.setState({error: this.state.error + 1})
  };

  addGuessed = (letter) => {
    const { word, guessed } = this.state;
    let cpt = 0;
    for (let i = 0; i < word.length; i++)
    {
      if(letter === word.charAt(i)){cpt++}
    }
    this.setState({guessed: guessed + cpt})
  };

  checkChar = (letter) => {
    const { word, error, usedChar } = this.state;
    if (!usedChar.includes(letter))
    {
      this.setState({usedChar: usedChar + letter});
      if (!word.includes(letter))
      {
        this.addError(error)
      }
    else
      {
        this.addGuessed(letter)
      }
    }
  };

  resetGame = () => {
    let prevState = this.state;
    this.setState({word: WORDS[Math.floor(Math.random() * Math.floor(WORDS.length))]});
    this.setState({error: 0});
    this.setState({usedChar: ""});
    this.setState({guessed: 0});
    if(prevState !== this.state)
    {
      this.forceUpdate()
    }
  };


  render() {
    const { error, word, usedChar, guessed } = this.state;
    const end = error === 10 || guessed === word.length;
    return (
      <div className="App">
        <div id="menu" className={`bg-black ${(end) ? "ended" : ""}`}>
          <h2>{(error === 10) ? LOSE_TXT[0] : WIN_TXT[0]}</h2>
          <p>
            {(error === 10) ? LOSE_TXT[1] : WIN_TXT[1]}
          </p>
          <button onClick={this.resetGame}>Rejouer</button>
        </div>
        <header className="App-header">
          <Hangman count={error}/>
          <Mask word={word} usedChar={usedChar}/>
        </header>
        <section>
          <Keyboard keys={LETTERS} usedChar={usedChar} onClick={this.checkChar}/>
        </section>
      </div>
    );
  }
}

export default App;
