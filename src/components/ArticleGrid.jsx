import React from 'react';
import {Link} from 'react-router-dom';

import data from '../articles.json';

const style = {
  'article_grid': {
    'width': '70%',
    'backgroundColor': '#bdbdbd',
    'marginTop': '20px',
    'marginLeft': 'auto',
    'marginRight': 'auto',
    'paddingTop': '40px',
    'paddingBottom': '40px',
    'display': 'flex',
    'flexWrap': 'wrap',
    'justifyContent': 'space-around'
  },
  'grid_item': {
    'backgroundColor': '#ffffff',
    'padding': '8px',
    'marginTop': '8px',
    'marginBottom': '8px',
    'width': '260px'
  }
};

const GridItem = ({
  article: {
    id,
    title,
    author
  }
}) => (
  <div style={style.grid_item}>
    <Link to={`/article/${id}`}>{title}</Link>
    <div>{author}</div>
  </div>
);

export default ({location}) => {
  let articles = data.articles;

  if (location.query && location.query.theme) {
    articles = articles.filter(article => article.theme === location.query.theme);
  }

  return (
    <div style={style.article_grid}>
      {
        articles.map(article => (
          <GridItem key={article.id} article={article}/>
        ))
      }
    </div>
  );
};