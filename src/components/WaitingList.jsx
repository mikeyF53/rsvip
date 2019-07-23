import React, { Component } from 'react';
import RsvpForm from './RsvpForm';

const WaitingList = props => {
  // console.log(props.customerData.name);
  // const customerInfo = JSON.parse(localStorage.getItem('Customer'));
  // console.log(customerInfo[0].name);

  return (
    <div>
      <h1>Waiting List</h1>
      {props.customerData ? (
        props.customerData.map(e => {
          return (
            <ul>
              Name: {e.name}, Phone: {e.phone}, # of adults: {e.adults}, # High-chair: {e.highchair}, # of Booster {e.booster}
            </ul>
          );
        })
      ) : (
        <p>No one waiting...</p>
      )}
    </div>
  );
};

export default WaitingList;
