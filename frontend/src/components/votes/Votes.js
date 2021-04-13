import React from 'react';
import css from './votes.module.css';
import formatNumber from '../helpers/formatHelpers.js';

export default function Votes({children}) {
  return (
    <div className={css.votes}>
      {formatNumber(children)}      
    </div>
  )
}
