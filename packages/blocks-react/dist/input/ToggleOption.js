"use strict";var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e};function _objectWithoutProperties(e,t){var r={};for(var o in e)0<=t.indexOf(o)||Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r}var React=require("react"),PropTypes=require("prop-types"),ToggleOption=function(e){var t=e.value,r=e.selectedValue,o=e.children,p=_objectWithoutProperties(e,["value","selectedValue","children"]);return React.createElement("label",{className:"blx-toggle-container",key:t},React.createElement("input",_extends({},p,{type:"radio",id:"toggle-option-"+t,value:t,defaultChecked:t===r})),React.createElement("span",{className:"blx-toggle-text"},o))};ToggleOption.propTypes={value:PropTypes.oneOfType([PropTypes.string,PropTypes.number]).isRequired,selectedValue:PropTypes.oneOfType([PropTypes.string,PropTypes.number])},module.exports=ToggleOption;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0L1RvZ2dsZU9wdGlvbi5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJyZXF1aXJlIiwiUHJvcFR5cGVzIiwiVG9nZ2xlT3B0aW9uIiwiX3JlZiIsInZhbHVlIiwic2VsZWN0ZWRWYWx1ZSIsImNoaWxkcmVuIiwib3RoZXIiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwia2V5IiwiX2V4dGVuZHMiLCJ0eXBlIiwiaWQiLCJkZWZhdWx0Q2hlY2tlZCIsInByb3BUeXBlcyIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiNFVBQUEsSUFBTUEsTUFBUUMsUUFBUSxTQUNoQkMsVUFBWUQsUUFBUSxjQUdwQkUsYUFBZSxTQUFBQyxHQUFBLElBQUdDLEVBQUhELEVBQUdDLE1BQU9DLEVBQVZGLEVBQVVFLGNBQWVDLEVBQXpCSCxFQUF5QkcsU0FBYUMsRUFBdENDLHlCQUFBTCxFQUFBLENBQUEsUUFBQSxnQkFBQSxhQUFBLE9BQ25CSixNQUFBVSxjQUFBLFFBQUEsQ0FDRUMsVUFBVSx1QkFDVkMsSUFBS1AsR0FFTEwsTUFBQVUsY0FBQSxRQUFBRyxTQUFBLEdBQ01MLEVBRE4sQ0FFRU0sS0FBSyxRQUNMQyxHQUFBLGlCQUFxQlYsRUFDckJBLE1BQU9BLEVBQ1BXLGVBQWdCWCxJQUFVQyxLQUU1Qk4sTUFBQVUsY0FBQSxPQUFBLENBQU1DLFVBQVUsbUJBQ2JKLEtBS1BKLGFBQWFjLFVBQVksQ0FDdkJaLE1BQU9ILFVBQVVnQixVQUFVLENBQ3pCaEIsVUFBVWlCLE9BQ1ZqQixVQUFVa0IsU0FDVEMsV0FDSGYsY0FBZUosVUFBVWdCLFVBQVUsQ0FDakNoQixVQUFVaUIsT0FDVmpCLFVBQVVrQixVQUlkRSxPQUFPQyxRQUFVcEIiLCJmaWxlIjoiaW5wdXQvVG9nZ2xlT3B0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG5cbmNvbnN0IFRvZ2dsZU9wdGlvbiA9ICh7IHZhbHVlLCBzZWxlY3RlZFZhbHVlLCBjaGlsZHJlbiwgLi4ub3RoZXIgfSkgPT4gKFxuICA8bGFiZWxcbiAgICBjbGFzc05hbWU9XCJibHgtdG9nZ2xlLWNvbnRhaW5lclwiXG4gICAga2V5PXt2YWx1ZX1cbiAgPlxuICAgIDxpbnB1dFxuICAgICAgey4uLm90aGVyfVxuICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgIGlkPXtgdG9nZ2xlLW9wdGlvbi0ke3ZhbHVlfWB9XG4gICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICBkZWZhdWx0Q2hlY2tlZD17dmFsdWUgPT09IHNlbGVjdGVkVmFsdWV9XG4gICAgLz5cbiAgICA8c3BhbiBjbGFzc05hbWU9XCJibHgtdG9nZ2xlLXRleHRcIj5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L3NwYW4+XG4gIDwvbGFiZWw+XG4pO1xuXG5Ub2dnbGVPcHRpb24ucHJvcFR5cGVzID0ge1xuICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyXG4gIF0pLmlzUmVxdWlyZWQsXG4gIHNlbGVjdGVkVmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlclxuICBdKVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBUb2dnbGVPcHRpb247XG4iXX0=
