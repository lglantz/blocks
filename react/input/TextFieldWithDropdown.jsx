const React = require('react');
const PropTypes = require('prop-types');
const TextField = require('./TextField.jsx');
const Dropdown = require('../dropdowns/Dropdown.jsx');

class DropdownTextField extends React.Component {
  render() {
    return (
      <div className={`text-field-with-dropdown ${this.props.isDisabled ? 'disabled' : ''}`}>
        <TextField
          label={this.props.label}
          value={this.props.valueTF}
          isValid={this.props.isValid}
          invalidErrorMessage={this.props.invalidErrorMessage}
          placeHolder={this.props.placeholder}
          type={this.props.type}
          name={this.props.name}
          onChange={this.props.onChangeTF}
        />
        <Dropdown
          text={this.props.text}
          options={this.props.options}
          onChange={this.props.onChangeDD}
          value={this.props.valueDD}
        />
      </div>
    );
  }
}

DropdownTextField.propTypes = {
  text: PropTypes.string,
  valueDD: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
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
  isDisabled: PropTypes.bool,
  onChangeDD: PropTypes.func,
  isValid: PropTypes.func,
  valueTF: PropTypes.string,
  label: PropTypes.string,
  invalidErrorMessage: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  onChangeTF: PropTypes.func
};

DropdownTextField.defaultProps = {
  text: 'Choose an option',
  valueDD: null,
  options: [],
  isDisabled: false,
  onChangeDD: () => {},
  isValid: () => (true),
  valueTF: '',
  label: null,
  invalidErrorMessage: '',
  placeholder: 'Text input',
  type: 'text',
  name: '',
  onChangeTF: () => {}
};

module.exports = DropdownTextField;

