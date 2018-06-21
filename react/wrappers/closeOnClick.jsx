const React = require('react');
const PropTypes = require('prop-types');

function closeOnClick(WrappedComponent) {
  class ComponentWithCloseOnClick extends React.Component {
    constructor(props) {
      super(props);

      this.state = { isOpen: !!props.isOpen };

      this.open = this.open.bind(this);
      this.close = this.close.bind(this);
      this.toggle = this.toggle.bind(this);
      this.closeOnClick = this.closeOnClick.bind(this);
    }

    componentDidMount() {
      document.body.addEventListener('click', this.closeOnClick);
    }

    componentWillUnmount() {
      document.body.removeEventListener('click', this.closeOnClick);
    }

    open() {
      this.setState({
        isOpen: true
      });
    }

    close() {
      this.setState({
        isOpen: false
      });
    }

    toggle() {
      if (this.state.isOpen) {
        this.close();
      } else {
        this.open();
      }
    }

    closeOnClick(e) {
      if (!this.domElement) return;
      if (e.target === this.domElement || this.domElement.contains(e.target)) return;
      this.close();
    }

    render() {
      return (
        <div ref={(node) => { this.domElement = node; }}>
          <WrappedComponent
            {...this.props}
            {...this.state}
            isOpen={this.state.isOpen}
            toggle={this.toggle}
            open={this.open}
            close={this.close}
          />
        </div>
      );
    }
  }

  ComponentWithCloseOnClick.propTypes = {
    isOpen: PropTypes.bool
  };

  ComponentWithCloseOnClick.defaultProps = {
    isOpen: false
  };

  return ComponentWithCloseOnClick;
}

module.exports = closeOnClick;
