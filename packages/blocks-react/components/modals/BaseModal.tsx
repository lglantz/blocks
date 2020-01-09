import * as React from 'react';
import classnames from 'classnames';
import CloseIcon from '../icons/CloseIcon';

const BaseModal: React.FunctionComponent<BaseModalProps> = ({ classes, className, style, isHidden, isClosable, onClose, children }) => {
  if (isHidden) return null;

  return (
    <React.Fragment>
      <div
        className={classnames('blx-modal-overlay', classes.overlay)}
        onClick={onClose}
      />
      <div className={classnames('blx-modal', classes.root, className)} style={style}>
        {
          isClosable && (
            <button className={classnames('blx-modal-close', classes.close)} aria-label="close" onClick={onClose}>
              <CloseIcon />
            </button>
          )
        }
        {children}
      </div>
    </React.Fragment>
  );
};

type BaseModalProps = {
  classes?: {
    root: string,
    close: string,
    overlay: string
  },
  className?: string,
  style?: any,//object,
  isHidden?: boolean,
  isClosable?: boolean,
  onClose?: any,//func,
  children?: any,//node
};

BaseModal.defaultProps = {
  classes: {
    root: '',
    close: '',
    overlay: '',
  },
  className: '',
  style: null,
  isHidden: true,
  isClosable: true,
  onClose: () => { },
  children: null
};

export default BaseModal;
