import React from 'react';
import { Link } from 'react-router-dom';

import './ArticleGrid.css';
import data from '../articles.json';

const GridItem = ({article: {
    id,
    title,
    author
}}) => (
    <div className="grid-item">
        <Link to={`/article/${id}`}>{title}</Link>
        <div>{author}</div>
    </div>
);

export default () => (
    <div className="article-grid">
        {
            data.articles.map(article => (
                <GridItem key={article.id} article={article} />
            ))
        }
    </div>
);