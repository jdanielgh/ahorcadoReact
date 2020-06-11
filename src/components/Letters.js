import React from 'react'
import { allLetters } from '../constant/letters-const';
import Letter from './Letter';

export default function Letters() {
    return (
        <div>
            <h1>Letras</h1>
            <div className="row">
                {allLetters.map( (letter, idx) => (<Letter key={idx} letterValue={letter}/>))}
            </div>
        </div>
    )
}
