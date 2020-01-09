import * as React from 'react';

const Table: React.FunctionComponent<TableProps> = props => (
  <table
    style={props.style}
    className={`blx-table ${props.className}`}
  >
    <thead>
      <tr className="blx-table-header-row">
        {
          props.headings.map(heading => (
            <th
              className="blx-table-header-cell"
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
            className="blx-table-row"
            key={`table-row-${idx}`}
            onClick={() => { props.onClick(entry); }}
          >
            {
              // TODO: this number checking is janky
              props.headings.map((heading, headingIdx) => (
                <td
                  className={`blx-table-cell ${typeof entry[heading] === 'number' ? 'numeric' : ''}`}
                  key={`${props.tableName}-row-${idx}-column-${headingIdx}`}
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

type TableProps = {
  tableName?: string,
  className?: string,
  style?: any, //object,
  headings?: string[],
  entries?: {

  }[],
  onClick?: any, //func
};

Table.defaultProps = {
  tableName: 'table',
  className: '',
  style: null,
  headings: [],
  entries: [],
  onClick: () => { }
};

export default Table;
