module.exports = {
  Accordion: require('./dist/accordion/AccordionSection.js'),
  Alerts: {
    ErrorAlert: require('./dist/alerts/ErrorAlert.js'),
    InformationalAlert: require('./dist/alerts/InformationalAlert.js'),
    SuccessAlert: require('./dist/alerts/SuccessAlert.js'),
    WarningAlert: require('./dist/alerts/WarningAlert.js')
  },
  Buttons: {
    ButtonPrimary: require('./dist/buttons/ButtonPrimary.js'),
    ButtonSecondary: require('./dist/buttons/ButtonSecondary.js'),
    ButtonDanger: require('./dist/buttons/ButtonDanger.js'),
    ButtonDark: require('./dist/buttons/ButtonDark.js')
  },
  Dropdowns: {
    Dropdown: require('./dist/dropdowns/Dropdown.js'),
    PopoverMenu: require('./dist/dropdowns/PopoverMenu.js')
  },
  Icons: {
    AddIcon: require('./dist/icons/AddIcon.js'),
    BackIcon: require('./dist/icons/BackIcon.js'),
    CloseIcon: require('./dist/icons/CloseIcon.js'),
    DownIcon: require('./dist/icons/DownIcon.js'),
    ErrorIcon: require('./dist/icons/ErrorIcon.js'),
    HelpIcon: require('./dist/icons/HelpIcon.js'),
    Icon: require('./dist/icons/Icon.js'),
    InformationIcon: require('./dist/icons/InformationIcon.js'),
    MoreIcon: require('./dist/icons/MoreIcon.js'),
    MoreVerticalIcon: require('./dist/icons/MoreVerticalIcon.js'),
    NextIcon: require('./dist/icons/NextIcon.js'),
    SuccessIcon: require('./dist/icons/SuccessIcon.js'),
    WarningIcon: require('./dist/icons/WarningIcon.js'),
    UpIcon: require('./dist/icons/UpIcon.js')
  },
  Input: {
    Checkbox: require('./dist/input/Checkbox.js'),
    RadioButton: require('./dist/input/RadioButton.js'),
    RadioButtonGroup: require('./dist/input/RadioButtonGroup.js'),
    TextField: require('./dist/input/TextField.js'),
    TextArea: require('./dist/input/TextArea.js'),
    TextFieldWithDropdown: require('./dist/input/TextFieldWithDropdown.js'),
    Toggle: require('./dist/input/Toggle.js')
  },
  Modals: {
    ActionModal: require('./dist/modals/ActionModal.js'),
    BaseModal: require('./dist/modals/BaseModal.js')
  },
  Progress: {
    Breadcrumbs: require('./dist/progress/Breadcrumbs.js'),
    ProgressDots: require('./dist/progress/ProgressDots.js')
  },
  SortableList: require('./dist/lists/SortableList.js'),
  Table: require('./dist/table/Table.js'),
  Tabs: {
    Tabs: require('./dist/tabs/Tabs.js'),
    RadioTabItem: require('./dist/tabs/RadioTabItem.js'),
    RadioSubTabItem: require('./dist/tabs/RadioSubTabItem.js'),
    LinkTabItem: require('./dist/tabs/LinkTabItem.js'),
    LinkSubTabItem: require('./dist/tabs/LinkSubTabItem.js')
  },
  Tooltip: require('./dist/tooltips/Tooltip.js'),
  wrappers: {
    closeOnClick: require('./dist/wrappers/closeOnClick.js'),
    keyControlledMenu: require('./dist/wrappers/keyControlledMenu.js')
  }
};

