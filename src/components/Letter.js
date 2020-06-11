import React from 'react'

export default function Letter({ letterValue }) {
    const onClickLetter = () => {
        console.log(letterValue)
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
