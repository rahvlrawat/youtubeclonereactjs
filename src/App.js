import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Recommended from './Components/Recommended/Recommended';
import Trending from './Components/Trending/Trending';
// import Trending from './Components/Trending/Trending';
import SearchPage from './Components/SearchPage/SearchPage'
import VideoPage from './Components/VideoPlayer/VideoPage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Maintainance from './Components/Underprogress/Undermaintainence';
import Login from './Components/Login/Login';

require('dotenv').config();


function App() {
    return (
        <div className="app">
            <Router>

                <Header/>

                <Switch>
                <Route path="/login">
                        <div className="app_page">
                            
                            <Login/>
                        </div>
                    </Route>

                    <Route path="/oops_page">
                        <div className="app_page">
                            <Sidebar/>
                            <Maintainance/>
                        </div>
                    </Route>
                    <Route path="/search/:searchQuery">
                        <div className="app_page">
                            <Sidebar/>
                            <SearchPage/>
                        </div>
                    </Route>

                    <Route path="/search/:searchQuery">
                        <div className="app_page">
                            <Sidebar/>
                            <SearchPage/>
                        </div>
                    </Route>

                    <Route path="/video/:videoId">
                        <div className="app_page">
                            <Sidebar/>
                            <VideoPage/>
                        </div>
                    </Route>
                    <Route exact path="/trending/">
                        <div className="app_page">
                            <Sidebar/>
                            <Trending/>
                        </div>
                    </Route>

                    <Route exact path="/">
                        <div className="app_page">

                            <Sidebar/>

                            <Recommended/>

                        </div>
                    </Route>
                </Switch>

            </Router>
        </div>
    );
}

export default App;
