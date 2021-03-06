import React from 'react'
import {
    Route,
    Link,
    Switch
} from 'react-router-dom'
import Home from './Home'
import Resources from './Resources'
import FunctionalComponentDemo from '../concepts/FunctionalComponentDemo'
import JSXRules from '../concepts/JSXRules';
import State from '../concepts/State';
import Effects from '../concepts/Effects'; 
import PropsDemo from '../concepts/PropsDemo';
import Hooks from '../concepts/Hooks';
import TimePiecesApp from '../apps/timer-apps/TimePiecesApp';
// import TimerApp from '../apps/timer-apps/TimerApp';
// import ClockApp from '../apps/timer-apps/ClockApp';
// import StopWatchApp from '../apps/timer-apps/StopWatchApp';
import NytApp from '../apps/nyt-app/NytApp';
import MovieApp from '../apps/the-movie-db/MovieApp';
// import MovieAppDisplay from '../apps/the-movie-db/MovieAppDisplay/MovieAppDisplay';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-list-styling">
                <ul className="sidebar-list list-unstyled">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/functionalcomponent">Functional Component</Link></li>
                    <li><Link to ="/jsxrules">JSX Rules</Link></li>
                    <li><Link to = "/state">useState</Link></li>
                    <li><Link to ="/effects">useEffect</Link></li>
                    <li><Link to ="/propsdemo">PropsDemo</Link></li>
                    <li><Link to ="/hooks">Hooks</Link></li>
                    <li><Link to ="/apps/timer-apps/timepiecesapp">TimePieces</Link></li>
                    {/* <li><Link to ="/apps/timer-apps/timerapp">Timer</Link></li>
                    <li><Link to ="/apps/timer-apps/clockapp">Clock</Link></li>
                    <li><Link to ="/apps/timer-apps/stopwatchapp">Stopwatch</Link></li> */}
                    <li><Link to ="/apps/nyt-app/nytapp">NYT App</Link></li>
                    <li><Link to ="/apps/the-movie-db/movieapp">Movie App</Link></li>
                    <li><Link to="/resources">Resources</Link></li>
                </ul>
            </div>
            <div className="sidebar-route">
                <Switch>
                    <Route exact path="/home"><Home /></Route>
                    <Route exact path="/resources"><Resources /></Route>
                    <Route exact path="/"><Home /></Route>
                    <Route exact path="/jsxrules"><JSXRules /></Route>
                    <Route exact path="/functionalcomponent"><FunctionalComponentDemo /></Route>
                    <Route exact path="/state"><State/></Route>
                    <Route exact path="/effects"><Effects/></Route>
                    <Route exact path="/propsdemo"><PropsDemo/></Route>
                    <Route exact path="/hooks"><Hooks/></Route>
                    <Route exact path="/apps/timer-apps/timepiecesapp"><TimePiecesApp/></Route>
                    {/* <Route exact path="/apps/timer-apps/timerapp"><TimerApp/></Route>
                    <Route exact path="/apps/timer-apps/clockapp"><ClockApp/></Route>
                    <Route exact path="/apps/timer-apps/stopwatchapp"><StopWatchApp/></Route> */}
                    <Route exact path="/apps/nyt-app/nytapp"><NytApp/></Route>
                    <Route exact path="/apps/the-movie-db/movieapp"><MovieApp/></Route>
                </Switch>
            </div>
        </div>
    );
};

export default Sidebar;