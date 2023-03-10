import React from 'react';
import "./App.css";
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';



export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      businesses: []
    }
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy){
    Yelp.searchYelp(term, location, sortBy).then((business) => {
      this.setState({

      });
    })
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

