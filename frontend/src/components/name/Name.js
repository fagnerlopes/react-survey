import React from 'react';
import css from './name.module.css';

export default function Name({children}) {
  return (
    <div className={css.name}>
      {children}      
    </div>
  );
}
