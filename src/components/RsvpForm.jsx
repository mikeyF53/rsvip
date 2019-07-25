import React, { Component } from 'react';

const RsvpForm = props => {
  const { name, phone, adults, highChair, booster, message } = props.formData;
  const time = new Date().toLocaleTimeString();
  console.log(props.formData.time);

  return (
    <div className='form-page'>
      <h1>Welcome to Name of Restaurant</h1>
      <h2>Please fill out completely</h2>
      <p className='time'>{time}</p>
      <form className='rsvpForm' onSubmit={props.handleSubmit}>
        {/* <label>Name</label> */}
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
        {/* <label>Phone number</label> */}
        <input
          type='tel'
          name='phone'
          id='phone'
          required
          value={props.formData.phone}
          onChange={props.handleChange}
          placeholder='Phone Number'
        />
        <br />
        {/* <label>Number of adults</label> */}
        <input
          type='number'
          name='adults'
          id='adults'
          required
          value={props.formData.adults}
          onChange={props.handleChange}
          placeholder='Number of adults'
        />
        <div className='infants'>
          <h2>Optional</h2>
          {/* <label># of highchairs</label> */}
          <input
            type='number'
            name='highChair'
            id='highChair'
            value={props.formData.highChair}
            onChange={props.handleChange}
            placeholder='How many high chairs?'
          />
          {/* <label># of booster-seats</label> */}
          <input
            type='number'
            name='booster'
            id='booster'
            value={props.formData.booster}
            onChange={props.handleChange}
            placeholder='How many booster seats?'
          />
        </div>
        {/* <label>Message for the host</label> */}
        <input
          className='message'
          type='textarea'
          name='message'
          id='message'
          value={props.formData.message}
          onChange={props.handleChange}
          placeholder='Message for host...'
        />
        {/* <input
          // type='time'
          name='time'
          id='time'
          value={date}
          onChange={props.handleChange}
        /> */}

        <div className='submit-msg'>
          {props.submitted ? (
            <p>
              Thank you your party has been submitted! Please wait for a
              text/call.
            </p>
          ) : adults ? (
            <div className='info-box'>
              <h3>Please confirm your info below!</h3>
              <p>Name: {name}</p>
              <p>Phone Number: {phone}</p>
              <p>Number of Adults: {adults}</p>
              <p>High-chairs ?: {highChair}</p>
              <p>Booster seats ?: {booster}</p>
              <p>Message: {message}</p>
              <button>Submit</button>
            </div>
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default RsvpForm;
