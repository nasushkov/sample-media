import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import logo from './logo.svg';
import './Header.css'
import data from '../articles.json';

class Header extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }

    render() {
        const {match, location, history} = this.props;
        let title = 'Добро пожаловать в Журнал "Мурзилка"';

        const artIndex = location.pathname.indexOf('/article/');

        if(artIndex > -1){
            const queryInd = location.pathname.indexOf('?');
            const artId = queryInd > - 1
                ? location.pathname.substr(artIndex + 9, queryInd - artIndex + 9)
                : location.pathname.substr(artIndex + 9);

            title = `Автор статьи: ${data.articles.find(({id}) => id == artId).author}`;
        }

        return (
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h2>{title}</h2>
            </div>
        )
    }
}

export default withRouter(Header)