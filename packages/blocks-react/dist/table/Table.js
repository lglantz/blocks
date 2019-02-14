'use strict';

var React = require('react');
var PropTypes = require('prop-types');

var Table = function Table(props) {
  return React.createElement(
    'table',
    { className: 'blx-table' },
    React.createElement(
      'thead',
      null,
      React.createElement(
        'tr',
        { className: 'blx-table-header-row' },
        props.headings.map(function (heading) {
          return React.createElement(
            'th',
            {
              className: 'blx-table-header-cell',
              key: heading
            },
            heading
          );
        })
      )
    ),
    React.createElement(
      'tbody',
      null,
      props.entries.map(function (entry, idx) {
        return React.createElement(
          'tr',
          {
            className: 'blx-table-row',
            key: 'table-row-' + idx,
            onClick: function onClick() {
              props.onClick(entry);
            }
          },

          // TODO: this number checking is janky
          props.headings.map(function (heading) {
            return React.createElement(
              'td',
              {
                className: 'blx-table-cell ' + (typeof entry[heading] === 'number' ? 'numeric' : ''),
                key: entry[heading]
              },
              entry[heading]
            );
          })
        );
      })
    )
  );
};

Table.propTypes = {
  headings: PropTypes.arrayOf(PropTypes.string),
  entries: PropTypes.array,
  onClick: PropTypes.func
};

Table.defaultProps = {
  headings: [],
  entries: [],
  onClick: function onClick() {}
};

module.exports = Table;