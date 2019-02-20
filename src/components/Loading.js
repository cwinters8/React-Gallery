import React from 'react';

const Loading = props => {
  if (props.loading) {
    return (<h3>Loading...</h3>);
  } else {
    return null;
  }
}

export default Loading;