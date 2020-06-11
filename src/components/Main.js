import React, { Component } from 'react';
import Header from './Header';
import Result from './Result';
import Letters from './Letters';
import Worlds from './Worlds';

export class Main extends Component {

    state = {
        images: [],
        world: []
    }
    render() {
        return (
            <div>
                <div className="container">
                    <Header titulo={"Ahorcado"} year={new Date().getFullYear()} />
                    <hr />
                    <div className="row">
                        <div className="col-6"> <Result /></div>
                        <div className="col-6"> <Letters /></div>
                    </div>
                    <div className="row align-items-end">
                        <Worlds/>
                    </div>
                </div>

            </div>
        )
    }
}

export default Main
