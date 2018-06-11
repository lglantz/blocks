const React = require('react');
const PropTypes = require('prop-types');


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
    let closeIcon = null;
    if (this.props.closable) {
      closeIcon = (
        <button
          className="alert-close"
          onClick={this.onClose}
        />
      );
    }

    return (
      <div className={`alert ${this.props.type} ${this.state.hidden ? 'hidden' : ''}`}>
        <div className="alert-icon-container">
          <div className="alert-icon-background" />
          <div className="alert-icon" />
        </div>
        <div className="alert-text">
          <span className={`title ${this.props.type}`}>{this.props.title}</span>
          <p>{this.props.message}</p>
        </div>
        {closeIcon}
      </div>
    );
  }
}

AlertBanner.propTypes = {
  type: PropTypes.string, // "success", "warning", "error", or "information" TODO: enum eventually?
  title: PropTypes.string,
  message: PropTypes.string,
  closable: PropTypes.bool,
  onClose: PropTypes.func
};

AlertBanner.defaultProps = {
  type: '',
  title: '',
  message: '',
  closable: false,
  onClose: null
};

module.exports = AlertBanner;
