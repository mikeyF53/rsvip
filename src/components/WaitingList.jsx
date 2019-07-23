import React, { Component } from 'react';
import RsvpForm from './RsvpForm';

const WaitingList = props => {
  // console.log(props.customerData.name);
  // const customerInfo = JSON.parse(localStorage.getItem('Customer'));
  // console.log(customerInfo[0].name);

  return (
    <div>
      <h1>Waiting List</h1>
      {/* <p>{props.customerData.name}</p> */}
      {props.customerData ? (
        props.customerData.map(e => {
          return (
            <ul>
              {e.name} {e.phone} {e.adults} {e.highchair} {e.booster}
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
