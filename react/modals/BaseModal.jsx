const React = require('react');
const PropTypes = require('prop-types');


const BaseModal = (props) => {
  let popup = null;
  let popupOverlay = null;
  if (!props.isHidden) {
    popup = (
      <div className="modal">
        <div className="modal-text">
          {props.children}
        </div>
        <button
          className="modal-close"
          onClick={props.onClose}
        />
      </div>
    );
    popupOverlay = (
      <div
        className="modal-overlay"
        onClick={props.onClose}
      />
    );
  }

  return (
    <div className="modal-container">
      {popupOverlay}
      {popup}
    </div>
  );
};

BaseModal.propTypes = {
  isHidden: PropTypes.bool,
  onClose: PropTypes.func
};

BaseModal.defaultProps = {
  isHidden: true,
  onClose: () => {}
};

module.exports = BaseModal;
