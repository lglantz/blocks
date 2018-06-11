const React = require('react');
const ReactDOM = require('react-dom');


function closeOnClick(WrappedComponent) {
  return React.createClass({
    getInitialState: function() {
      return {
        isOpen: !!this.props.isOpen
      };
    },
    componentDidMount: function() {
      // TODO: not best practice to use findDOMNode
      // see if we can use refs instead
      this.domElement = ReactDOM.findDOMNode(this);
    },
    componentWillUnmount: function() {
      if (this.state.isOpen) document.body.removeEventListener('click', this.closeOnClick);
    },
    open: function() {
      this.setState({
        isOpen: true
      }, () => {
        document.body.addEventListener('click', this.closeOnClick);
      });
    },
    close: function() {
      this.setState({
        isOpen: false
      }, () => {
        document.body.removeEventListener('click', this.closeOnClick);
      });
    },
    toggle: function() {
      if (this.state.isOpen) {
        this.close();
      } else {
        this.open();
      }
    },
    closeOnClick: function(e) {
      if (!this.domElement) return;
      if (e.target === this.domElement || this.domElement.contains(e.target)) return;
      this.close();
    },
    render: function() {
      return (
        <WrappedComponent
          {...this.props}
          {...this.state}
          isOpen={this.state.isOpen}
          toggle={this.toggle}
          open={this.open}
          close={this.close}
        />
      );
    }
  });
}

module.exports = closeOnClick;
