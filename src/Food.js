import React from 'react'

export default function Food({fav, image}) {
    return (
        <div>
            <p>I Like {fav}</p>
            <img src={image} alt={fav} width="200" />
        </div>
    )
}
