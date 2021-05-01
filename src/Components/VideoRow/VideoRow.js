import React, {useState} from 'react'
import './VideoRow.css'
import Avatar from '@material-ui/core/Avatar'
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import {Link} from 'react-router-dom'

function VideoRow({
    views,
    description,
    timestamp,
    channel,
    title,
    image,
    channelImage,
    channelId
}) {
        const [isVideoRow, setVideoRow] = useState(false);
        function onVideoRow() {
            setVideoRow(true)
        }
        function offVideoRow() {
            setVideoRow(false)
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
        <div className="videoRow"
            onMouseOver={onVideoRow}
            onMouseLeave={offVideoRow}>
            {
            isVideoRow ? <div className="videoRow_overlay">
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
            <img className="videoRow_image"
                src={image}
                alt=""/>
            <div className="videoRow_text">
                <h3 className="videoRow_title"
                    title={title}>
                    {title}</h3>
                <p>{
                    nFormatter(views)
                }views • {timestamp}</p>
                <Link key={channelId}
                    style={{textDecoration: 'none'}}
                    to={`/channel/${channelId}`}>
                <span className="videoRow_channel">
                    <Avatar className="videocard_avatar"
                        alt={channel}
                        src={channelImage}/>
                    <span className="videoRow_channelName">
                        {channel}•</span>
                </span>
            </Link>
            <p className="videoRow_description">
                {description}</p>
        </div>
       
    </div>


    )
}


export default VideoRow
