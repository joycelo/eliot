import React from 'react';
import './main.css';
import { Drawer, Button, Radio, Space } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state={ visible: false, placement: 'left'};
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  onChange = e => {
    this.setState({
      placement: e.target.value,
    });
  };

  render() {
    const { placement, visible } = this.state;
    return (
      <div className="main-page">
        <Space>
          <Radio.Group defaultValue={placement} onChange={this.onChange}>
            <Radio value="top">about</Radio>
            <Radio value="right">resume</Radio>
            <Radio value="bottom">contact</Radio>
            <Radio value="left">bye</Radio>
          </Radio.Group>
          <Button type="primary" onClick={this.showDrawer}>
            Open
          </Button>
        </Space>
        <Drawer
          title="Basic Drawer"
          placement={placement}
          closable={false}
          onClose={this.onClose}
          visible={visible}
          key={placement}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
        <div className="welcome1">
          <SmileOutlined spin='true' style={{color: '#A33100', fontSize: '22px'}}/> hello!
        </div>
        <div className="welcome2">
          <SmileOutlined spin='true' style={{color: '#000000', fontSize: '22px'}}/> hello!
        </div>
      </div>
    );
  }
}

export default Main;