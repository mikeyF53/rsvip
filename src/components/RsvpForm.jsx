import React, { Component } from 'react';

const RsvpForm = props => {
  const { name, phone, adults, highChair, booster, message } = props.formData;
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
          required
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
          required
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
          required
          value={props.formData.adults}
          onChange={props.handleChange}
          placeholder='Number of adults in party'
        />
        <div className='infants'>
          <h3>Optional</h3>
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
        </div>
        <label>Message for the host</label>
        <input
          type='textarea'
          name='message'
          id='message'
          value={props.formData.message}
          onChange={props.handleChange}
          placeholder='Message...'
        />

        <div className='submit-msg'>
          {props.submitted ? (
            <p>
              Thank you your party has been submitted! Please wait for a
              text/call.
            </p>
          ) : (
            adults ? 
            <div className='info-box'>
              <h3>Please confirm your info below!</h3>
              <p>Name: {name}</p>
              <p>Phone Number: {phone}</p>
              <p>Number of Adults: {adults}</p>
              <p>Number of High-chairs: {highChair}</p>
              <p>Number of Booster: {booster}</p>
              <p>Message: {message}</p>
            </div>
            :
            null
          )}
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default RsvpForm;
