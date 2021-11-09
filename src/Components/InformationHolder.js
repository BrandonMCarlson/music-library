import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './InformationHolder.css'


const InformationHolder = ({ songs, ui }) => {
    return (
        <div className="holder-styles">
            <ul>
                {songs.map((song, index)=> (
                    song.artist.includes(ui) ?  <li key={index}>Title: {song.title} <br/>Artist: {song.artist} <br/> Written in: {song.releaseDate} <br/>Album: {song.album} <br/> Genre: {song.genre} </li> :  
                    song.title.includes(ui) ?  <li key={index}>Title: {song.title} <br/>Artist: {song.artist} <br/> Written in {song.releaseDate} <br/>Album: {song.album} <br/> Genre: {song.genre} </li> : 
                    song.genre.includes(ui) ?  <li key={index}>Title: {song.title} <br/>Artist: {song.artist} <br/> Written in {song.releaseDate} <br/>Album: {song.album} <br/> Genre: {song.genre}</li> :  
                    song.releaseDate.includes(ui) ?  <li key={index}>Title: {song.title} <br/>Artist: {song.artist} <br/> Written in {song.releaseDate} <br/>Album: {song.album} <br/> Genre: {song.genre}</li> :
                    song.album.includes(ui) ?  <li key={index}>Title: {song.title} <br/>Artist: {song.artist} <br/> Written in {song.releaseDate} <br/>Album: {song.album} <br/> Genre: {song.genre}</li> :null 
                ))}
            </ul>
     
        </div>
    );
};

export default InformationHolder;