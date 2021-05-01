import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router';
import VideoPlayer from './VideoPlayer'
import './VideoPage.css';
import Recommended from '../Recommended/Recommended';
import VideoInfo from '../VideoInfo/VideoInfo';
import axios from 'axios';
import Alert from '@material-ui/lab/Alert';
import Skeleton from 'react-loading-skeleton';

function  VideoPage(){
    let { videoId } = useParams();

    const [videoInfo, setVideoInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setVideoInfo([]);
        setIsLoading(true);
        axios
          .get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2C%20statistics&id=${videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
          .then(response => {
              createVideoInfo(response.data['items'][0]);
              setIsError(false);
          })
          .catch(error => {
              console.log(error);
              setIsError(true);
          })
    }, [videoId])

    async function createVideoInfo (video) {
        const snippet = video.snippet;
        const stats = video.statistics;
        const channelId = snippet.channelId;
        const response = await axios
                              .get(`https://www.googleapis.com/youtube/v3/channels?part=snippet%2C%20statistics&id=${channelId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
        
        const channelImage = response.data.items[0].snippet.thumbnails.medium.url;
        const subs = response.data.items[0].statistics.subscriberCount;
        const publishedDate = new Date(snippet.publishedAt).toLocaleDateString('en-GB', {  
                                                                day : 'numeric',
                                                                month : 'short',
                                                                year : 'numeric'
                                                            });
        const title = snippet.title;
        const description = snippet.description;
        const channelTitle = snippet.channelTitle;
        const viewCount = stats.viewCount;
        const likeCount = stats.likeCount;
        const dislikeCount = stats.dislikeCount;
                                                 
        setVideoInfo({
            title,
            description,
            publishedDate,
            channelTitle,
            channelImage,
            viewCount,
            likeCount,
            dislikeCount,
            subs
        });
        setIsLoading(false);
    }
    if(isError) {
        return <Alert severity="error" className='loading'>No Results found!</Alert>
    }
    return (
        <div className='videoplayer'>
            <div className='videoplayer_videodetails'>
                <div className='videoplayer_video'>
                    
                    {!isLoading ?  <VideoPlayer videoId={videoId} /> : <Skeleton height={405} width={720} duration={2}/>}
    
                     </div>
                <div className='videoplayer_videoinfo'>
                    {
                    !isLoading ? <VideoInfo
                                    title={videoInfo.title}
                                    description={videoInfo.description}
                                    publishedDate={videoInfo.publishedDate}
                                    channelTitle={videoInfo.channelTitle}
                                    channelImage={videoInfo.channelImage}
                                    viewCount={videoInfo.viewCount}
                                    likeCount={videoInfo.likeCount}
                                    dislikeCount={videoInfo.dislikeCount}
                                    subs={videoInfo.subs}
                                  /> :
                                  <div>
                                      <Skeleton count={3} duration={2}/>
                                  <Skeleton count={3} height={5} duration={2}/>
            

                                  </div>
                                  }
                </div>
            </div>
            
            <div className='videoplayer_suggested'>
                <h2>Up Next</h2>   
                <Recommended/>
            </div>
        </div>
    )
}

export default VideoPage;