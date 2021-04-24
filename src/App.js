import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Recommended from './Components/Recommended/Recommended';
import SearchPage from './Components/SearchPage/SearchPage'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
    return (
        <div className="app">
            <Router>
                <Header/>
                <Switch>
                    <Route path="/search/:searchQuery">
                        <div className="app_page">
                            <Sidebar/>
                            <SearchPage/>
                        </div>
                    </Route>

                    <Route path="/video/:videoId">
                        <div className="app_page">
                            <VideoPlayer/>
                        </div>
                    </Route>

                    <Route path="/">
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
