const React = require('react');
const PropTypes = require('prop-types');
const CloseIcon = require('../icons/CloseIcon.jsx');
const classnames = require('classnames');

const BaseModal = (props) => {
  if (props.isHidden) return null;

  return (
    <React.Fragment>
      <div
        className="blx-modal-overlay"
        onClick={props.onClose}
      />
      <div className={classnames('blx-modal', props.className)} style={props.style}>
        {
          props.isClosable && (
            <button className="blx-modal-close" aria-label="close" onClick={props.onClose}>
              <CloseIcon />
            </button>
          )
        }
        {props.children}
      </div>
    </React.Fragment>
  );
};

BaseModal.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  isHidden: PropTypes.bool,
  isClosable: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node
};

BaseModal.defaultProps = {
  className: '',
  style: null,
  isHidden: true,
  isClosable: true,
  onClose: () => {},
  children: null
};

module.exports = BaseModal;
