import React from 'react'

export default function Image({image}) {
    console.log(image);
    return (
        <div className='col-3'>
                <img
                    className="mr-3"
                    src={image.path}
                    alt="hola"
                    width="48"
                    height="48"
                />
        </div>
    )
}
