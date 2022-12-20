import React, { Component, Fragment } from 'react';
class App extends React.Component {
  constructor() {
    super();
    this.state =
    {
      name: "srinu",
      id: 1234,
      show: true,
    }
  }
  render() {
    return (
      <React.Fragment>
        <h1>componentWill Unmount</h1>
        {this.state.show ? <Child /> : null}
        <button onClick={() => { this.setState({ show: !this.state.show }) }} >toggle Child Component</button>
      </React.Fragment>
    )
  }
}
export default App;



export class Child extends Component {

  componentWillUnmount() {
    console.log("child component is hidden now!");
  }

  render() {
    return (
      <Fragment>
        <h2>This is Child Component</h2>
      </Fragment>
    )
  }
}
