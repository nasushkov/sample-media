import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch, Router} from 'react-router';
import {Link} from 'react-router-dom';

import Article from './components/Article';
import ArticleGrid from './components/ArticleGrid.jsx';
import Header from './components/Header.jsx';
import history from './history'
import withFetcher from './withFetcher'

const style = {
  'app': {
    'textAlign': 'center'
  },
  'nav_link': {
    'paddingRight': '8px'
  }
};

const App = ({articles}) => {
  return (
    <div style={style.app}>
      <Header articles={articles}/>
      <nav>
        <Link
          style={style.nav_link}
          to="/article"
        >НОВОСТЬ ЧАСА!</Link>
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
        <Route exact path="/" render={(props) => (
          <ArticleGrid {...props} articles={articles}/>
        )}/>
        <Route path="/article/:id?" render={(props) => (
          <Article {...props} articles={articles}/>
        )}/>
      </Switch>
    </div>
  );
};

const DataFetcher = withFetcher(App, {
  url: '/api/articles',
  collName: 'articles'
})

ReactDOM.render(
  <Router history={history}>
    <div>
      <DataFetcher />
    </div>
  </Router>,
  document.getElementById('root')
);

