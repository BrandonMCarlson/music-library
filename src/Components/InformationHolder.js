import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './InformationHolder.css'


const InformationHolder = ({ songs, ui }) => {
    return (
        <div className="holder-styles">
            <ul >
                {songs.map((song, i) =>
                song.title.includes(ui) ||
                song.artist.includes(ui) ||
                song.genre.includes(ui) ||
                song.releaseDate.includes(ui) ||
                song.album.includes(ui) ? ( 
                <li>
                    {" "}
                    <ul>
                    <li>Artist: {song.artist}</li>{" "}
                    <li>Album: {song.album}</li>{" "} 
                    <li>Song: {song.title}</li>{" "}
                    <li>Genre: {song.genre}</li>{" "}
                    <li>ReleaseDate: {song.releaseDate}</li>{" "}
                </ul> 
            </li>
            ) : null
            )}
            </ul>
        </div>
    );
};

export default InformationHolder;