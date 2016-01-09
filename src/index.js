import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBLlgTWjW1PKSCPW_b4hf-kCgmWLhAiDEE';

// Create new component to produce some HTML
const App = () => { //this is creating a class 'App'
  return (
    <div>
      <SearchBar />
    </div>
  );
}


// Take component's generated HTML and put on page (in DOM)
ReactDOM.render(<App />, document.querySelector('.container')); // creates an instance of App instead of class
//second argument is the target location/element
