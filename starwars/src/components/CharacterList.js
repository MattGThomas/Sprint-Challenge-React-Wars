import React from 'react';
import Character from './Character';

const CharacterList = props => {
    return (
        <div>
            {props.characters.map((char, index) => {
                return <Character
                    componentDidMount = {props.componentDidMount}
                    getCharacters = {props.getCharacters}
                    char = {char}
                    key = {index}
                />
            })}
        </div>
    );
}


export default CharacterList;