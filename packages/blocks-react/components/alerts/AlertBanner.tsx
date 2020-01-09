import * as React from 'react';
import classnames from 'classnames';
import CloseIcon from '../icons/CloseIcon';

/**
 * AlertBanner description!!!
 */
class AlertBanner extends React.Component<AlertBannerProps, AlertBannerState> {
  static defaultProps = {
    className: '',
    style: null,
    title: '',
    icon: null,
    message: '',
    closable: false,
    onClose: null
  };
  constructor(props: AlertBannerProps) {
    super(props);
    this.state = {
      hidden: false
    };
    // this.onClose = this.onClose.bind(this);
  }
  onClose = () => {
    if (typeof this.props.onClose === 'function') {
      this.props.onClose();
    }
    this.setState({
      hidden: true
    });
  }
  // onClose() {

  // }

  render() {
    console.log('alertbanner')
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
          {this.props.icon}
        </div>
        <div className="blx-alert-text">
          <h4>
            {this.props.title}
          </h4>
          <p>{this.props.message}</p>
        </div>
        {this.props.closable &&
          <button className="blx-alert-close" aria-label="close" onClick={this.onClose}>
            <CloseIcon />
          </button>
        }
      </div>
    );
  }
}
type AlertBannerProps = {
  className?: string,
  style?: any,
  title?: string,
  icon?: any,
  message?: string,
  closable?: boolean,
  onClose?: any
};
type AlertBannerState = {
  hidden: boolean,
};
export default AlertBanner;
