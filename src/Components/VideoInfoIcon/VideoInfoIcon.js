import React from 'react'
import './VideoInfoIcon.css'

function VideoInfoIcon({Icon,title}) {
    return (
        <div className={`VideoInfoRow`}>
            <Icon className={`VideoInfoRow_icon`}/>
            <h2 className="VideoInfoRow_title">{title}</h2>

        </div>
    )
}
export default VideoInfoIcon
