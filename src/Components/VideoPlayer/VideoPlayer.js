import React from 'react'
import YouTube from 'react-youtube';

function VideoPlayer({videoId}) {
    

    function onReady(event){
        event.target.pauseVideo();
    }  
    return (
        <div className="videoPlayer">
            <YouTube
                videoId={videoId}
                containerClassName="youtubeContainer"
                loading="lazy"
                onReady={onReady}
            />

        </div>
    )
}

export default VideoPlayer
