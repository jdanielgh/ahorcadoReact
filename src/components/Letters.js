import React from 'react'
import { allLetters } from '../constant/letters-const';
import Letter from './Letter';

export default function Letters({validateLetter}) {

    const clickLetter = (letter) => {
        console.log('letters', letter);
        validateLetter(letter)
    }
    return (
        <div>
            <h1>Letras</h1>
            <div className="row">
                {allLetters.map( (letter, idx) => (<Letter key={idx+200} clickLetter={clickLetter} letterValue={letter}/>))}
            </div>
        </div>
    )
}
