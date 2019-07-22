import React, { Component } from 'react';
import RsvpForm from './RsvpForm';

const WaitingList = props => {
  // console.log(props);
  const customerInfo = JSON.parse(localStorage.getItem('customer'));
  return (
    <div>
      <h1>Waiting List</h1>
      <div>
        {customerInfo.name}
      </div>
    </div>
  );
};

export default WaitingList;
