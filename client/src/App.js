import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/home';
import Navbar from './components/CustomNavbar';
import Actor from './components/Actor';
import Character from './components/Character';
import MovieQuotes from './MovieQuotes';
import LandingPage from './components/LandingPage';
import Games from './Games';

import '../src/index.css'


class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Router>
                        <div className ='topNav'>
                            <Navbar className = 'myNavbar'/>
                            <Route exact path="/" component={Home} />
                            <Route path="/Quotes" component={MovieQuotes} />
                            <Route path="/components/Actor" component={Actor} />
                            <Route path="/components/Character" component={Character} />
                            <Route path="/components/LandingPage" component={LandingPage} />
                        </div>
                    </Router>
                    {/*<div>*/}
                        {/*<BasicGrid />*/}
                    {/*</div>*/}
                    {/*<div>*/}
                        {/*<Answer />*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*<Footer />*/}
                    {/*</div>*/}
                    <Games />
                 </div>
            </div>
        );
    }
}

export default App;