import React, {useState} from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search'
import AppsIcon from '@material-ui/icons/Apps';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import Avatar from '@material-ui/core/Avatar'
import {Link} from 'react-router-dom';


function Header() {
    const [inputSearch, setInputSearch] = useState('');

    return (
        <div className="header">

            <div className="header_left">
                <MenuIcon className="menuicon"/>
                <Link to="/">
                    <img className="header_logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt=""/>
                </Link>
            </div>

            <div className="header_input">
                <input onChange={
                        (e) => setInputSearch(e.target.value)
                    }
                    value={inputSearch}
                    placeholder="Search..."
                    type="text"/>
                <Link to={
                    `/search/${inputSearch}`
                }>
                    <SearchIcon className="header_search"/>
                </Link>
            </div>
            <div className="header_icons">

                <div className="dropdown">
                    <button className="dropbtn">
                        <VideoCallIcon 
                            className="header_icon"
                            title="Create"/></button>
                    {
                    
                        <div class="dropdownVideo dropdown-content">
                            <ul>Upload Video</ul>
                            <ul>Go Live</ul>

                        </div>
                    
                } </div>


                <div className="dropdown">
                    <button className="dropbtn">
                        <AppsIcon className="header_icon"
                            
                            title="Youtube Apps"/></button>
                    {
                    
                        <div class="dropdownApps dropdown-content">
                            <ul>YouTube TV</ul>
                            <hr/>
                            <ul>Youtube Music</ul>
                            <ul>Youtube Kids</ul>
                            <hr/>
                            <ul>Creator  Academy</ul>
                            <ul>YouTube for Artists</ul>
                        </div>
                    
                } </div>


                <div className="dropdown">
                    <button className="dropbtn">
                        <NotificationImportantIcon className="header_icon"
                           
                            title="Notifications"/>
                    </button>
                    {
                    
                        <div class="dropdown-content dropdown-rightmost">
                            <ul>Notifications</ul>
                            <hr/>
                        </div>
                    
                } </div>

                <div className="dropdown">
                <button className="Avatar dropbtn"><Avatar 
                        alt="Rahul Rawat"
                        className="header_avatar"
                        src="https://yt3.ggpht.com/yti/ANoDKi66W0FyNyLHAV3OZch0vXBPFRQ1-NQJpkXgUKDD=s88-c-k-c0x00ffffff-no-rj-mo"/>
                </button>
                {
                
                    <div class="dropdown-content dropdown-rightmost">
                        <ul>Your Channel</ul>
                        <ul>Purchases and memberships</ul>
                        <ul>Youtube Studio</ul>
                        <ul>Switch Account</ul>
                        <ul>Sign Out</ul>
                    </div>
                
            } </div>
        </div>
        </div>
    )
}

export default Header
