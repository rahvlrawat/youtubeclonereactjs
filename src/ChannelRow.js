import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import "./ChannelRow.css"
import {Link} from 'react-router-dom'
function ChannelRow({
    channelId,
    image,
    channel,
    subs,
    noOfVideos,
    description,
}) {
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
        <Link key={
            channelId
        }
        
        style={{ textDecoration: 'none' }}
        to={
            `/channel/${
                channelId
            }`
        }>
        <div className="channelRow">
            <Avatar className="channelRow_logo"
                alt={channel}
                src={image}/>
            <div className="channelRow_text">
                <h4>{channel}</h4>
                <p> {nFormatter(subs)}
                    subscribers • {nFormatter(noOfVideos)}
                    videos
                </p>
                <p>{description}</p>
            </div>
        </div>
        </Link>
        
    )
}

export default ChannelRow
