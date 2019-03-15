const React = require('react');
const PropTypes = require('prop-types');


const Breadcrumbs = props => (
  <nav
    style={props.style}
    className={`blx-breadcrumbs ${props.className}`}
  >
    <ul>
      {
        props.breadcrumbs.map(breadcrumb => (
          <li key={breadcrumb.text}>
            <a
              href={breadcrumb.href}
              title={breadcrumb.text}
            >
              {breadcrumb.text}
            </a>
          </li>
        ))
      }
    </ul>
  </nav>
);

Breadcrumbs.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  breadcrumbs: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    href: PropTypes.string
  }))
};

Breadcrumbs.defaultProps = {
  className: '',
  style: null,
  breadcrumbs: []
};

module.exports = Breadcrumbs;
