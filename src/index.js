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

const App = ({articles}) => {
  return (
    <div style={style.app}>
      <Header articles={articles}/>
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
        <Route exact path="/" render={(props) => (
          <ArticleGrid {...props} articles={articles}/>
        )}/>
        <Route path="/article/:id" render={(props) => (
          <Article {...props} articles={articles}/>
        )}/>
      </Switch>
    </div>
  );
};

const withFetcher = (WrappedComponent, {url, collName}) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        [collName]: []
      };
    }

    componentWillMount() {
      const reqHeaders = new Headers({
        'Content-Type': 'application/json'
      })

      fetch(url, {
        method: 'GET',
        headers: reqHeaders,
      }).then(response => {
        return response.json();
      }).then((result) => {
        this.setState(result);
      })
    }

    render() {
      const data = this.state[collName];
      const props = {
        [collName]: data
      }

      return (
        <WrappedComponent {...props} {...this.props}/>
      );
    }
  };
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

