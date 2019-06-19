const React = require('react');
const PropTypes = require('prop-types');

const ButtonDark = require('./ButtonDark.jsx');
const ButtonSecondary = require('./ButtonSecondary.jsx');
const ButtonPrimary = require('./ButtonPrimary.jsx');

const iconMap = {
  dark: {
    loading: 'blx-icon-loading-spinner-dark',
    done: 'blx-icon-loaded-check'
  },
  secondary: {
    loading: 'blx-icon-loading-spinner',
    done: 'blx-icon-loaded-check-green'
  },
  primary: {
    loading: 'blx-icon-loading-spinner',
    done: 'blx-icon-loaded-check'
  }
};

const ButtonLoading = React.forwardRef((props, ref) => {
  const Component = props.type === 'dark' ?
                      ButtonDark :
                      (props.type === 'secondary' ? ButtonSecondary : ButtonPrimary);

  let leftIcon = null;
  if (iconMap[props.type][props.loadingState]) {
    leftIcon = <span className={`blx-icon ${iconMap[props.type][props.loadingState]}`}></span>;
  }

  return (
   <Component
      {...props}
      className={`blx-loading-btn ${props.loadingState === 'loading' ? 'blx-disabled-rgba' : ''} ${props.className}`}
      ref={ref}
      leftIcon={leftIcon}
    />
  );
});

ButtonLoading.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.oneOf([ 'primary', 'dark', 'secondary' ]).isRequired,
  loadingState: PropTypes.oneOf([ 'loading', 'done', '' ])
};

ButtonLoading.defaultProps = {
  className: '',
  style: null,
  loadingState: '' // 'loading' or 'done'
};

module.exports = ButtonLoading;

