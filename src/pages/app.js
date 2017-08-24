import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return <div>
            App
            <ul>
                <li><Link to="/test">test link</Link></li>
            </ul>
            {this.props.children}
        </div>
    }
}

export default App;