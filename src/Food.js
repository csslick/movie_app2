import React from 'react'

export default function Food({name, image, rate}) {
    return (
        <div>
            <p>I Like {name}</p>
            <p>{rate}/5.0</p>
            <img src={image} alt={name} width="200" />
        </div>
    )
}
