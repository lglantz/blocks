const React = require('react');
const PropTypes = require('prop-types');
const CloseIcon = require('../icons/CloseIcon.jsx');
const classnames = require('classnames');

const BaseModal = ({ classes, className, style, isHidden, isClosable, onClose, children }) => {
  if (isHidden) return null;

  return (
    <React.Fragment>
      <div
        className={classnames('blx-modal-overlay', classes.overlay)}
        onClick={onClose}
      />
      <div className={classnames('blx-modal', classes.root, className)} style={style}>
        {
          isClosable && (
            <button className={classnames('blx-modal-close', classes.close)} aria-label="close" onClick={onClose}>
              <CloseIcon />
            </button>
          )
        }
        {children}
      </div>
    </React.Fragment>
  );
};

BaseModal.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
    close: PropTypes.string,
    overlay: PropTypes.string
  }),
  className: PropTypes.string,
  style: PropTypes.object,
  isHidden: PropTypes.bool,
  isClosable: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node
};

BaseModal.defaultProps = {
  classes: {},
  className: '',
  style: null,
  isHidden: true,
  isClosable: true,
  onClose: () => {},
  children: null
};

module.exports = BaseModal;
