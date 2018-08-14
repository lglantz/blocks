const React = require('react');
const PropTypes = require('prop-types');


const BaseModal = (props) => {
  if (props.isHidden) return null;

  return (
    <div>
      <div
        className="blx-modal-overlay"
        onClick={props.onClose}
      />

      <div className="blx-modal">
        <button
          className="blx-icon blx-icon-close"
          onClick={props.onClose}
        />

        <div>
          {props.children}
        </div>
      </div>

    </div>
  );
};

BaseModal.propTypes = {
  isHidden: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node.isRequired
};

BaseModal.defaultProps = {
  isHidden: true,
  onClose: () => {}
};

module.exports = BaseModal;
