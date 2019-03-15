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
          className="blx-icon blx-icon-close"
          onClick={this.onClose}
        />
      );
    }

    let classes = 'blx-alert ';
    if (this.state.hidden) classes += 'blx-hidden ';

    return (
      <div
        style={this.props.style}
        className={`${classes} ${this.props.className}`}
      >
        <div className="blx-alert-icon-container">
          <div className="blx-alert-icon-background" />
          <div className="blx-alert-icon" />
        </div>
        <div className="blx-alert-text">
          <h4 className={`blx-alert-title blx-${this.props.type}`}>{this.props.title}</h4>
          <p>{this.props.message}</p>
        </div>
        {closeIcon}
      </div>
    );
  }
}

AlertBanner.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  title: PropTypes.string,
  message: PropTypes.string,
  closable: PropTypes.bool,
  onClose: PropTypes.func
};

AlertBanner.defaultProps = {
  className: '',
  style: null,
  title: '',
  message: '',
  closable: false,
  onClose: null
};

module.exports = AlertBanner;
