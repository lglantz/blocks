const React = require('react');
const PropTypes = require('prop-types');
const CloseIcon = require('../icons/CloseIcon.jsx');


const BaseModal = (props) => {
  if (props.isHidden) return null;

  return (
    <div
      style={props.style}
      className={props.className}
    >
      <div
        className="blx-modal-overlay"
        onClick={props.onClose}
      />
      <div className="blx-modal">
        {
          props.isClosable && (
            <button className="blx-modal-close" aria-label="close" onClick={props.onClose}>
              <CloseIcon />
            </button>
          )
        }
        <div className="blx-modal-content">
          { props.children }
        </div>
      </div>

    </div>
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
