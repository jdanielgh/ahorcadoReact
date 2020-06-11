import React from 'react'

export default function Image({image}) {
    return (
        <div className='col-3'>
                <img
                    className="mr-3"
                    src={image.path}
                    alt="hola"
                    width="90"
                    height="90"
                />
        </div>
    )
}
