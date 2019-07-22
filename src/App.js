import React, { Component } from 'react';
import RsvpForm from './components/RsvpForm';
import WaitingList from './components/WaitingList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  render() {
    return (
      <div>
        <RsvpForm
          formData={this.state.formData}
          handleChange={this.handleChange}
        />
        <WaitingList
          formData={this.state.formData}
          />
      </div>
    );
  }
}
export default App;
