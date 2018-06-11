const React = require('react');
const PropTypes = require('prop-types');


function onToggle(e) {
  const section = e.target.parentNode;
  const panel = section.getElementsByClassName('accordion-content')[0];
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
      <div className="accordion-section">
        <input id={name} type="checkbox" name="accordion-tab" defaultChecked={this.props.open} onChange={this.props.onToggle} />
        <label htmlFor={name} className="accordion-trigger">{this.props.trigger}</label>
        <div
          className="accordion-content"
          ref={content => this.content = content}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

AccordionSection.propTypes = {
  open: PropTypes.bool,
  trigger: PropTypes.object.isRequired,
  onToggle: PropTypes.func
};

AccordionSection.defaultProps = {
  open: false,
  onToggle: onToggle
};

module.exports = AccordionSection;
