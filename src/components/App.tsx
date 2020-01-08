import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';

import { IMobxStore } from '../stores/mobxStore';
import { StyledAppLayout } from './App.styles';

interface IProps {
  mobxStore?: IMobxStore;
}

@inject('mobxStore')
@observer
class App extends Component<IProps> {
  render() {
    const { greeting } = this.props.mobxStore!;

    return (
      <StyledAppLayout>
        <header className="App-header">
          {greeting}
          <button onClick={this.clickHandler} value="Bob">
            Change Greeting
          </button>
          <button onClick={this.clickHandler} value="World">
            Reset
          </button>
        </header>
      </StyledAppLayout>
    );
  }

  clickHandler = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    this.props.mobxStore!.setName(e.currentTarget.value);
  };
}

export default App;
