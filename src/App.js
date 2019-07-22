import React, { Component } from 'react';
import RsvpForm from './components/RsvpForm';
import WaitingList from './components/WaitingList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // customerData: [],
      formData: {
        name: '',
        phone: '',
        adults: '',
        highChair: '',
        booster: '',
        message: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }));
  }
  // When submitted it stores in state in the INFO object
  handleSubmit(e) {
    e.preventDefault()
    const customer = {
      name: this.state.formData.name,
      phone: this.state.formData.phone,
      adults: this.state.formData.adults,
      highChair: this.state.formData.highChair,
      booster: this.state.formData.booster,
      message: this.state.formData.message,
    }
    const oldItems = JSON.parse(localStorage.getItem('customer')) || [];
    oldItems.push(customer);
    localStorage.setItem('customer',JSON.stringify(oldItems));// storing state in LS
    // console.log(oldItems.forEach(e => {console.log(e.name)}));
    
  }

  render() {
    return (
      <div>
        <RsvpForm
          formData={this.state.formData}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <WaitingList
          formData={this.state.formData}
          />
      </div>
    );
  }
}
export default App;
