import React from 'react'
import { worlds } from '../constant/game-const';
import World from './World';

export default function Worlds() {
    const getRandomInt = (min, max)  => {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    const worldArray = worlds[getRandomInt(0, worlds.length)].split('');
    console.log(worldArray)

    return (
        <div className="row justify-content-md-center">
            {worldArray.map( (w, idx) => (<World key={idx} justWorld={w}/>))}
        </div>
    )
}
