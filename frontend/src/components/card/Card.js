import React from 'react';
import css from './card.module.css';

export default function Card({children}) {
  return <div className="card">{children}</div>;
}