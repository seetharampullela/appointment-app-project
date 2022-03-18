// Write your code here
import {Component} from 'react'

// import {format} from 'date-fns'

import {v4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {appointments: [], titleInput: '', date: ''}

  changeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  changeDate = event => {
    this.setState({date: event.target.value})
  }

  changeFav = id => {
    this.setState(prevState => ({
      appointments: prevState.appointments.map(each => {
        if (id === each.id) {
          return {...each, isClicked: !each.isClicked}
        }
        return each
      }),
    }))
  }

  onClickStar = () => {
    const {appointments} = this.state
    const filteredAppts = appointments.filter(each => each.isClicked === true)
    this.setState({appointments: filteredAppts})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {titleInput, date} = this.state

    const newItem = {
      id: v4(),
      titleInput,
      date,
      isClicked: false,
    }

    this.setState(prevState => ({
      appointments: [...prevState.appointments, newItem],
      titleInput: '',
      date: '',
    }))
  }

  render() {
    const {appointments, titleInput, date} = this.state

    return (
      <div className="bg-container">
        <div className="inner-container">
          <div>
            <form onSubmit={this.onSubmitForm} className="input-container">
              <h1>Add Appointment </h1>
              <div>
                <label htmlFor="Title">TITLE</label>
                <input
                  type="text"
                  value={titleInput}
                  onChange={this.changeTitle}
                  placeholder="Title"
                  id="Title"
                />
              </div>
              <div>
                <label htmlFor="Date">DATE</label>
                <input
                  type="date"
                  value={date}
                  onChange={this.changeDate}
                  id="Date"
                />
              </div>
              <button type="submit">Add</button>
            </form>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
                className="app-image"
              />
            </div>
          </div>
          <hr className="hori-line" />
          <div>
            <div className="bottom-header">
              <h2>Appointments</h2>
              <button
                type="submit"
                className="star-button"
                onClick={this.onClickStar}
              >
                starred
              </button>
            </div>
            <ul className="list-container">
              {appointments.map(each => (
                <AppointmentItem
                  appointmentItem={each}
                  changeFav={this.changeFav}
                  key={each.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Appointments
