import React from 'react';
const STARS = {
  filled: '★',
  empty: '☆'
}

const MAX_STARS = 10;

export default function Popularity({value}) {
  const fullStars = STARS.filled.repeat(value);
  const emptyStars = STARS.empty.repeat(MAX_STARS - value);
  return (
    
    <div style={{color: '#f1c40f', fontSize: "1.5rem"}}>
      {fullStars}  
      {emptyStars}          
    </div>
  );
}
