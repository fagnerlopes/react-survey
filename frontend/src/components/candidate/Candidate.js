import React from 'react';
import Info from '../info/Info';
import Name from '../name/Name';
import Percentage from '../percentage/Percentage';
import Picture from '../picture/Picture';
import Position from '../position/Position';
import Votes from '../votes/Votes';
import css from './candidate.module.css';

export default function Candidate({candidate, position}) {
  const { id, name, votes, percentage} = candidate;
  const imageSource = `${id}.jpg`;
  return (
    <div className="container">
      <div className={css.candidate}>
        <Position>{position}</Position>
        <Picture imageSource={imageSource} description={name}/>
        <Info>
          <Name>{name}</Name>
          <Votes>{votes}</Votes>
          <Percentage>{percentage}</Percentage>
        </Info>
      </div>                 
    </div>
  );
}
