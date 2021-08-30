import React, { Component } from 'react';
import { Header } from './components/Header';
import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
        <Header></Header>
    );
  }
}
