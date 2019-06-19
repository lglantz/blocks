import React from "react"

const { Button } = require('blocks-react').Buttons;
const { SpinnerIcon, SuccessIcon } = require('blocks-react').Icons;

class ButtonLoadingExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loadingState1: '',
      loadingState2: '',
      loadingState3: ''
    };
  }

  performSlowAction(evt, stateName) {
    evt.target.blur();
    this.setState({
      [stateName]: 'loading'
    }, () => {
      setTimeout(() => { // sleep for 2 seconds
        this.setState({
          [stateName]: 'done'
        }, () => {
          setTimeout(() => { // remove success state after half a second
            this.setState({
              [stateName]: ''
            });
          }, 500);
        })
      }, 2000);
    });
  }

  getButtonContent(stateName) {
    // FIXME: replace with some kind of color enums
    let spinnerFill = 'var(--primary-00)';
    let successFill = 'var(--secondary-00)';
    let successBgFill = 'var(--primary-00)';
    if (stateName === 'loadingState1') spinnerFill = 'var(--dark-00)';
    if (stateName !== 'loadingState2') {
      successFill = 'var(--primary-00)';
      successBgFill = 'var(--secondary-00)';
    }

    switch (this.state[stateName]) {
      case 'loading':
        return (
          <React.Fragment>
            <SpinnerIcon fill={spinnerFill} />
            <span>Loading...</span>
          </React.Fragment>
        );
      case 'done':
        return (
          <React.Fragment>
            <SuccessIcon fill={successFill} bgFill={successBgFill} />
            <span>Success!</span>
          </React.Fragment>
        );
      default:
        return (
          <span>Click me</span>
        );
    }
  }

  render() {
    return (
      <div className="blx-v-button-group">
        <Button
          color="dark"
          className={this.state.loadingState1 === 'loading' ? 'blx-disabled-loading' : ''}
          onClick={(e) => this.performSlowAction(e, 'loadingState1')}
        >
          { this.getButtonContent('loadingState1') }
        </Button>

        <Button
          color="secondary"
          className={this.state.loadingState2 === 'loading' ? 'blx-disabled-loading' : ''}
          onClick={(e) => this.performSlowAction(e, 'loadingState2')}
        >
          { this.getButtonContent('loadingState2') }
        </Button>

        <Button
          color="primary"
          className={this.state.loadingState3 === 'loading' ? 'blx-disabled-loading' : ''}
          onClick={(e) => this.performSlowAction(e, 'loadingState3')}
        >
          { this.getButtonContent('loadingState3') }
        </Button>
      </div>
    );
  }
}

export default ButtonLoadingExample;
