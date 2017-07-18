import React from 'react';

export default (WrappedComponent, {url, collName}) => {
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