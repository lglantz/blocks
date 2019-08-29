import React, { useState, useEffect } from 'react';

function useKeyControlledMenu({ ref, menuLength, visible, setVisible }) {
  const [focusIdx, setFocusIdx] = useState(-1);

  const onKeyDown = (e) => {
    if (e.key === 'Tab' && visible) {
      setVisible(false);
    } else if (['ArrowDown', ' '].indexOf(e.key) > -1 && !visible) {
      e.preventDefault(); // TODO: why is this necessary?
      setVisible(true);
    } else {
      if (['ArrowDown', 'ArrowUp', 'Enter', ' '].indexOf(e.key) > -1) e.preventDefault();
      let test = getFocusIndexAfterKeyPress(e.key);
      console.log(test);
      setFocusIdx(test);
    }
  };

  const onKeyUp = (e) => {
    if (['Enter', ' '].indexOf(e.key) > -1) {
      // select the option????
    } else if (e.key === 'Escape') {
      setVisible(false);
    }
  }

  const getFocusIndexAfterKeyPress = (keyName) => {
    if (keyName === 'ArrowDown') return Math.min(focusIdx + 1, menuLength - 1);
    if (keyName === 'ArrowUp') return Math.max(focusIdx - 1, 0);
    // for (let i = 0; i < menuLength; i++) {
    //   const option = this.props.options[i];
    //   if (option.text && option.text[0].toLowerCase() === keyName) return i;
    // }
    return focusIdx;
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener('keydown', onKeyDown);
      ref.current.addEventListener('keyup', onKeyUp);
      // ref is to the li item that contains the dropdown elements
      // search for a focusable child
      // (particularly important for custom elements)
      if (visible) {
        for (let i = 0; i < ref.current.childNodes.length; i++) {
          const child = ref.current.childNodes[i];
          if (typeof child.focus === 'function') {
            child.focus();
            break;
          }
        }
      }
    }

    return () => {
      ref.current.removeEventListener('keydown', onKeyDown);
      ref.current.removeEventListener('keyup', onKeyUp);
    }
  });

  return { focusIdx, setFocusIdx };
}

module.exports = useKeyControlledMenu;
