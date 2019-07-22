import React, { Component } from 'react';

const RsvpForm = props => {
  return (
    <div>
      <h1>Welcome to Name of Restaurant</h1>
      <h2>Please fill out completely</h2>
      <form className='rsvpForm' onSubmit={props.handleSubmit}>
        <label>Name</label>
        <input
          type='text'
          name='name'
          id='name'
          value={props.formData.name}
          onChange={props.handleChange}
          placeholder='Name'
        />
        <br />
        <label>Phone number</label>
        <input
          type='number'
          name='phone'
          id='phone'
          value={props.formData.phone}
          onChange={props.handleChange}
          placeholder='Phone Number'
        />
        <br />
        <label>Number of adults</label>
        <input
          type='number'
          name='adults'
          id='adults'
          value={props.formData.adults}
          onChange={props.handleChange}
          placeholder='Number of adults in party'
        />
        <label>Number of highchair needed</label>
        <input
          type='number'
          name='highChair'
          id='highChair'
          value={props.formData.highChair}
          onChange={props.handleChange}
          placeholder='How many highchair needed?'
        />
        <label>Number of booster seat needed</label>
        <input
          type='number'
          name='booster'
          id='booster'
          value={props.formData.booster}
          onChange={props.handleChange}
          placeholder='How many booster seat needed?'
        />
        <label>Message for the host</label>
        <input
          type='textarea'
          name='message'
          id='message'
          value={props.formData.message}
          onChange={props.handleChange}
          placeholder='Message...'
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default RsvpForm;
