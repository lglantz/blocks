const React = require('react');
const PropTypes = require('prop-types');


const BaseModal = (props) => {
  let popup = null;
  let popupOverlay = null;
  if (!props.isHidden) {
    popup = (
      <div className="blx-modal">
        <div>
          {props.children}
        </div>
        <button
          className="blx-icon blx-icon-close"
          onClick={props.onClose}
        />
      </div>
    );
    popupOverlay = (
      <div
        className="blx-modal-overlay"
        onClick={props.onClose}
      />
    );
  }

  return (
    <div>
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
