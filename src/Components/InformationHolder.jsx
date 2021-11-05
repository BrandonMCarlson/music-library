import React, {Component} from 'react';
import App from '../App'


class InformationHolder extends Component{
    render() {
        const rows = [
            'Artist',
            'Song',
            'Album',
            'Genre',
            'Release'
        ];
        return (
            <div>
                <li>
                    <h1>rows={rows} </h1>
                </li>
            </div>
        )
    }
}

export default InformationHolder;