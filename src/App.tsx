import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';

import './App.css';
import { IMobxStore } from './stores/mobxStore';

interface IProps {
  mobxStore?: IMobxStore
}

@inject('mobxStore')
@observer
class App extends Component<IProps> {
  render() {
    const { greeting } = this.props.mobxStore!;

    return (
      <div className="App">
        <header className="App-header">
          {greeting}
          <button onClick={this.clickHandler} value="Bob">Change Greeting</button>
          <button onClick={this.clickHandler} value="World">Reset</button>
        </header>

      </div>
    );
  }

  clickHandler = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    this.props.mobxStore!.setName(e.currentTarget.value);
  }

}

export default App;
