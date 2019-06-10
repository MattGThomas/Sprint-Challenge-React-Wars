import React from 'react';

const Character = props => {
    return (
        <div className='charContainer'>
            <h2>{props.char.name}</h2>
            <p>Name: {props.char.birth_year}</p>
            <p>Hair Color: {props.char.hair_color}</p>
            <p>Mass: {props.char.mass}</p>
            <p>Height: {props.char.height}</p>
        </div>
    )
}


export default Character;