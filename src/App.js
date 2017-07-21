import React, { Component } from 'react';
import { Icon, Button, CustomButtonWithOwnStyle, CallToActionButton, Controls } from './components/index.js';

import style from './App.scss';

class App extends Component {
  handleClick = () => {
    alert('Custom Button Clicked')
  };

  render() {
    return (
      <div className={style.App}>
        <div className="demo-info">
          Для изоляции стилей был использован CSS Modules
        </div>
        <h3>Style & State</h3>
        <Controls className="demo-controls" layout="wide">
          {[
            <Button variant="primary">Brand</Button>,
            <Button variant="primary">&nbsp;</Button>,
            <Button variant="primary" disabled>Disabled</Button>,
            <Button variant="primary" outlined>Outlined</Button>,
            <Button variant="primary" outlined disabled>Disabled</Button>,
            <Button variant="primary" outlined>&nbsp;</Button>,
          ]}
        </Controls>
        <Controls className="demo-controls" layout="wide">
          {[
            <Button variant="secondary">Neutral</Button>,
            <Button variant="secondary">&nbsp;</Button>,
            <Button variant="secondary" disabled>Disabled</Button>,
            <Button variant="secondary" outlined>Outlined</Button>,
            <Button variant="secondary" outlined disabled>Disabled</Button>,
            <Button variant="secondary" outlined>&nbsp;</Button>,
          ]}
        </Controls>
        <Controls className="demo-controls" layout="wide">
          {[
            <Button variant="success">Success</Button>,
            <Button variant="success">&nbsp;</Button>,
            <Button variant="success" disabled>Disabled</Button>,
            <Button variant="success" outlined>Outlined</Button>,
            <Button variant="success" outlined disabled>Disabled</Button>,
            <Button variant="success" outlined>&nbsp;</Button>,
          ]}
        </Controls>
        <Controls className="demo-controls" layout="wide">
          {[
            <Button variant="warning">Warning</Button>,
            <Button variant="warning">&nbsp;</Button>,
            <Button variant="warning" disabled>Disabled</Button>,
            <Button variant="warning" outlined>Outlined</Button>,
            <Button variant="warning" outlined disabled>Disabled</Button>,
            <Button variant="warning" outlined>&nbsp;</Button>,
          ]}
        </Controls>
        <Controls className="demo-controls" layout="wide">
          {[
            <Button variant="danger">Danger</Button>,
            <Button variant="danger">&nbsp;</Button>,
            <Button variant="danger" disabled>Disabled</Button>,
            <Button variant="danger" outlined>Outlined</Button>,
            <Button variant="danger" outlined disabled>Disabled</Button>,
            <Button variant="danger" outlined>&nbsp;</Button>,
          ]}
        </Controls>
        <h3>Size</h3>
        <Controls className="demo-controls" layout="wide">
          {[
            <Button variant="primary" size="lg">Brand L</Button>,
            <Button variant="primary">Brand M</Button>,
            <Button variant="primary" size="sm">Brand S</Button>,
          ]}
        </Controls>
        <h3>Icons</h3>
        <Controls className="demo-controls" layout="wide">
          {[
            <Button variant="primary" iconAfter="help" size="lg">Need Help</Button>,
            <Button variant="warning" iconBefore="info">Info</Button>,
            <Button variant="danger" iconAfter=":heart:" outlined>What is</Button>,
            <Button variant="danger" iconAfter="warn" size="sm">Warning</Button>,
            <Button variant="secondary" size="sm" outlined>Just smile <Icon name=":penguin:" /> and wave</Button>,
          ]}
        </Controls>
        <Controls className="demo-controls" layout="wide">
          {[
            <Button variant="primary" icon="info" size="lg" />,
            <Button variant="primary" icon=":bug:" size="lg" outlined />,
            <Button variant="secondary" icon=":grinning:" size="lg" />,
            <Button variant="success" icon="info" size="lg" />,
            <Button variant="warning" icon="info" size="lg" />,
            <Button variant="danger" icon="info" size="lg" />,
            <CustomButtonWithOwnStyle icon="warn" />,
          ]}
        </Controls>
        <h3>Layout</h3>
        <Controls className="demo-controls" layout="wide" vertical>
          {[
            <Button variant="primary" size="lg" unpadded>No left and right paddings</Button>,
            <Button variant="primary" size="lg" autowidth>Auto Width</Button>,
            <Button variant="primary" size="lg" fullwidth>Full Width</Button>,
          ]}
        </Controls>

        <h3>Other</h3>
        <Controls className="demo-controls" layout="wide">
          {[
            <CustomButtonWithOwnStyle iconBefore="warn" onClick={this.handleClick}>Very Implrtant Custom Button!</CustomButtonWithOwnStyle>,
            <CallToActionButton iconBefore=":fire:" iconAfter=":fire:">Call To Action</CallToActionButton>,
            <button type="button" className="Button Button--primary Button--lg"><span className="Button__label">Out of CSS Modules</span></button>
          ]}
        </Controls>
      </div>
    );
  }
}

export default App;
