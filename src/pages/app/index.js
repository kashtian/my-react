import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

import './app.less';

class App extends Component {
    constructor() {
        super();
        this.state = {
            info: 'this is home page'
        }
    }

    clickMe(type) {
        alert(type);
    }
 
    render() {
        return (
            <div className="app">
                <div onClick={this.clickMe.bind(this, 'click')}>{this.state.info}</div>
                <ul>
                    <li><Link to="/test">test link</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}

export default App;