import React, { Component } from 'react';
import RsvpForm from './RsvpForm';

const WaitingList = props => {
  // console.log(props.customerData.adults);

  return (
    <div>
      <h1 className='waiting-title'>Waiting List</h1>
      <div className='waiting-container'>
        {props.customerData ? (
          props.customerData.map(e => {
            return (
              <div className='customer-info' key={e.time}>
                <p>Checked in: {e.time}</p>
                <p>
                  {e.name} {e.phone} Adults: {e.adults} High-chairs:{' '}
                  {e.highChair} Boosters: {e.booster}
                </p>
                <p>Message: {e.message}</p>
                
                <div className='total-box'>
                    <button>Text</button>
                  <div className='total-num'>
                    {parseInt(e.adults) +
                      parseInt(e.highChair) +
                      parseInt(e.booster)}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>No one waiting...</p>
        )}
      </div>
    </div>
  );
};

export default WaitingList;
