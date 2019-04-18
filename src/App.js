import React, {Component} from 'react';
import axios from 'axios'
import Wheel from './components/wheel/Wheel'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            allDataObj: {},
            nextGameUuid: '',
            nextGameStarts: '',
        };
        this.baseUrl = 'https://dev-games-backend.advbet.com/v1/ab-roulette/1';
    }

    componentDidMount() {
        this.configuration();
        this.nextGame();
    }





    configuration(){
        axios.get(this.baseUrl + "/configuration")
            .then(response => {
                let allDataObj = {};
                response.data.positionToId.forEach((key, position)=> {
                    allDataObj[position] = {position, number: response.data.results[key], color: response.data.colors[key]}
                });
                this.setState({
                    allDataObj
                });

            });
    }

    nextGame(){
        axios.get(this.baseUrl + "/nextGame")
            .then(response => {
                this.setState( {
                    nextGameUuid: response.data.uuid,
                    nextGameStarts: response.data.startDelta,
                });

                this.aaa(response.data.startDelta);
            });
    }

    aaa(time){
        setTimeout(() => {

            axios.get(this.baseUrl + '/game/' + this.state.nextGameUuid)
                .then(response => {
                    this.setState({
                        result: response.data.result
                    })
                });
            this.nextGame();
        }, time *1000 );
    }

    render() {
        const wheel = (
            <Wheel
                config = {this.state.allDataObj}
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
