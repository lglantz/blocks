const React = require('react');
const PropTypes = require('prop-types');

const NextIcon = require('../icons/NextIcon.jsx');


function onToggle(e) {
  const section = e.target.parentNode;
  const panel = section.getElementsByClassName('blx-accordion-content')[0];
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = `${panel.scrollHeight}px`;
  }
}

const AccordionSection = (props) => {
  const { open } = props;
  const contentRef = React.useRef();
  React.useLayoutEffect(() => {
    contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
  }, [open]);

  return (
    <div
      style={props.style}
      className={`blx-accordion-section ${props.className}`}
    >
      <input id={props.id} type="checkbox" name="blx-accordion-tab" defaultChecked={props.open} onChange={props.onToggle} />
      <label htmlFor={props.id} className="blx-accordion-trigger">
        <NextIcon className="blx-accordion-arrow" />
        {props.trigger}
      </label>
      <div
        className="blx-accordion-content"
        ref={contentRef}
      >
        {props.children}
      </div>
    </div>
  );
}

AccordionSection.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  id: PropTypes.string.isRequired,
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
