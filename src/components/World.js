import React from 'react'

export default function World({justWorld}) {
    const letterRef = React.createRef();

    return (
        <div className="col-1">
          <input ref={letterRef} disabled type="text" className="form-control" required  placeholder={justWorld}/>
        </div>
    )
}
