"use strict";var React=require("react"),PropTypes=require("prop-types"),classnames=require("classnames"),BaseModal=require("./BaseModal.js"),ButtonPrimary=require("../buttons/ButtonPrimary.js"),ButtonSecondary=require("../buttons/ButtonSecondary.js"),ButtonDanger=require("../buttons/ButtonDanger.js"),SuccessIcon=require("../icons/SuccessIcon.js"),InformationIcon=require("../icons/InformationIcon.js"),WarningIcon=require("../icons/WarningIcon.js"),ErrorIcon=require("../icons/ErrorIcon.js"),TYPE_MAP={success:{className:"blx-success-modal",icon:SuccessIcon},information:{className:"blx-information-modal",icon:InformationIcon},warning:{className:"blx-warning-modal",icon:WarningIcon},error:{className:"blx-error-modal",icon:ErrorIcon}},ActionModal=function(e){if(e.isHidden)return null;var n=null;if(e.onConfirm&&e.confirmText){var o="warning"===e.variant?ButtonDanger:ButtonPrimary;n=React.createElement(o,{text:e.confirmText,onClick:e.onConfirm})}var r=null;e.onCancel&&e.cancelText&&(r=React.createElement(ButtonSecondary,{text:e.cancelText,onClick:e.onCancel}));var a=null;(n||r)&&(a=React.createElement("div",{className:"blx-h-button-group blx-modal-buttons"},r,n));e.actionInfo&&React.createElement("p",null,e.actionInfo);var t=TYPE_MAP[e.variant].icon;return React.createElement(BaseModal,{style:e.style,className:classnames("blx-action-modal",e.className,TYPE_MAP[e.variant].className),isHidden:e.isHidden,onClose:e.onClose},React.createElement("div",{className:"blx-modal-content"},React.createElement("div",{className:"blx-modal-title"},React.createElement(t,{className:"blx-modal-icon"}),React.createElement("h4",null,e.title)),e.children),a)};ActionModal.propTypes={className:PropTypes.string,style:PropTypes.object,isHidden:PropTypes.bool,title:PropTypes.string,confirmText:PropTypes.string,onConfirm:PropTypes.func,cancelText:PropTypes.string,onCancel:PropTypes.func,onClose:PropTypes.func,variant:PropTypes.oneOf(["success","information","warning","error"]),children:PropTypes.node},ActionModal.defaultProps={className:"",style:null,isHidden:!0,title:"",confirmText:"",onConfirm:null,cancelText:"",onCancel:null,onClose:function(){},variant:"success",children:null},module.exports=ActionModal;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFscy9BY3Rpb25Nb2RhbC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJyZXF1aXJlIiwiUHJvcFR5cGVzIiwiY2xhc3NuYW1lcyIsIkJhc2VNb2RhbCIsIkJ1dHRvblByaW1hcnkiLCJCdXR0b25TZWNvbmRhcnkiLCJCdXR0b25EYW5nZXIiLCJTdWNjZXNzSWNvbiIsIkluZm9ybWF0aW9uSWNvbiIsIldhcm5pbmdJY29uIiwiRXJyb3JJY29uIiwiVFlQRV9NQVAiLCJzdWNjZXNzIiwiY2xhc3NOYW1lIiwiaWNvbiIsImluZm9ybWF0aW9uIiwid2FybmluZyIsImVycm9yIiwiQWN0aW9uTW9kYWwiLCJwcm9wcyIsImlzSGlkZGVuIiwiY29uZmlybUJ1dHRvbiIsIm9uQ29uZmlybSIsImNvbmZpcm1UZXh0IiwiQnV0dG9uIiwidmFyaWFudCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Iiwib25DbGljayIsImNhbmNlbEJ1dHRvbiIsIm9uQ2FuY2VsIiwiY2FuY2VsVGV4dCIsImJ1dHRvbkJhciIsImFjdGlvbkluZm8iLCJJY29uIiwic3R5bGUiLCJvbkNsb3NlIiwidGl0bGUiLCJjaGlsZHJlbiIsInByb3BUeXBlcyIsInN0cmluZyIsIm9iamVjdCIsImJvb2wiLCJmdW5jIiwib25lT2YiLCJub2RlIiwiZGVmYXVsdFByb3BzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6ImFBQUEsSUFBTUEsTUFBUUMsUUFBUSxTQUNoQkMsVUFBWUQsUUFBUSxjQUNwQkUsV0FBYUYsUUFBUSxjQUVyQkcsVUFBWUgsUUFBUSxrQkFDcEJJLGNBQWdCSixRQUFRLCtCQUN4QkssZ0JBQWtCTCxRQUFRLGlDQUMxQk0sYUFBZU4sUUFBUSw4QkFDdkJPLFlBQWNQLFFBQVEsMkJBQ3RCUSxnQkFBa0JSLFFBQVEsK0JBQzFCUyxZQUFjVCxRQUFRLDJCQUN0QlUsVUFBWVYsUUFBUSx5QkFFcEJXLFNBQVcsQ0FDZkMsUUFBUyxDQUNQQyxVQUFXLG9CQUNYQyxLQUFNUCxhQUVSUSxZQUFhLENBQ1hGLFVBQVcsd0JBQ1hDLEtBQU1OLGlCQUVSUSxRQUFTLENBQ1BILFVBQVcsb0JBQ1hDLEtBQU1MLGFBRVJRLE1BQU8sQ0FDTEosVUFBVyxrQkFDWEMsS0FBTUosWUFJSlEsWUFBYyxTQUFDQyxHQUNuQixHQUFJQSxFQUFNQyxTQUFVLE9BQU8sS0FFM0IsSUFBSUMsRUFBZ0IsS0FDcEIsR0FBSUYsRUFBTUcsV0FBYUgsRUFBTUksWUFBYSxDQUN4QyxJQUFNQyxFQUEyQixZQUFsQkwsRUFBTU0sUUFBd0JuQixhQUFlRixjQUM1RGlCLEVBQ0V0QixNQUFBMkIsY0FBQ0YsRUFBRCxDQUNFRyxLQUFNUixFQUFNSSxZQUNaSyxRQUFTVCxFQUFNRyxZQUtyQixJQUFJTyxFQUFlLEtBQ2ZWLEVBQU1XLFVBQVlYLEVBQU1ZLGFBQzFCRixFQUNFOUIsTUFBQTJCLGNBQUNyQixnQkFBRCxDQUNFc0IsS0FBTVIsRUFBTVksV0FDWkgsUUFBU1QsRUFBTVcsWUFLckIsSUFBSUUsRUFBWSxNQUNaWCxHQUFpQlEsS0FDbkJHLEVBQ0VqQyxNQUFBMkIsY0FBQSxNQUFBLENBQUtiLFVBQVUsd0NBQ1pnQixFQUNBUixJQU1IRixFQUFNYyxZQUVObEMsTUFBQTJCLGNBQUEsSUFBQSxLQUFJUCxFQUFNYyxZQUlkLElBQU1DLEVBQU92QixTQUFTUSxFQUFNTSxTQUFTWCxLQUVyQyxPQUNFZixNQUFBMkIsY0FBQ3ZCLFVBQUQsQ0FDRWdDLE1BQU9oQixFQUFNZ0IsTUFDYnRCLFVBQVdYLFdBQVcsbUJBQW9CaUIsRUFBTU4sVUFBV0YsU0FBU1EsRUFBTU0sU0FBU1osV0FDbkZPLFNBQVVELEVBQU1DLFNBQ2hCZ0IsUUFBU2pCLEVBQU1pQixTQUVmckMsTUFBQTJCLGNBQUEsTUFBQSxDQUFLYixVQUFVLHFCQUNiZCxNQUFBMkIsY0FBQSxNQUFBLENBQUtiLFVBQVUsbUJBQ2JkLE1BQUEyQixjQUFDUSxFQUFELENBQU1yQixVQUFVLG1CQUNoQmQsTUFBQTJCLGNBQUEsS0FBQSxLQUFLUCxFQUFNa0IsUUFFWmxCLEVBQU1tQixVQUVSTixJQUtQZCxZQUFZcUIsVUFBWSxDQUN0QjFCLFVBQVdaLFVBQVV1QyxPQUNyQkwsTUFBT2xDLFVBQVV3QyxPQUNqQnJCLFNBQVVuQixVQUFVeUMsS0FDcEJMLE1BQU9wQyxVQUFVdUMsT0FDakJqQixZQUFhdEIsVUFBVXVDLE9BQ3ZCbEIsVUFBV3JCLFVBQVUwQyxLQUNyQlosV0FBWTlCLFVBQVV1QyxPQUN0QlYsU0FBVTdCLFVBQVUwQyxLQUNwQlAsUUFBU25DLFVBQVUwQyxLQUNuQmxCLFFBQVN4QixVQUFVMkMsTUFBTSxDQUFDLFVBQVcsY0FBZSxVQUFXLFVBQy9ETixTQUFVckMsVUFBVTRDLE1BR3RCM0IsWUFBWTRCLGFBQWUsQ0FDekJqQyxVQUFXLEdBQ1hzQixNQUFPLEtBQ1BmLFVBQVUsRUFDVmlCLE1BQU8sR0FDUGQsWUFBYSxHQUNiRCxVQUFXLEtBQ1hTLFdBQVksR0FDWkQsU0FBVSxLQUNWTSxRQUFTLGFBQ1RYLFFBQVMsVUFDVGEsU0FBVSxNQUdaUyxPQUFPQyxRQUFVOUIiLCJmaWxlIjoibW9kYWxzL0FjdGlvbk1vZGFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuY29uc3QgY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxuY29uc3QgQmFzZU1vZGFsID0gcmVxdWlyZSgnLi9CYXNlTW9kYWwuanN4Jyk7XG5jb25zdCBCdXR0b25QcmltYXJ5ID0gcmVxdWlyZSgnLi4vYnV0dG9ucy9CdXR0b25QcmltYXJ5LmpzeCcpO1xuY29uc3QgQnV0dG9uU2Vjb25kYXJ5ID0gcmVxdWlyZSgnLi4vYnV0dG9ucy9CdXR0b25TZWNvbmRhcnkuanN4Jyk7XG5jb25zdCBCdXR0b25EYW5nZXIgPSByZXF1aXJlKCcuLi9idXR0b25zL0J1dHRvbkRhbmdlci5qc3gnKTtcbmNvbnN0IFN1Y2Nlc3NJY29uID0gcmVxdWlyZSgnLi4vaWNvbnMvU3VjY2Vzc0ljb24uanN4Jyk7XG5jb25zdCBJbmZvcm1hdGlvbkljb24gPSByZXF1aXJlKCcuLi9pY29ucy9JbmZvcm1hdGlvbkljb24uanN4Jyk7XG5jb25zdCBXYXJuaW5nSWNvbiA9IHJlcXVpcmUoJy4uL2ljb25zL1dhcm5pbmdJY29uLmpzeCcpO1xuY29uc3QgRXJyb3JJY29uID0gcmVxdWlyZSgnLi4vaWNvbnMvRXJyb3JJY29uLmpzeCcpO1xuXG5jb25zdCBUWVBFX01BUCA9IHtcbiAgc3VjY2Vzczoge1xuICAgIGNsYXNzTmFtZTogJ2JseC1zdWNjZXNzLW1vZGFsJyxcbiAgICBpY29uOiBTdWNjZXNzSWNvblxuICB9LFxuICBpbmZvcm1hdGlvbjoge1xuICAgIGNsYXNzTmFtZTogJ2JseC1pbmZvcm1hdGlvbi1tb2RhbCcsXG4gICAgaWNvbjogSW5mb3JtYXRpb25JY29uXG4gIH0sXG4gIHdhcm5pbmc6IHtcbiAgICBjbGFzc05hbWU6ICdibHgtd2FybmluZy1tb2RhbCcsXG4gICAgaWNvbjogV2FybmluZ0ljb25cbiAgfSxcbiAgZXJyb3I6IHtcbiAgICBjbGFzc05hbWU6ICdibHgtZXJyb3ItbW9kYWwnLFxuICAgIGljb246IEVycm9ySWNvblxuICB9XG59O1xuXG5jb25zdCBBY3Rpb25Nb2RhbCA9IChwcm9wcykgPT4ge1xuICBpZiAocHJvcHMuaXNIaWRkZW4pIHJldHVybiBudWxsO1xuXG4gIGxldCBjb25maXJtQnV0dG9uID0gbnVsbDtcbiAgaWYgKHByb3BzLm9uQ29uZmlybSAmJiBwcm9wcy5jb25maXJtVGV4dCkge1xuICAgIGNvbnN0IEJ1dHRvbiA9IHByb3BzLnZhcmlhbnQgPT09ICd3YXJuaW5nJyA/IEJ1dHRvbkRhbmdlciA6IEJ1dHRvblByaW1hcnk7XG4gICAgY29uZmlybUJ1dHRvbiA9IChcbiAgICAgIDxCdXR0b25cbiAgICAgICAgdGV4dD17cHJvcHMuY29uZmlybVRleHR9XG4gICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ29uZmlybX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIGxldCBjYW5jZWxCdXR0b24gPSBudWxsO1xuICBpZiAocHJvcHMub25DYW5jZWwgJiYgcHJvcHMuY2FuY2VsVGV4dCkge1xuICAgIGNhbmNlbEJ1dHRvbiA9IChcbiAgICAgIDxCdXR0b25TZWNvbmRhcnlcbiAgICAgICAgdGV4dD17cHJvcHMuY2FuY2VsVGV4dH1cbiAgICAgICAgb25DbGljaz17cHJvcHMub25DYW5jZWx9XG4gICAgICAvPlxuICAgICk7XG4gIH1cblxuICBsZXQgYnV0dG9uQmFyID0gbnVsbDtcbiAgaWYgKGNvbmZpcm1CdXR0b24gfHwgY2FuY2VsQnV0dG9uKSB7XG4gICAgYnV0dG9uQmFyID0gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJibHgtaC1idXR0b24tZ3JvdXAgYmx4LW1vZGFsLWJ1dHRvbnNcIj5cbiAgICAgICAge2NhbmNlbEJ1dHRvbn1cbiAgICAgICAge2NvbmZpcm1CdXR0b259XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgbGV0IGFjdGlvbkluZm8gPSBudWxsO1xuICBpZiAocHJvcHMuYWN0aW9uSW5mbykge1xuICAgIGFjdGlvbkluZm8gPSAoXG4gICAgICA8cD57cHJvcHMuYWN0aW9uSW5mb308L3A+XG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IEljb24gPSBUWVBFX01BUFtwcm9wcy52YXJpYW50XS5pY29uO1xuXG4gIHJldHVybiAoXG4gICAgPEJhc2VNb2RhbFxuICAgICAgc3R5bGU9e3Byb3BzLnN0eWxlfVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdibHgtYWN0aW9uLW1vZGFsJywgcHJvcHMuY2xhc3NOYW1lLCBUWVBFX01BUFtwcm9wcy52YXJpYW50XS5jbGFzc05hbWUpfVxuICAgICAgaXNIaWRkZW49e3Byb3BzLmlzSGlkZGVufVxuICAgICAgb25DbG9zZT17cHJvcHMub25DbG9zZX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJseC1tb2RhbC1jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmx4LW1vZGFsLXRpdGxlXCI+XG4gICAgICAgICAgPEljb24gY2xhc3NOYW1lPVwiYmx4LW1vZGFsLWljb25cIiAvPlxuICAgICAgICAgIDxoND57cHJvcHMudGl0bGV9PC9oND5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgICAge2J1dHRvbkJhcn1cbiAgICA8L0Jhc2VNb2RhbD5cbiAgKTtcbn07XG5cbkFjdGlvbk1vZGFsLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgaXNIaWRkZW46IFByb3BUeXBlcy5ib29sLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY29uZmlybVRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uQ29uZmlybTogUHJvcFR5cGVzLmZ1bmMsXG4gIGNhbmNlbFRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uQ2FuY2VsOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ3N1Y2Nlc3MnLCAnaW5mb3JtYXRpb24nLCAnd2FybmluZycsICdlcnJvciddKSxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlXG59O1xuXG5BY3Rpb25Nb2RhbC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogJycsXG4gIHN0eWxlOiBudWxsLFxuICBpc0hpZGRlbjogdHJ1ZSxcbiAgdGl0bGU6ICcnLFxuICBjb25maXJtVGV4dDogJycsXG4gIG9uQ29uZmlybTogbnVsbCxcbiAgY2FuY2VsVGV4dDogJycsXG4gIG9uQ2FuY2VsOiBudWxsLFxuICBvbkNsb3NlOiAoKSA9PiB7fSxcbiAgdmFyaWFudDogJ3N1Y2Nlc3MnLFxuICBjaGlsZHJlbjogbnVsbFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBY3Rpb25Nb2RhbDtcbiJdfQ==
