import React from 'react'

export default function Letter() {
    const letra = React.createRef();

    return (
        <div>
            <div className="col-6">
                <input ref={letra} type="number" className="form-control" required placeholder="Nombres y apellidos" />
            </div>
        </div>
    )
}
