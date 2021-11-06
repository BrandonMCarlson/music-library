import React from 'react';

const InformationHolder = ({ songs }) => {
    return (
        <div>
            <ul >
                {songs.map((song, i) =><li key={i}>Artist: {song.artist}<br /> Album: {song.album}<br /> Song: {song.title}<br /> Genre: {song.genre}<br /> Release" {song.releaseDate}</li> )}
            </ul>
        </div>
    );
};

export default InformationHolder;