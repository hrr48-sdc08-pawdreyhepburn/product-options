import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';


const whenClickedOutside = (ref, cb) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        cb();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [ref]);
}

export default whenClickedOutside;