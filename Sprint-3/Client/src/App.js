import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/* Custom Component */
import Header from './components/Header';
import Main from './components/Main';
import Upload from './components/Upload';
import SuccessfulUpload from './components/SuccessfulUpload';

/* Stylesheet */
import './App.scss';

// import VideoPlayer from './components/VideoPlayer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path='/' exact render={(props) =>
              <Main {...props} />
            } />
            <Route path='/videos/:videoId' render={(props) =>
              <Main {...props} />
            }
            />
            <Route path='/upload' render={(props) => <Upload {...props} />} />
            <Route path="/success">
              <SuccessfulUpload />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>

    )
  }
}

export default App;
