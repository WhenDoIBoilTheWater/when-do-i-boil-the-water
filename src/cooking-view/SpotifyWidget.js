import React from 'react'
import './css/spotifyWidget.css'



class spotifyWidget extends React.Component {

    // <span className="album-art">&#9633;</span>
    // <div className="middle-container">
    //     <h4 className="song-title">Ain't No Mountain High Enough</h4>
    //     <span className="playbar-background">.</span>
    //     <span className="playbar-foreground">.</span>
    // </div>
    // <button className="pause-button"><h2>||</h2></button>
    // <button className="menu">&#9776;</button>

    render(){

        return(
            <div className="spotify-widget">
            <iframe src="https://open.spotify.com/embed/playlist/5GQIv1pWFtbYxC6T6bHz83" width="400" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

            </div>
        )
    }
}

export default spotifyWidget