import React, { Component } from 'react';
import SearchBar from './searchBar';
import RecentPosts from './recentPosts';

import Logo from './logo';

export default class Home extends Component {
  
  handleSearchBarSubmit = function(query) {
    console.log(query)
    this.props.history.push('/results');
}

  render() {
    return (
      <div className='app'>
        <Logo />
        <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)} />
        <RecentPosts />
      </div>
    );
  }
}
