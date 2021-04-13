import React from 'react';
import Info from '../info/Info';
import Name from '../name/Name';
import Percentage from '../percentage/Percentage';
import Picture from '../picture/Picture';
import Popularity from '../popularity/Popularity';
import Position from '../position/Position';
import Votes from '../votes/Votes';
import css from './candidate.module.css';
import {formatPercentage} from '../../helpers/formatHelpers';

export default function Candidate({
  previousPercentage, 
  previousVote, 
  candidate, 
  position
}) {
  const { id, name, votes, percentage, popularity} = candidate;
  
  const imageSource = `${id}.jpg`;
  return (
    <div className={css.candidate}>
      <Position>{position}</Position>
      <Picture imageSource={imageSource} description={name}/>
      <Info>
        <Name>{name}</Name>
        <Votes value={votes} previous={previousVote}/>
        <Percentage previousPercentage={formatPercentage(previousPercentage)} />
        <Popularity value={popularity}/>
      </Info>
    </div>                 
  );
}
