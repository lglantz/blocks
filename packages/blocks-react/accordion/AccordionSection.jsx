const React = require('react');
const PropTypes = require('prop-types');


function onToggle(e) {
  const section = e.target.parentNode;
  const panel = section.getElementsByClassName('blx-accordion-content')[0];
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = `${panel.scrollHeight}px`;
  }
}

class AccordionSection extends React.Component {
  componentDidMount() {
    if (this.props.open) {
      this.content.style.maxHeight = `${this.content.scrollHeight}px`;
    }
  }

  componentDidUpdate() {
    if (this.props.open) {
      this.content.style.maxHeight = `${this.content.scrollHeight}px`;
    }
  }

  render() {
    const name = Math.random().toString();
    return (
      <div
        style={this.props.style}
        className={`blx-accordion-section ${this.props.className}`}
      >
        <input id={name} type="checkbox" name="blx-accordion-tab" defaultChecked={this.props.open} onChange={this.props.onToggle} />
        <label htmlFor={name} className="blx-accordion-trigger">{this.props.trigger}</label>
        <div
          className="blx-accordion-content"
          ref={content => this.content = content}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

AccordionSection.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  open: PropTypes.bool,
  trigger: PropTypes.object.isRequired,
  onToggle: PropTypes.func
};

AccordionSection.defaultProps = {
  className: '',
  style: null,
  open: false,
  onToggle: onToggle
};

module.exports = AccordionSection;
