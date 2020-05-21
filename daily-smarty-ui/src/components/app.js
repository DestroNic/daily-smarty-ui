import React, { Component } from 'react';
import SearchBar from './searchBar';
import RecentPosts from './recentPosts';

import Logo from './logo';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Logo />
        <SearchBar />
        <RecentPosts />
      </div>
    );
  }
}
