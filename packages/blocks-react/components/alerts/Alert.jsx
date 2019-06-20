const React = require('react');
const PropTypes = require('prop-types');
const classnames = require('classnames');

const CloseIcon = require('../icons/CloseIcon.jsx');
const SuccessIcon = require('../icons/SuccessIcon.jsx');
const InformationIcon = require('../icons/InformationIcon.jsx');
const WarningIcon = require('../icons/WarningIcon.jsx');
const ErrorIcon = require('../icons/ErrorIcon.jsx');


const TYPE_MAP = {
  success: {
    classes: 'blx-success',
    icon: SuccessIcon
  },
  information: {
    classes: 'blx-information',
    icon: InformationIcon
  },
  warning: {
    classes: 'blx-warning',
    icon: WarningIcon
  },
  error: {
    classes: 'blx-error',
    icon: ErrorIcon
  }
};


class Alert extends React.Component {
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
    const classes = classnames(
      'blx-alert',
      this.props.className,
      TYPE_MAP[this.props.type].classes,
      {
        'blx-hidden': this.state.hidden
      }
    );

    const Icon = TYPE_MAP[this.props.type].icon;

    return (
      <div
        style={this.props.style}
        className={classes}
      >
        <div className="blx-alert-icon-container">
          <span className="blx-alert-icon-background" />
          <Icon className="blx-alert-icon" />
        </div>
        <div className="blx-alert-text">
          <h4>
            {this.props.title}
          </h4>
          <p>{this.props.message}</p>
        </div>
        { this.props.closable &&
          <button className="blx-alert-close" onClick={this.onClose}>
            <CloseIcon />
          </button>
        }
      </div>
    );
  }
}

Alert.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.node,
  message: PropTypes.string,
  closable: PropTypes.bool,
  onClose: PropTypes.func
};

Alert.defaultProps = {
  className: '',
  style: null,
  type: 'success',
  title: '',
  icon: null,
  message: '',
  closable: false,
  onClose: null
};

module.exports = Alert;
