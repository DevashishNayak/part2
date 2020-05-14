import React from 'react'

const Countries = ({name, handleShow}) => {
    return (
        <div>
            {name}
            <button onClick={() => handleShow(name)}>show</button>
        </div>
    )
}

export default Countries