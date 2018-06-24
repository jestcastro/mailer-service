import * as React from 'react';
import './App.css';

import logo from './logo.svg';

class App extends React.Component {
  public click() {
    console.log('true')
    fetch('/auth/google').then(response => {
      return response.text();
    }).then((json) => {
      console.log(json)
    })
  }
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hi There!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code>
        </p>
        <a href='/auth/google'>Sign in with Google</a>
        <button onClick={this.click}>    See user</button>
      </div>
    );
  }
}

export default App;
