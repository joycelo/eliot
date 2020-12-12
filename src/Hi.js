import React from 'react';
import './hi.css';
import Typewriter from 'typewriter-effect';

class Hi extends React.Component {

  render() {
    return(
      <div className="hi-text">
        <Typewriter
          onInit={(typewriter) => {
          typewriter.typeString(`Hi.  Who r u`)
              .callFunction(() => {
                console.log('String typed out!');
              })
              .pauseFor(2500)
              // .deleteAll()
              .callFunction(() => {
                console.log('All strings were deleted');
              })
              .start();
          }}
        />
      </div>
    )
  }
}

export default Hi;