import React from 'react'
import Candidate from '../candidate/Candidate';
import Card from '../card/Card';
import FlipMove from 'react-flip-move';

export default function Candidates({candidates, previousVotes, previousPercentages}) {
  return (
    <div>
      <FlipMove>
        {candidates.map((candidate, index) => {
          const { id } = candidate;

          const previousVotesObject = previousVotes.find((item) =>{
            return item.id === id;
          });

          const previousVote = !!previousVotesObject 
            ? previousVotesObject.votes 
            : 0;

          const previousPercentageObject = previousPercentages.find((item) =>{
            return item.id === id;
          });

          const previousPercentage = !!previousPercentageObject 
            ? previousPercentageObject.percentage 
            : 0;

          return (
            <div key={id}>
              <Card>
                <Candidate 
                  previousPercentage={previousPercentage} 
                  previousVote={previousVote} 
                  candidate={candidate} 
                  position={index + 1}
                />
              </Card>
            </div>                
          );
        })}
      </FlipMove>      
    </div>
  );
}
