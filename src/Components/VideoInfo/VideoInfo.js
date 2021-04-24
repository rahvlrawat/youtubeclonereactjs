import React,{useState}  from 'react';
import './VideoInfo.css';
import SidebarRow from '../SidebarRow/SidebarRow';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ReplyIcon from '@material-ui/icons/Reply';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import { Avatar, Button } from '@material-ui/core';

const VideoInfo = ({title, description, publishedDate, channelTitle, channelImage, viewCount, likeCount, dislikeCount, subs}) => { 
    const [isClicked,setClicked]=useState(false);
    function onClickMore() {
        setClicked(!isClicked)
    }
    return (
        <div className='videoinfo'>        
            <div className='videoinfo_headline'>
                <h1>
                    {title}
                </h1>
            </div>
            <div className='videoinfo_stats'>
            
                <p>{viewCount} views • {publishedDate}</p>
                <div className="videoinfo_likes">
                    <SidebarRow Icon={ThumbUpIcon} title={likeCount} />
                    <SidebarRow Icon={ThumbDownIcon} title={dislikeCount} />
                    <SidebarRow Icon={ReplyIcon} title='SHARE' />
                    <SidebarRow Icon={PlaylistAddIcon} title='SAVE' />
                    <SidebarRow Icon={MoreHorizIcon} title='' />
                </div>
            </div>
            <hr />
            <div className="videoinfo_channel">
                <div>
                    <Avatar 
                        className='videoinfo_avatar' 
                        alt={channelTitle} 
                        src={channelImage} 
                    />
                    <div className='videoinfo_channelinfo'>
                        <h3 className='videoinfo_channeltitle'>{channelTitle}</h3>
                        <p className='videoinfo_channelsubs'>{subs} subscribers</p>
                    </div>
                    
                </div>
                <div className='videoinfo_subscribe'>
                    <Button color='secondary' >SUBSCRIBE</Button>
                </div>
            </div>
            <div className='videoinfo_channeldesc'>
                {
                    isClicked?
                    <p>{description}</p>:
                    <p className="beforeDesc">{description}</p> 
                }
                <Button  onClick={onClickMore} className="loadMore" color="secondary">Click to Load More ...</Button>
                <hr/>
            </div>
            
        </div>
    )
}

export default VideoInfo;