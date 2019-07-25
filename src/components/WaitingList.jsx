import React, { Component } from 'react';
import RsvpForm from './RsvpForm';

const WaitingList = props => {
  return (
    <div className='waiting-list'>
      <h1>Waiting List</h1>
      {props.customerData ? (
        props.customerData.map(e => {
          return (
            <div className='customer-info' key={e.time}>
              Checked in at: {e.time} Name: {e.name}, Phone: {e.phone}, # of
              adults: {e.adults}, # High-chair: {e.highchair}, # of Booster{' '}
              {e.booster}
            </div>
          );
        })
      ) : (
        <p>No one waiting...</p>
      )}
    </div>
  );
};

export default WaitingList;
