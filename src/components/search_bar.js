import React, { Component } from 'react';

// below is a functional component, because it is simply calling a function
// const SearchBar = () => {
//   return <input /> // generates HTML input user can type text into
// };

// this is a class based component, adds greater functionality
class SearchBar extends Component {
  constructor(props) {
    super(props); // super calls parent method of 'super'

    this.state = { term: ''}; // where change will be stored

  }

  render() {
    // return <input onChange={this.onInputChange} />; *refactored to:
    return (
      <div>
        <input onChange={event => this.setState({ term: event.target.value })} />
      </div>
    )
  }
  // which eliminates need for separate code here:
  // onInputChange(event) { //event handler (event- describes info about event that occurred. comes from browser?)
  //   console.log(event.target.value); // just to check for change event
  // }
}

export default SearchBar;
