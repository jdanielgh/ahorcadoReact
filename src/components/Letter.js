import React from 'react'

export default function Letter({ letterValue, clickLetter }) {
    const onClickLetter = () => {
        console.log('letter', letterValue);
        clickLetter(letterValue);
    }

    return (
        <div>
            <div className="col-4">
                <button onClick={onClickLetter} type="button">
                    {letterValue}
                </button>
            </div>
        </div>
    )
}
