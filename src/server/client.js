import React from 'react';

class Welcome extends React.Component {
  render() {
    return <h1>Hello, Welcome!</h1>;
  }
}

function _Welcome() {
  return <h1>Hello, World!</h1>;
}

function ref() {
    var ref = 'Client';
    return ref;
}

console.log(<Welcome/>);

console.log(ref() && <Welcome />);

