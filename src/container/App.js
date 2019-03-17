import React, { Component } from 'react';
import axios from 'axios'
import './App.scss';

class App extends Component {
  state =   {
    colors: [],
  };

  componentDidMount (){
    axios.get("https://dev-games-backend.advbet.com/v1/ab-roulette/1/configuration")
        .then(response => {
          this.setState({colors: response.data.colors});
          //console.log(response)
        })
  }



  render() {
     const colors = this.state.colors.map(color => {
          return <div className={'Box'} style={{backgroundColor: color}}></div>
      });
    //console.log(style);

    return (
      <div className="App">
          {colors}
      </div>
    );
  }
}

export default App;
