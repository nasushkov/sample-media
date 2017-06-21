import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router';

import data from '../articles.json';

const style = {
  app_header: {
    'backgroundColor': '#222',
    'height': '150px',
    'padding': '20px',
    'marginBottom': '8px',
    'color': 'white'
  }
};

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

    if (artIndex > -1) {
      const queryInd = location.pathname.indexOf('?');

      let artId;

      if (queryInd > -1) {
        artId = location.pathname.substr(artIndex + 9, queryInd - artIndex + 9);
      } else {
        artId = location.pathname.substr(artIndex + 9);
      }

      title = `Автор статьи: ${data.articles.find(({id}) => id == artId).author}`;
    }

    return (
      <div style={style.app_header}>
        <h2>{title}</h2>
      </div>
    );
  }
}

export default withRouter(Header);