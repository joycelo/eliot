import React from 'react';
import './main.css';
import { SmileOutlined } from '@ant-design/icons';
import About from './About.js';
import Hi from './Hi.js';
import Fact from './Fact.js';
import About2 from './About2.js';
import Video from './Video.js';

class Main extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="main-page">
        <div className="welcome1">
          <SmileOutlined spin='true' style={{color: '#A33100', fontSize: '22px'}}/> hello!
        </div>
        <div className="welcome2">
          <SmileOutlined spin='true' style={{color: '#000000', fontSize: '22px'}}/> hello!
        </div>
        <Hi />
        <About />
        <About2 />
        <Fact />
        <Video />
      </div>
    );
  }
}

export default Main;