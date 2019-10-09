import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

export default class App extends React.Component {
  render() {
    return (
        <div>
            <Header/>
            <Main/>
        </div>
    )
  }
}
