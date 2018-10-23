module.exports = {
  Accordion: require('./react/accordion/AccordionSection.jsx'),
  Alerts: {
    ErrorAlert: require('./react/alerts/ErrorAlert.jsx'),
    InformationalAlert: require('./react/alerts/InformationalAlert.jsx'),
    SuccessAlert: require('./react/alerts/SuccessAlert.jsx'),
    WarningAlert: require('./react/alerts/WarningAlert.jsx')
  },
  Buttons: {
    ButtonPrimary: require('./react/buttons/ButtonPrimary.jsx'),
    ButtonSecondary: require('./react/buttons/ButtonSecondary.jsx'),
    ButtonDanger: require('./react/buttons/ButtonDanger.jsx')
  },
  Dropdowns: {
    ComboBox: require('./react/dropdowns/ComboBox.jsx'),
    Dropdown: require('./react/dropdowns/Dropdown.jsx'),
    PopoverMenu: require('./react/dropdowns/PopoverMenu.jsx')
  },
  Input: {
    Checkbox: require('./react/input/Checkbox.jsx'),
    RadioButton: require('./react/input/RadioButton.jsx'),
    RadioButtonGroup: require('./react/input/RadioButtonGroup.jsx'),
    TextField: require('./react/input/TextField.jsx'),
    TextArea: require('./react/input/TextArea.jsx'),
    TextFieldWithDropdown: require('./react/input/TextFieldWithDropdown.jsx'),
    Toggle: require('./react/input/Toggle.jsx')
  },
  Modals: {
    ActionModal: require('./react/modals/ActionModal.jsx'),
    BaseModal: require('./react/modals/BaseModal.jsx')
  },
  Progress: {
    Breadcrumbs: require('./react/progress/Breadcrumbs.jsx'),
    ProgressDots: require('./react/progress/ProgressDots.jsx')
  },
  SortableList: require('./react/lists/SortableList.jsx'),
  Table: require('./react/table/Table.jsx'),
  Tabs: {
    RadioTabs: require('./react/tabs/RadioTabs.jsx'),
    LinkTabs: require('./react/tabs/LinkTabs.jsx')
  },
  wrappers: {
    closeOnClick: require('./react/wrappers/closeOnClick.jsx'),
    keyControlledMenu: require('./react/wrappers/keyControlledMenu.jsx')
  }
};
