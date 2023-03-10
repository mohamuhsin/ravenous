import React from 'react';
import "./App.css";
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';



export default class App extends React.Component {

  searchYelp(term, location, sortBy){
    console.log(`You are Searching Yelp with ${term}, ${location}, ${sortBy}`);

  }

render() {
  return (
    <div className="App">
  <h1>ravenous</h1>
  <SearchBar searchYelp={this.searchYelp} />
  <BusinessList businesses={businesses}/>
</div>
  );
}
}

