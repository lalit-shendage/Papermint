import React from 'react';
import '../style/JobListings.css';
import jobPositions from '../assets/JobData'; 
import Flippy, { FrontSide, BackSide } from 'react-flippy';


const JobListings = () => {
  return (
    <div className='listings bg-body-tertiary'>
      <div className='head'>
        <h2>We're Hiring!!!</h2>
        <br />
        <h3>Open positions</h3>
      </div>
      <div className='parent'>
        {jobPositions.map((position, index) => (
          <div key={index} className='job-card '>
            <Flippy>
            <FrontSide >
            <h2>{position.title}</h2>
            <p>{position.description}</p>
            <button>Apply</button>
            </FrontSide>
            <BackSide >
            <h3>Requirements:</h3>
            <ul>
              {position.requirements.map((requirement, reqIndex) => (
                <li key={reqIndex}>{requirement}</li>
              ))}
            </ul>
            </BackSide>
            </Flippy>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobListings;
