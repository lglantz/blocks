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
    ButtonDanger: require('./dist/buttons/ButtonDanger.js')
  },
  Dropdowns: {
    ComboBox: require('./dist/dropdowns/ComboBox.js'),
    Dropdown: require('./dist/dropdowns/Dropdown.js'),
    PopoverMenu: require('./dist/dropdowns/PopoverMenu.js')
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
  wrappers: {
    closeOnClick: require('./dist/wrappers/closeOnClick.js'),
    keyControlledMenu: require('./dist/wrappers/keyControlledMenu.js')
  }
};

