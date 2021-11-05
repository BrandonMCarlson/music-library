import React, {Component} from 'react';
import { getDefaultNormalizer } from '@testing-library/dom';


const songs = ({ songs }) => {
    return (
        <div>
            <ul>
                {songs.map((e, i) => (
                    <li key={i} className='list'>
                        
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default songs;