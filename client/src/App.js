import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/home';
import Navbar from './components/customNavbar';
import MovieQuotes from './MovieQuotes';

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Navbar />
                        <Route exact path="/" component={Home} />
                        <Route path="/MovieQuotes" component={MovieQuotes} />

                    </div>
                </Router>
            </div>
        );
    }
}

export default App;