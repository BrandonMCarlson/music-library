import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

const InformationHolder = ({ songs }) => {
    return (
        <div>
            <ul >
                {songs.map((song, i) =><li key={i}>Artist: {song.artist}<br /> Album: {song.album}<br /> Song: {song.title}<br /></li> )}
            </ul>
        </div>
    );
};

export default InformationHolder;