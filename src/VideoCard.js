import React, {useState} from 'react'
import "./VideoCard.css"
import Avatar from '@material-ui/core/Avatar'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';

function VideoCard({
    image,
    title,
    channel,
    views,
    timestamp,
    channelImage
}) {
    const [isVideoCard, setVideoCard] = useState(false);
    function onVideoCard() {
        setVideoCard(true)
    }
    function offVideoCard() {
        setVideoCard(false)
    }
    

    function nFormatter(num) {
        if (num >= 1000000000) {
            return(num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
        }
        if (num >= 1000000) {
            return(num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
        }
        if (num >= 1000) {
            return(num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
        }
        return num;
    }
    return (
        <div onMouseOver={onVideoCard}
            onMouseLeave={offVideoCard}
            className="videocard">
            {
            isVideoCard ? <div className="videocard_overlay">
                <div>

                    <WatchLaterIcon className="watch_later"
                        style={
                            {"backgroundColor": " rgba(255, 255, 255, .5)"}
                        }/>

                </div>
                <div>

                    <AddToQueueIcon className="add_to_queue"
                        style={
                            {"backgroundColor": " rgba(255, 255, 255, .5)"}
                        }/>

                </div>
            </div> : ''
        }
            <img className="videocard_thumbnail"
                src={image}
                alt=""/>

            <div className="videocard_info">
                <Avatar className="videocard_avatar"
                    alt={channel}
                    src={channelImage}/>

                <div className="videocard_text">
                    <h4 title={title}>
                        {title}</h4>
                    <p className="videocard_channel">
                        {channel} </p>

                    <p> {
                        nFormatter(views)
                    }
                        views • {timestamp} </p>
                </div>

                {
                isVideoCard ? <MoreVertIcon className="videocard_moreicon"/> : ''
            } </div>

        </div>
    )
}
export default VideoCard
