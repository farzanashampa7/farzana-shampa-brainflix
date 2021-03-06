import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/* Custom Component */
import Header from './components/Header';
import Main from './components/Main';
import Upload from './components/Upload';

/* Stylesheet */
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path='/' exact component={Main} />
            <Route path='/videos/:videoId' exact component={Main} />
            <Route path='/upload' component={Upload} />
          </Switch>
        </BrowserRouter>
      </div>

    )
  }
}

export default App;
