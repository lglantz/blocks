const React = require('react');
const PropTypes = require('prop-types');


const Breadcrumbs = props => (
  <nav className="breadcrumbs">
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
  breadcrumbs: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    href: PropTypes.string
  }))
};

Breadcrumbs.defaultProps = {
  breadcrumbs: []
};

module.exports = Breadcrumbs;
