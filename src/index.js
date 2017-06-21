import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch, Router} from 'react-router';
import {Link} from 'react-router-dom';

import Article from './components/Article';
import ArticleGrid from './components/ArticleGrid.jsx';
import Header from './components/Header.jsx';
import history from './history'

const style = {
  'app': {
    'textAlign': 'center'
  },
  'nav_link': {
    'paddingRight': '8px'
  }
};

const App = () => {
  return (
    <div style={style.app}>
      <Header path='*'/>
      <nav>
        <Link
          style={style.nav_link}
          to="/"
        >Все</Link>
        <Link
          style={style.nav_link}
          to={{
                     pathname: '/',
                     search: '?theme=economy'
                   }}
        >Экономика</Link>
        <Link
          style={style.nav_link}
          to={{
                      pathname: '/',
                      search: '?theme=entertainment'
                    }}
        >Развлечения</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={ArticleGrid}/>
        <Route path="/article/:id" component={Article}/>
      </Switch>
    </div>
  )
};

ReactDOM.render(
  <Router history={history}>
    <div>
      <App />
    </div>
  </Router>,
  document.getElementById('root')
);

