const React = require('react');
const PropTypes = require('prop-types');
const classnames = require('classnames');

const CloseIcon = require('../icons/CloseIcon.jsx');

class AlertBanner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: false
    };

    this.onClose = this.onClose.bind(this);
  }

  onClose() {
    if (typeof this.props.onClose === 'function') {
      this.props.onClose();
    }
    this.setState({
      hidden: true
    });
  }

  render() {
    const classes = classnames('blx-alert', this.props.className, {
      'blx-hidden': this.state.hidden
    });
    return (
      <div
        style={this.props.style}
        className={classes}
      >
        <div className="blx-alert-icon-container">
          <span className="blx-alert-icon-background" />
          { this.props.icon }
        </div>
        <div className="blx-alert-text">
          <h4>
            {this.props.title}
          </h4>
          <p>{this.props.message}</p>
        </div>
        { this.props.closable &&
          <button className="blx-alert-close" aria-label="close" onClick={this.onClose}>
            <CloseIcon />
          </button>
        }
      </div>
    );
  }
}

AlertBanner.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  title: PropTypes.string,
  icon: PropTypes.node,
  message: PropTypes.string,
  closable: PropTypes.bool,
  onClose: PropTypes.func
};

AlertBanner.defaultProps = {
  className: '',
  style: null,
  title: '',
  icon: null,
  message: '',
  closable: false,
  onClose: null
};

module.exports = AlertBanner;
