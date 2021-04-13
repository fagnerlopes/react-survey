import React from 'react'
import Candidate from '../candidate/Candidate';
import Card from '../card/Card';

export default function Candidates({candidates}) {
  return (
    <div>
      {candidates.map((candidate, index) => {
        const { id } = candidate;
          return (
              <Card key={id}>
                <Candidate candidate={candidate} position={index + 1}/>
              </Card>
            );
        })};      
    </div>
  );
}
