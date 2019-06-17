const React = require('react');
const PropTypes = require('prop-types');


const ComboBox = (props) => {
  const options = props.options.map(option => (
    <option
      key={option.value}
      value={option.value}
    >
      {option.text}
    </option>
  ));

  if (props.blankOption) {
    options.unshift(
      <option key="blank-option" disabled selected value="">
        {props.blankOption}
      </option>
    );
  }

  return (
    <select
      style={props.style}
      className={`${props.isDisabled ? 'blx-disabled' : ''} ${props.className}`}
      disabled={props.isDisabled}
      value={props.value}
      onChange={props.onChange}
    >
      {options}
    </select>
  );
};

ComboBox.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    text: PropTypes.string
  })),
  isDisabled: PropTypes.bool,
  value: PropTypes.string,
  blankOption: PropTypes.string,
  onChange: PropTypes.func
};

ComboBox.defaultProps = {
  className: '',
  style: null,
  options: [],
  isDisabled: false,
  value: '',
  blankOption: null,
  onChange: () => {}
};

module.exports = ComboBox;

