import * as React from 'react';
import classnames from 'classnames';


const Tabs: React.FunctionComponent<TabsProps> = (props) => {
  const classes = classnames(props.className, {
    'blx-vertical-tabs': props.vertical,
    'blx-horizontal-tabs': !props.vertical,
    'blx-disabled': props.disabled
  });

  const children = React.Children.map(props.children, child => (
    //@ts-ignore
    React.cloneElement(child, {
      tabIndex: props.disabled ? "-1" : undefined
    })
  ));

  return (
    <ul
      style={props.style}
      className={classes}
    >
      {children}
    </ul>
  );
}

type TabsProps = {
  className?: string,
  style?: any,//object,
  disabled?: boolean,
  vertical?: boolean
};

Tabs.defaultProps = {
  className: '',
  style: null,
  disabled: false,
  vertical: false
};

export default Tabs;

