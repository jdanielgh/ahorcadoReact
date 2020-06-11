import React, { Component } from 'react';
import Header from './Header';
import Result from './Result';
import Letters from './Letters';
import Worlds from './Worlds';
import { worlds } from '../constant/game-const';
import { allImage } from '../constant/images-const';

export class Main extends Component {

    componentDidMount() {
        const worldArray = worlds[this.getRandomInt(0, worlds.length)].split('');
        this.setState({ world: worldArray });
        console.log(worldArray)
    }

    getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    validateLetter = (letter) => {
        const statusGame = this.validateFinishGame();
        if (statusGame === 'incompleto') {
            const valor = this.state.world.find(world => world === letter) ;
            if (valor) {
                const worldTry = [...this.state.worldTry];
                worldTry.push(letter);
                this.setState({ worldTry: [...worldTry] })
            } else {
                const images = [...this.state.images];
                images.push(allImage[this.state.images.length]);
                this.setState({ images })
            }
            console.log(this.state);
        }
        this.setState({...this.status, status: this.validateFinishGame() });
    }

    validateFinishGame = () => {
        if (this.state.worldTry.length === this.state.world.length) {
            return 'completo'
        } else if(this.state.images.length === allImage.length) {
            return 'Perdió'
        } else {
            return 'incompleto'
        }
    }

    state = {
        images: [],
        world: [],
        worldTry: [],
        status: 'incompleto'
    }

    render() {
        const { world, worldTry, images, status } = this.state;
        return (
            <div>
                <div className="container">
                    <Header titulo={"Ahorcado"} year={new Date().getFullYear()} />
                    <hr />
                    <div className="row">
                        <div className="col-6"> <Result images={images} /></div>
                        <div className="col-6"> <Letters validateLetter={this.validateLetter} /></div>
                    </div>
                    <div className="row align-items-end">
                        <Worlds worldArray={world} worldTry={worldTry} />
                    </div>
                </div>
                <h1>{status}</h1>
            </div>
        )
    }
}

export default Main
