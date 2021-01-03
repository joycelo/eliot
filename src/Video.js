import React from 'react';
import ReactPlayer from 'react-player';

class Video extends React.Component {

render() {
  return (
  <ReactPlayer url='https://youtu.be/aIHF7u9Wwiw' playing='true' style={{margin: '30px', border: '10px dotted orange'}}/>
  )
}
}

export default Video;

