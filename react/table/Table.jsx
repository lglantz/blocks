const React = require('react');
const PropTypes = require('prop-types');


const Table = props => (
  <table className="table">
    <thead>
      <tr className="table-header-row">
        {
          props.headings.map(heading => (
            <th
              className="table-header-cell"
              key={heading}
            >
              {heading}
            </th>
          ))
        }
      </tr>
    </thead>
    <tbody>
      {
        props.entries.map((entry, idx) => (
          <tr
            className="table-row"
            key={`table-row-${idx}`}
            onClick={() => { props.onClick(entry); }}
          >
            {
              // TODO: this number checking is janky
              props.headings.map(heading => (
                <td
                  className={`table-cell ${typeof entry[heading] === 'number' ? 'numeric' : ''}`}
                  key={entry[heading]}
                >
                  {entry[heading]}
                </td>
              ))
            }
          </tr>
        ))
      }
    </tbody>
  </table>
);

Table.propTypes = {
  headings: PropTypes.arrayOf(PropTypes.string),
  entries: PropTypes.array,
  onClick: PropTypes.func
};

Table.defaultProps = {
  headings: [],
  entries: [],
  onClick: () => {}
};

module.exports = Table;
