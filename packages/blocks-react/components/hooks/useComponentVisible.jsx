import React, { useState, useEffect } from 'react';

function useComponentVisible({ ref, initiallyVisible, afterCloseOnClick }) {
  const [visible, setVisible] = useState(!!initiallyVisible);

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setVisible(false);
    }
  }

  useEffect(() => {
    if (visible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      if (typeof afterCloseOnClick === 'function') afterCloseOnClick();
      document.removeEventListener('mousedown', handleClickOutside);
    }
  });

  return { visible, setVisible };
}

module.exports = useComponentVisible;
