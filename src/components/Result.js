import React from 'react';
import { imagesGame, imageGameTwo } from '../constant/images-const';
import Image from './Image';

export default function Result() {
    const images = imagesGame;
    const imagesTwo = imageGameTwo;
    return (
        <div>
            <h1>Intentos</h1>
            <div className='row'> 
                    {images.map( ima => (<Image image={ima} /> ))}
            </div>
            <div className='row'>
                {imagesTwo.map( ima => (<Image image={ima} /> ))}
            </div>
        </div>
    )
}
