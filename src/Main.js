import React from 'react';
import './main.css';
import { SmileOutlined, FullscreenOutlined, AimOutlined } from '@ant-design/icons';
import About from './About.js';
import Hi from './Hi.js';
import Fact from './Fact.js';
import About2 from './About2.js';
import Video from './Video.js';
import Drag from './Drag.js';

class Main extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="main-page">
        <div className="welcome1">
          <AimOutlined spin='true' style={{color: '#A33100', fontSize: '22px'}}/> MOON
          {/* <SmileOutlined spin='true' style={{color: '#A33100', fontSize: '22px'}}/> MOON */}
        </div>
        <div className="welcome2">
          push&nbsp;&nbsp;&nbsp;<FullscreenOutlined spin='true' style={{color: '#00FF33', fontSize: '49px'}}/>&nbsp;&nbsp;&nbsp;llup
        </div>
        <Hi />
        <About />
        <About2 />
        <Fact />
        <Video />
        <Drag />
      </div>
    );
  }
}

export default Main;