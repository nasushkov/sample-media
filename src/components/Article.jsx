import React from 'react';
import {Link} from 'react-router-dom';

const style = {
  'article': {
    'backgroundColor': '#bdbdbd',
    'marginRight': 'auto',
    'marginLeft': 'auto',
    'marginTop': '20px',
    'paddingTop': '40px',
    'paddingBottom': '40px',
    'width': '70%'
  },
  'title': {
    'fontSize': '24px',
    'textAlign': 'center'
  },
  'author': {
    'marginTop': '12px',
    'fontSize': '18px',
    'fontStyle': 'italic'
  },
  'text': {
    'marginTop': '12px',
    'wordWrap': 'break-word',
    'fontSize': '16px'
  }
};

export default ({match, articles}) => {
  if(!articles || !articles.length){
    return (
      <div style={style.article}>
        Загрузка
      </div>
    )
  }
  
  const {title, author, text} = articles.find(({id}) => id == match.params.id);

  return (
    <div style={style.article}>
      <Link to="/">Назад ко всем статьям</Link>
      <div style={style.title}>{title}</div>
      <div style={style.author}>{author}</div>
      <div style={style.text}>{text}</div>
    </div>
  );
};