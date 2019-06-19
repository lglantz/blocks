import React from "react"

const { ButtonLoading } = require('blocks-react').Buttons;

class ButtonLoadingExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loadingState1: '',
      loadingState2: '',
      loadingState3: ''
    };
  }

  performSlowAction(stateName) {
    this.setState({
      [stateName]: 'loading'
    });

    setTimeout(() => {
      this.setState({
        [stateName]: 'done'
      })
    }, 1000);
  }

  render() {
    return (
      <div className="blx-h-button-group">
        <ButtonLoading
          text="Click me"
          type="dark"
          loadingState={this.state.loadingState1}
          onClick={() => this.performSlowAction('loadingState1')}
        />
        <ButtonLoading
          text="Click me"
          type="secondary"
          loadingState={this.state.loadingState2}
          onClick={() => this.performSlowAction('loadingState2')}
        />
        <ButtonLoading
          text="Click me"
          type="primary"
          loadingState={this.state.loadingState3}
          onClick={() => this.performSlowAction('loadingState3')}
        />
      </div>
    );
  }
}

export default ButtonLoadingExample;
