import React,{useState}  from 'react';
import './VideoInfo.css';
import VideoInfoIcon from '../VideoInfoIcon/VideoInfoIcon';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ReplyIcon from '@material-ui/icons/Reply';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import { Avatar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));


 
const VideoInfo = ({title, description, publishedDate, channelTitle, channelImage, viewCount, likeCount, dislikeCount, subs}) => { 
    const [isClicked,setClicked]=useState(false);
    const classes = useStyles();
    function onClickMore() {
        setClicked(!isClicked)
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
        <div className='videoinfo'>        
            <div className='videoinfo_headline'>
                <h1>
                    {title}
                </h1>
            </div>
            <div className='videoinfo_stats'>
            
                <p>{nFormatter(viewCount)} views • {publishedDate}</p>
                <div className="videoinfo_likes">
                    <VideoInfoIcon  Icon={ThumbUpIcon} title={nFormatter(likeCount)} />
                    <VideoInfoIcon  Icon={ThumbDownIcon} title={nFormatter(dislikeCount)} />
                    <VideoInfoIcon  Icon={ReplyIcon} title='SHARE' />
                    <VideoInfoIcon  Icon={PlaylistAddIcon} title='SAVE' />
                    <VideoInfoIcon  Icon={MoreHorizIcon} title='' />
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
                        <p className='videoinfo_channelsubs'> {nFormatter(subs)} subscribers</p>
                    </div>
                    
                </div>
                <div className={classes.root}>
                    <Button variant="outlined" color="secondary">SUBSCRIBE</Button>
                </div>
            </div>
            <div className='videoinfo_channeldesc'>
                {
                    isClicked?<div>
                    <p>{description}</p>
                    <p className="videoInfo_TextLoader" onClick={onClickMore}>Click to Load Less ...</p>
                  </div>
                  :<div>
                    <p className="beforeDesc">{description}</p> 
                    <p className="videoInfo_TextLoader" onClick={onClickMore}>Click to Load More ...</p>
                    </div>
                }
                
                <hr/>
            </div>
            
        </div>
    )
}

export default VideoInfo;