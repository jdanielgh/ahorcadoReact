import React from 'react'
import World from './World';

export default function Worlds({worldArray, worldTry}) {
    return (
        <div className="row justify-content-md-center">
            {worldArray.map( (w, idx) => (
                <World key={idx+100} justWorld={ worldTry.some( wt => ( wt === w)) ? w : '' }/>))}
        </div>
    )
}
