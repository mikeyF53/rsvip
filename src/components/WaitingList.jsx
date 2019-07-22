import React, { Component } from 'react';
import RsvpForm from './RsvpForm'

const WaitingList = props => {
console.log(props);

  return (
    <div>
      <h1>Waiting List</h1>
      <p>{props.formData.name}</p>
    </div>
  );
};

export default WaitingList;
