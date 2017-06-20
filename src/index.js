import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch} from 'react-router';
import {BrowserRouter} from 'react-router-dom';

import Article from './components/Article';
import ArticleGrid from './components/ArticleGrid.jsx';
import Header from './components/Header.jsx';
import './index.css';

const App = () => {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path="/" component={ArticleGrid}/>
                <Route path="/article/:id" component={Article}/>
            </Switch>
        </div>
    )
};

ReactDOM.render(
    <BrowserRouter>
        <div>
            <App />
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);

