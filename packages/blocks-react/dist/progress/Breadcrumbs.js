'use strict';

var React = require('react');
var PropTypes = require('prop-types');

var Breadcrumbs = function Breadcrumbs(props) {
  return React.createElement(
    'nav',
    { className: 'blx-breadcrumbs' },
    React.createElement(
      'ul',
      null,
      props.breadcrumbs.map(function (breadcrumb) {
        return React.createElement(
          'li',
          { key: breadcrumb.text },
          React.createElement(
            'a',
            {
              href: breadcrumb.href,
              title: breadcrumb.text
            },
            breadcrumb.text
          )
        );
      })
    )
  );
};

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