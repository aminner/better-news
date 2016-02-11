require('normalize.css');
require('styles/App.css');

import React from 'react';
import Results from './Results.js'

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {url: props.initialUrl
    , results:''};
  }
  changeText(){
      
  }
  submit() {
       var request = new XMLHttpRequest();
        request.open('GET', this.state.url, true);
        request.onreadystatechange = function() {if (request.readyState==4) alert("It worked!");};
        // request.setRequestHeader('X-PINGOTHER', 'pingpong');
        request.setRequestHeader('Content-Type', 'application/xml');
        request.setRequestHeader("Accept","application/xml");
        request.onreadystatechange = function() {
            if (request.readyState == 4) {
                console.log(request.responseXML);
                this.state.results = request.responseXML;
            }
        }
        request.send();
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.url} onChange={this.changeText.bind(this)}></input>
        <button onClick={this.submit.bind(this)}>Search</button>
        <Results data={this.state.results} />
      </div>
    );
  }
}

AppComponent.propTypes = { initialUrl: React.PropTypes.string };
AppComponent.defaultProps = { initialUrl: 'http://rss.cnn.com/rss/cnn_us.rss' };

export default AppComponent;
