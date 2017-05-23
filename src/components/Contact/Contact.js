import React from 'react'
import update from 'immutability-helper'
import style from './Contact.css'
import tableify from 'tableify'

export default class Contact extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      formData: {}
    }
  }

  handleChange (event) {
    let newState = update(this.state, { formData: { [event.target.name]: { $set: event.target.value } } })

    this.setState(newState)
  }

  handleSubmit (e) {
    e.preventDefault()

    const alertMessage = 'Something goes wrong please send information to contact@42network.in'
    fetch('/contact', {
      method: 'POST',
      body: JSON.stringify({ html: tableify(this.state.formData), type: this.props.partnerType}),
      headers: {
        'CONTENT-TYPE': 'application/json'
      }
    }).then((res) => {
      return res.json()
    }).then((result) => {
      result[0].status === 'sent' ? this.props.history.push('/sent', { sent: true }) : alert(alertMessage)
    }).catch((error) => {
      alert(alertMessage)
    })
  }

  render() {
    const { partnerType } = this.props
    return (
      <form>
        <h3 className={style[`${partnerType}-contact-header`]}>CONTACT US</h3>
        <label className={style['label']} htmlFor='name'>Name</label>
        <input className={style['input']} type='text' onChange={this.handleChange.bind(this)} id='name' name='name' />
        <label className={style['label']} htmlFor='company'>Company</label>
        <input className={style['input']} type='text' onChange={this.handleChange.bind(this)} id='company' name='company' />
        <label className={style['label']} htmlFor='e-mail'>Email</label>
        <input className={style['input']} type='text' onChange={this.handleChange.bind(this)} id='e-mail' name='e-mail' />
        <label className={style['label']} htmlFor='phone-number'>Phone number</label>
        <input className={style['input']} type='text' onChange={this.handleChange.bind(this)} id='phone-number' name='phone-number' />
        <label className={style['label']} htmlFor='skype'>Skype ID</label>
        <input className={style['input']} type='text' onChange={this.handleChange.bind(this)} id='skype' name='skype' />
        <label className={style['label']} htmlFor='message'>Message</label>
        <textarea className={style['input']} type='text' onChange={this.handleChange.bind(this)} id='message' name='message' />
        <button className={style[`${partnerType}-submit`]} type='submit' value='Submit' onClick={this.handleSubmit.bind(this)}>Submit</button>
      </form>
    )
  }
}
