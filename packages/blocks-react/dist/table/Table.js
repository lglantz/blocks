"use strict";
exports.__esModule = true;
var React = require("react");
var Table = function (props) { return (React.createElement("table", { style: props.style, className: "blx-table " + props.className },
    React.createElement("thead", null,
        React.createElement("tr", { className: "blx-table-header-row" }, props.headings.map(function (heading) { return (React.createElement("th", { className: "blx-table-header-cell", key: heading }, heading)); }))),
    React.createElement("tbody", null, props.entries.map(function (entry, idx) { return (React.createElement("tr", { className: "blx-table-row", key: "table-row-" + idx, onClick: function () { props.onClick(entry); } }, 
    // TODO: this number checking is janky
    props.headings.map(function (heading, headingIdx) { return (React.createElement("td", { className: "blx-table-cell " + (typeof entry[heading] === 'number' ? 'numeric' : ''), key: props.tableName + "-row-" + idx + "-column-" + headingIdx }, entry[heading])); }))); })))); };
Table.defaultProps = {
    tableName: 'table',
    className: '',
    style: null,
    headings: [],
    entries: [],
    onClick: function () { }
};
exports["default"] = Table;
