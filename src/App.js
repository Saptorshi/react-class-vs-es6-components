import React, { Component } from 'react';
import './App.css';
import Users from './users/Users'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Users title="User List" />
      </div>
    );
  }
}

export default App;

/**
 * You can pass props to Class Component :: Stateful component.
 * Class Component has access to this.props.
 * Function Component :: Stateless component! don't have access to this.props, hence you have to pass it the function component.
 * Function Component is like PRESENTATION component. DOEST NOT has ````render```` function
 */