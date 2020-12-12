import React from 'react';
import './fact.css';

class Fact extends React.Component {

  getFetch = () => {
    fetch('https://uselessfacts.jsph.pl/random.json?language=en')
    .then(response => response.json())
    .then(data => document.getElementById('fetched-fact').innerHTML = `Random Fact: ${data.text}`)
    .catch(err => console.log("ERROR", err))
  }

  render() {
    const fetchResult = this.getFetch();
    console.log("FETCH RESULT", fetchResult);
    return (
      <div id='fetched-fact'>
        {fetchResult}
        {/* {this.getFetch()} */}
      </div>
    )
  }
}

export default Fact;