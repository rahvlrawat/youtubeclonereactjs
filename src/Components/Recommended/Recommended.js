import React,{useEffect, useState} from 'react';
import './Recommended.css';
import VideoCard from '../VideoCard/VideoCard.js';
import axios from 'axios';
import {DateTime} from 'luxon';
import {Link} from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';
function Recommended() {
    const [videoCards, setVideoCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    // const [musicVideoCards, setMusicVideoCards] = useState([]);
    // const [sportsVideoCards, setSportsVideoCards] = useState([]);
    // const [techVideoCards, setTechVideoCards] = useState([]);
    
    useEffect(() => {
        
        axios
          .get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=18&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
          .then(response => {
            createVideoCards(response.data.items);
          })
          .catch(error => {
            console.log(error);
            setIsError(true);
          })
          
      }, [])
    async function createVideoCards(videoItems) {
      let newVideoCards = [];
      
      for (const video of videoItems) {
        const videoId = video.id;
        const snippet = video.snippet;
        const channelId = snippet.channelId;
        const response = await axios
                              .get(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
        const channelImage = response.data.items[0].snippet.thumbnails.medium.url;

        const title = snippet.title;
        const image = snippet.thumbnails.medium.url;
        const views = video.statistics.viewCount;
        const timestamp = DateTime.fromISO(snippet.publishedAt).toRelative();
        const channel = snippet.channelTitle;

        newVideoCards.push({
          videoId,
          image,
          title,
          channel,
          views,
          timestamp,
          channelImage
        });
      };
      setVideoCards(newVideoCards);
      setIsLoading(false);
    }
    if(isError) {
      return <Alert severity="error" className='loading'>No Results found!</Alert>
    }

    return (
        <div className="recommended">
          { isLoading ? <CircularProgress className='loading' color='secondary' /> : null }
          
          <div className="recommended_videos">
                 { 
                  videoCards.map(item => {
                    return (
                      <Link key={item.videoId}  style={{ textDecoration: 'none' }} to={`/video/${item.videoId}` }>
                      <VideoCard
                        title={item.title}
                        image={item.image}
                        views={item.views}
                        timestamp={item.timestamp}
                        channel={item.channel}
                        channelImage={item.channelImage}
                      />
                      </Link>

                    )
                  })
                } 
            </div> 
        </div>
    )
}

export default Recommended