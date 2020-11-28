import React from 'react';
// import { Redirect } from 'react-router-dom';

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push('/');
    }
  }
  render() {
    const { location } = this.props;
    // return <span>{location.state.title}</span>;
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  }
}

export default Detail;
