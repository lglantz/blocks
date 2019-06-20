const React = require('react');
const PropTypes = require('prop-types');
const classnames = require('classnames');

const TextField = require('./TextField.jsx');
const Dropdown = require('../dropdowns/Dropdown.jsx');


const TextFieldWithDropdown = (props) => {
  const classes = classnames('blx-text-field-with-dropdown', props.className, {
    'blx-disabled': props.disabled
  });
  return (
    <div
      style={props.style}
      className={classes}
    >
      <TextField {...props.textField}/>
      <Dropdown {...props.dropdown}/>
    </div>
  );
}

TextFieldWithDropdown.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  textField: PropTypes.shape({
    label: PropTypes.string,
    onChange: PropTypes.func,
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    invalidErrorMessage: PropTypes.string,
    value: PropTypes.string,
    isValid: PropTypes.bool
  }),
  dropdown: PropTypes.shape({
    text: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]),
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]),
      href: PropTypes.string,
      disabled: PropTypes.bool
    })),
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  })
};

TextFieldWithDropdown.defaultProps = {
  className: '',
  style: null,
  disabled: false,
  textField: {
    label: null,
    onChange: () => {},
    name: '',
    type: 'text',
    placeholder: 'Text input',
    invalidErrorMessage: '',
    value: '',
    isValid: true
  },
  dropdown: {
    text: 'Choose an option',
    onChange: () => {},
    options: [],
    value: null
  }
};

module.exports = TextFieldWithDropdown;

