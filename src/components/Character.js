// Write your Character component here
import React from "react";


const Character = props => {
    const { character } = props;

    return (
        <div className='character-text'>
            <span className='character'>{character.name}</span>
            {' '}
            <span className='location'>{character.location}</span>
        </div>
    );
};

export default Character;