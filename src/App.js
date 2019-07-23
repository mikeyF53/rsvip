import React, { Component } from 'react';
import RsvpForm from './components/RsvpForm';
import WaitingList from './components/WaitingList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerData: [],
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

  handleSubmit(e) {
    e.preventDefault();
    const customerData = {
      name: this.state.formData.name,
      phone: this.state.formData.phone,
      adults: this.state.formData.adults,
      highChair: this.state.formData.highChair,
      booster: this.state.formData.booster,
      message: this.state.formData.message
    };
    const customer = JSON.parse(localStorage.getItem('Customer')) || [];
    customer.push(customerData);
    localStorage.setItem('Customer', JSON.stringify(customer)); // storing state in LS
  }
  componentDidMount() {
    const customerData = JSON.parse(localStorage.getItem('Customer'));
    this.setState({
      customerData
    });
    console.log(customerData);
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
          customerData={this.state.customerData}
          formData={this.state.formData}
        />
      </div>
    );
  }
}
export default App;
