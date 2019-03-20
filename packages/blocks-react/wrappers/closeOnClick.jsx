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

      this.ref = React.createRef();
    }

    open() {
      this.setState({
        isOpen: true
      }, () => {
        document.body.addEventListener('click', this.closeOnClick);
      });
    }

    close(e) {
      this.setState({
        isOpen: false
      }, () => {
        document.body.removeEventListener('click', this.closeOnClick);
      });
      e.stopPropagation();
    }

    toggle(e) {
      e.stopPropagation();
      e.preventDefault();
      if (this.state.isOpen) {
        this.close();
      } else {
        this.open();
      }
    }

    closeOnClick(e) {
      if (!this.ref.current) return;
      if (e.target === this.ref.current || this.ref.current.contains(e.target)) return;
      this.close(e);
      if (this.props.afterCloseOnClick) this.props.afterCloseOnClick(); // anything that needs to happen when the dropdown closes by clicking outside of it
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          {...this.state}
          forwardedRef={this.ref}
          isOpen={this.state.isOpen}
          toggle={this.toggle}
          open={this.open}
          close={this.close}
        />
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
