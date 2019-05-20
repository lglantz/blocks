import React from "react";
import PropTypes from "prop-types";


const ColorCard = (props) => (
  <div>
    <div className="color-card">
      <div
        className="color-card-background"
        style={{ backgroundColor: props.value }}
      />
      <div className="color-card-title">
        <p className="blx-ui-text">
          { props.name }
        </p>
        <p className="blx-ui-caps">
          { `${props.displayValue || props.value} ${props.opacity || ''}` }
        </p>
      </div>
    </div>
  </div>
);

ColorCard.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  displayValue: PropTypes.string,
  opacity: PropTypes.string
};

ColorCard.defaultProps = {
  displayValue: null,
  opacity: null
};

export default ColorCard;
