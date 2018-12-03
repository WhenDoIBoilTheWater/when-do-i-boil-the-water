import React from 'react'
import './css/spotifyWidget.css'

class spotifyWidget extends React.Component {

    render(){

        return(
            <div className="spotify-widget">
                <span className="album-art">&#9633;</span>
                <div className="middle-container">
                    <h4 className="song-title">Ain't No Mountain High Enough</h4>
                    <span className="playbar-background">.</span>
                    <span className="playbar-foreground">.</span>
                </div>
                <button className="pause-button"><h2>||</h2></button>
                <button className="menu">&#9776;</button>
            </div>
        )
    }
}

export default spotifyWidget