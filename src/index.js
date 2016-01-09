import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'; //npm package
import twitterAPI from 'twitter-api';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBLlgTWjW1PKSCPW_b4hf-kCgmWLhAiDEE';
const twitter = new twitterAPI({
  consumerKey: consumerKey,
  consumerSecret: consumerSecret,
  callback: 'https://happyblinks.com/twitter/callback'
});

twitter.getRequestToken(function(error, requestToken, requestTokenSecret, results) {
  if (error) {
    console.log("Error getting OAuth request token : " + error);
  } else {
    // store token and tokenSecret somewhere, you'll need them later; redirect user
  }
});
twitter.getAccessToken(requestToken, requestTokenSecret, oauth_verifier, function(error, accessToken, accessTokenSecret, results) {
  if (error) {
    console.log(error);
  } else {
    // store accessToken and accessTokenSecret somewhere (associated to the user)
    // verify Credentials belongs here
  }
});

twitterAPI({key: Twitter_API_KEY, term: 'surfboards' }, function(data) {
  console.log(data);
});


// just an example to show api is working
// YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
//   console.log(data); //pass config options, callback option
// });

// Create new component to produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] }; // array bc will contain list of videos

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos }); //when key and property are same variable name, in E6 only have to list one and it becomes this.setState({videos: videos})
      console.log(videos); //pass config options, callback option
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}


// Take component's generated HTML and put on page (in DOM)
ReactDOM.render(<App />, document.querySelector('.container')); // creates an instance of App instead of class
//second argument is the target location/element
