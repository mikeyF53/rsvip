import React, { Component } from 'react';
import RsvpForm from './components/RsvpForm';
import WaitingList from './components/WaitingList';
import { Route, Link } from 'react-router-dom';

import './App.css';

class App extends Component {


  constructor(props) {
    super(props);

    this.state = {
      submitted: false,
      customerData: [],
      // date: new Date().toLocaleString(),
      formData: {
        name: '',
        phone: '',
        adults: '',
        highChair: 0,
        booster: 0,
        message: '',
        time: new Date().toLocaleTimeString()
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
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
    const {
      name,
      phone,
      adults,
      highChair,
      booster,
      message,
      time
    } = this.state.formData;
    const customerData = {
      name,
      phone,
      adults,
      highChair,
      booster,
      message,
      time
    };
    const customer = JSON.parse(localStorage.getItem('Customer')) || [];
    customer.push(customerData);
    localStorage.setItem('Customer', JSON.stringify(customer)); // storing state in LS
    this.setState({
      submitted: true
    });
    setTimeout(() => {
      this.setState({
        submitted: false,
        formData: {
          name: '',
          phone: '',
          adults: '',
          highChair: 0,
          booster: 0,
          message: '',
          time: new Date().toLocaleTimeString()
        }
      });
    }, 2500);
  }
  componentDidMount() {
    const customerData = JSON.parse(localStorage.getItem('Customer'));
    this.setState({
      customerData
    });
    console.log(customerData);
  } 
  // pageReload() {
  //   alert('hi')
  // }

  render() {
    return (
      <div>
        <Route
          exact
          path='/'
          render={props => (
            <RsvpForm
              {...props}
              date={this.state.date}
              submitted={this.state.submitted}
              formData={this.state.formData}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          )}
        />
        <Route
          exact
          path='/list'
          render={props => (
            <WaitingList
              {...props}
              customerData={this.state.customerData}
              formData={this.state.formData}
            />
          )}
        />
      </div>
    );
  }
}
export default App;
