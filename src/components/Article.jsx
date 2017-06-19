import React from 'react';
import { Link } from 'react-router-dom';

import './Article.css';
import data from '../articles.json';

export default ({match}) => {
    const {title, author, text} = data.articles.find(({id}) => id == match.params.id)
    
    return (
        <div className="article">
            <Link to="/">Назад ко всем статьям</Link>
            <div className="title">{title}</div>
            <div className="author">{author}</div>
            <div className="text">{text}</div>
        </div>
    )
};