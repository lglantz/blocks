"use strict";var React=require("react"),PropTypes=require("prop-types"),CloseIcon=require("../icons/CloseIcon.js"),classnames=require("classnames"),BaseModal=function(e){var s=e.classes,l=e.className,a=e.style,o=e.isHidden,r=e.isClosable,c=e.onClose,n=e.children;return o?null:React.createElement(React.Fragment,null,React.createElement("div",{className:classnames("blx-modal-overlay",s.overlay),onClick:c}),React.createElement("div",{className:classnames("blx-modal",s.root,l),style:a},r&&React.createElement("button",{className:classnames("blx-modal-close",s.close),"aria-label":"close",onClick:c},React.createElement(CloseIcon,null)),n))};BaseModal.propTypes={classes:PropTypes.shape({root:PropTypes.string,close:PropTypes.string,overlay:PropTypes.string}),className:PropTypes.string,style:PropTypes.object,isHidden:PropTypes.bool,isClosable:PropTypes.bool,onClose:PropTypes.func,children:PropTypes.node},BaseModal.defaultProps={classes:{},className:"",style:null,isHidden:!0,isClosable:!0,onClose:function(){},children:null},module.exports=BaseModal;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFscy9CYXNlTW9kYWwuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwicmVxdWlyZSIsIlByb3BUeXBlcyIsIkNsb3NlSWNvbiIsImNsYXNzbmFtZXMiLCJCYXNlTW9kYWwiLCJfcmVmIiwiY2xhc3NlcyIsImNsYXNzTmFtZSIsInN0eWxlIiwiaXNIaWRkZW4iLCJpc0Nsb3NhYmxlIiwib25DbG9zZSIsImNoaWxkcmVuIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50Iiwib3ZlcmxheSIsIm9uQ2xpY2siLCJyb290IiwiY2xvc2UiLCJhcmlhLWxhYmVsIiwicHJvcFR5cGVzIiwic2hhcGUiLCJzdHJpbmciLCJvYmplY3QiLCJib29sIiwiZnVuYyIsIm5vZGUiLCJkZWZhdWx0UHJvcHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiYUFBQSxJQUFNQSxNQUFRQyxRQUFRLFNBQ2hCQyxVQUFZRCxRQUFRLGNBQ3BCRSxVQUFZRixRQUFRLHlCQUNwQkcsV0FBYUgsUUFBUSxjQUVyQkksVUFBWSxTQUFBQyxHQUE0RSxJQUF6RUMsRUFBeUVELEVBQXpFQyxRQUFTQyxFQUFnRUYsRUFBaEVFLFVBQVdDLEVBQXFESCxFQUFyREcsTUFBT0MsRUFBOENKLEVBQTlDSSxTQUFVQyxFQUFvQ0wsRUFBcENLLFdBQVlDLEVBQXdCTixFQUF4Qk0sUUFBU0MsRUFBZVAsRUFBZk8sU0FDN0UsT0FBSUgsRUFBaUIsS0FHbkJWLE1BQUFjLGNBQUNkLE1BQU1lLFNBQVAsS0FDRWYsTUFBQWMsY0FBQSxNQUFBLENBQ0VOLFVBQVdKLFdBQVcsb0JBQXFCRyxFQUFRUyxTQUNuREMsUUFBU0wsSUFFWFosTUFBQWMsY0FBQSxNQUFBLENBQUtOLFVBQVdKLFdBQVcsWUFBYUcsRUFBUVcsS0FBTVYsR0FBWUMsTUFBT0EsR0FFckVFLEdBQ0VYLE1BQUFjLGNBQUEsU0FBQSxDQUFRTixVQUFXSixXQUFXLGtCQUFtQkcsRUFBUVksT0FBUUMsYUFBVyxRQUFRSCxRQUFTTCxHQUMzRlosTUFBQWMsY0FBQ1gsVUFBRCxPQUlMVSxLQU1UUixVQUFVZ0IsVUFBWSxDQUNwQmQsUUFBU0wsVUFBVW9CLE1BQU0sQ0FDdkJKLEtBQU1oQixVQUFVcUIsT0FDaEJKLE1BQU9qQixVQUFVcUIsT0FDakJQLFFBQVNkLFVBQVVxQixTQUVyQmYsVUFBV04sVUFBVXFCLE9BQ3JCZCxNQUFPUCxVQUFVc0IsT0FDakJkLFNBQVVSLFVBQVV1QixLQUNwQmQsV0FBWVQsVUFBVXVCLEtBQ3RCYixRQUFTVixVQUFVd0IsS0FDbkJiLFNBQVVYLFVBQVV5QixNQUd0QnRCLFVBQVV1QixhQUFlLENBQ3ZCckIsUUFBUyxHQUNUQyxVQUFXLEdBQ1hDLE1BQU8sS0FDUEMsVUFBVSxFQUNWQyxZQUFZLEVBQ1pDLFFBQVMsYUFDVEMsU0FBVSxNQUdaZ0IsT0FBT0MsUUFBVXpCIiwiZmlsZSI6Im1vZGFscy9CYXNlTW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBQcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5jb25zdCBDbG9zZUljb24gPSByZXF1aXJlKCcuLi9pY29ucy9DbG9zZUljb24uanN4Jyk7XG5jb25zdCBjbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG5jb25zdCBCYXNlTW9kYWwgPSAoeyBjbGFzc2VzLCBjbGFzc05hbWUsIHN0eWxlLCBpc0hpZGRlbiwgaXNDbG9zYWJsZSwgb25DbG9zZSwgY2hpbGRyZW4gfSkgPT4ge1xuICBpZiAoaXNIaWRkZW4pIHJldHVybiBudWxsO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ2JseC1tb2RhbC1vdmVybGF5JywgY2xhc3Nlcy5vdmVybGF5KX1cbiAgICAgICAgb25DbGljaz17b25DbG9zZX1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnYmx4LW1vZGFsJywgY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfSBzdHlsZT17c3R5bGV9PlxuICAgICAgICB7XG4gICAgICAgICAgaXNDbG9zYWJsZSAmJiAoXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnYmx4LW1vZGFsLWNsb3NlJywgY2xhc3Nlcy5jbG9zZSl9IGFyaWEtbGFiZWw9XCJjbG9zZVwiIG9uQ2xpY2s9e29uQ2xvc2V9PlxuICAgICAgICAgICAgICA8Q2xvc2VJY29uIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbkJhc2VNb2RhbC5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzZXM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgcm9vdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjbG9zZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvdmVybGF5OiBQcm9wVHlwZXMuc3RyaW5nXG4gIH0pLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBpc0hpZGRlbjogUHJvcFR5cGVzLmJvb2wsXG4gIGlzQ2xvc2FibGU6IFByb3BUeXBlcy5ib29sLFxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlXG59O1xuXG5CYXNlTW9kYWwuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc2VzOiB7fSxcbiAgY2xhc3NOYW1lOiAnJyxcbiAgc3R5bGU6IG51bGwsXG4gIGlzSGlkZGVuOiB0cnVlLFxuICBpc0Nsb3NhYmxlOiB0cnVlLFxuICBvbkNsb3NlOiAoKSA9PiB7fSxcbiAgY2hpbGRyZW46IG51bGxcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQmFzZU1vZGFsO1xuIl19
