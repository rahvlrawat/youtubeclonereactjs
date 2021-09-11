import React from 'react'
import SidebarRow from '../SidebarRow/SidebarRow'
import HomeIcon from '@material-ui/icons/Home'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import HistoryIcon from '@material-ui/icons/History'
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined'
import {Link} from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './Sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar">
       
            <Link to="/"><SidebarRow selected Icon={HomeIcon} title="Home"/></Link>
            
            <Link to="/trending"><SidebarRow Icon={WhatshotIcon} title="Trending"/></Link>
            
            <Link to="/oops_page"><SidebarRow Icon={SubscriptionsIcon} title="Subscriptions"/></Link>
            
            <hr/>
            
            <Link to="/oops_page"><SidebarRow Icon={VideoLibraryIcon} title="Library"/></Link>
            
            <Link to="/oops_page"><SidebarRow Icon={HistoryIcon} title="History"/></Link>
            
            <Link to="/oops_page"><SidebarRow Icon={OndemandVideoIcon} title="Your Videos"/></Link>
            
            <Link to="/oops_page"><SidebarRow Icon={WatchLaterIcon} title="Watch Later"/></Link>
            
            <Link to="/oops_page"><SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked Videos"/></Link>
            
        
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more"/>  
           
      
        </div>
    )
}

export default Sidebar
