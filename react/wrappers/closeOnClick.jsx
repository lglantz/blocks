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
    
    open() {
      this.setState({
        isOpen: true
      }, () => {
        document.body.addEventListener('click', this.closeOnClick);
      });
    }

    close() {
      this.setState({
        isOpen: false
      }, () => {
        document.body.removeEventListener('click', this.closeOnClick);
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
      if (this.props.afterCloseOnClick) this.props.afterCloseOnClick(); // anything that needs to happen when the dropdown closes by clicking outside of it
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
    isOpen: PropTypes.bool,
    afterCloseOnClick: PropTypes.func
  };

  ComponentWithCloseOnClick.defaultProps = {
    isOpen: false,
    afterCloseOnClick: null
  };

  return ComponentWithCloseOnClick;
}

module.exports = closeOnClick;
