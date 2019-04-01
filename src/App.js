import React, {Component} from 'react';
import axios from 'axios'
import Wheel from './components/wheel/Wheel'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            colors: [],
            results: [],
            position: ''
        };
    }


    componentDidMount() {
        axios.get("https://dev-games-backend.advbet.com/v1/ab-roulette/1/configuration")
            .then(response => {
                this.setState({
                    colors: response.data.colors,
                    results: response.data.results,
                    position:response.data.positionToId
                });
            })
    }

    render() {
        const wheel = (
            <Wheel
                number = {this.state.results}
                color = {this.state.colors}
                position = {this.state.position}
            />
        );
        return (
            <div className="App">
                {wheel}
            </div>
        );
    }
}

export default App;
