import React from 'react';
import { imagesGame, imageGameTwo } from '../constant/images-const';
import Image from './Image';

export default function Result({images}) {
    // const images = imagesGame;
    // const imagesTwo = imageGameTwo;
    return (
        <div>
            <h1>Intentos</h1>
            <div className='row'> 
                    {images.map( (ima, idx) => (<Image key={idx+300} image={ima} /> ))}
            </div>
            {/* <div className='row'>
                {imagesTwo.map( (ima, idx) => (<Image key={idx + images.leght } image={ima} /> ))}
            </div> */}
        </div>
    )
}
