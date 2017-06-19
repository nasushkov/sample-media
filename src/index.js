import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch} from 'react-router'
import {BrowserRouter} from 'react-router-dom'

import logo from './logo.svg';
import Article from './components/Article'
import ArticleGrid from './components/ArticleGrid.jsx'
import './index.css';

const App = () => {
    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h2>Welcome to Happy Media</h2>
            </div>
            <Switch>
                <Route exact path="/" component={ArticleGrid}/>
                <Route path="/article/:id" component={Article}/>
            </Switch>
        </div>
    )
}

ReactDOM.render(
    <BrowserRouter>
        <div>
            <App />
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);

