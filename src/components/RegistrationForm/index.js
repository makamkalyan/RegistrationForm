// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstBoolean: false,
    lastBoolean: false,
    isSubmit: false,
  }

  onFirstUpdate = event => {
    this.setState({firstName: event.target.value})
  }

  onLastUpdate = event => {
    this.setState({lastName: event.target.value})
  }

  firstNameBlur = () => {
    const {firstName} = this.state
    const newBoolean = firstName.length === 0
    this.setState({firstBoolean: newBoolean})
  }

  lastNameBlur = () => {
    const {lastName} = this.state
    const newBoolean = lastName.length === 0
    this.setState({lastBoolean: newBoolean})
  }

  submitCredentials = event => {
    event.preventDefault()
    const {lastName, firstName} = this.state

    if (lastName.length === 0 && firstName.length === 0) {
      this.setState({isSubmit: false, lastBoolean: true, firstBoolean: true})
    } else if (firstName.length === 0) {
      this.setState({isSubmit: false, firstBoolean: true})
    } else if (lastName.length === 0) {
      this.setState({isSubmit: false, lastBoolean: true})
    } else {
      this.setState({isSubmit: true})
    }
  }

  renderRegistration = () => {
    const {firstName, lastName, firstBoolean, lastBoolean} = this.state
    const firstNameValue = firstBoolean ? 'Required' : ''
    const lastNameValue = lastBoolean ? 'Required' : ''
    return (
      <div className="registration_container">
        <form className="" onSubmit={this.submitCredentials}>
          <div className="input_container">
            <label htmlFor="firstname">FIRST NAME</label>
            <input
              type="text"
              id="firstname"
              onChange={this.onFirstUpdate}
              onBlur={this.firstNameBlur}
              value={firstName}
              placeholder="First name"
            />
            <p className="">{firstNameValue}</p>
          </div>
          <div className="">
            <label htmlFor="lastname">LAST NAME</label>
            <input
              type="text"
              id="lastname"
              onChange={this.onLastUpdate}
              value={lastName}
              onBlur={this.lastNameBlur}
              placeholder="last name"
            />
            <p className="">{lastNameValue}</p>
          </div>
          <button className="submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    )
  }

  renderSuccess = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p>Submitted Successfully</p>
      <button
        className="button"
        type="button"
        onClick={this.submitAnotherResponse}
      >
        Submit Another Response
      </button>
    </div>
  )

  submitAnotherResponse = () => {
    this.setState({
      firstName: '',
      lastName: '',
      firstBoolean: false,
      lastBoolean: false,
      isSubmit: false,
    })
  }

  render() {
    const {isSubmit} = this.state

    const container = isSubmit
      ? this.renderSuccess()
      : this.renderRegistration()

    return (
      <div className="RegistrationForm_container">
        <h1>Registration</h1>
        {container}
      </div>
    )
  }
}
export default RegistrationForm
