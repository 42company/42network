import React from 'react'
import update from 'immutability-helper'
import style from './Contact.css'
import tableify from 'tableify'
import { Mandrill } from 'mandrill-api'

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

    const mandrillClient = new Mandrill(process.env.MANDRILL_API_KEY)
    const message = {
      'html': tableify(this.state.formData),
      'from_email': process.env.MANDRILL_ACCOUNT,
      'to': [{'email': 'contact@42network.in'}]
    }
    const alertMessage = 'Something goes wrong please send information to contact@42network.in'

    mandrillClient.messages.send({ "message": message }, (result) => {
      result[0].status === 'sent' ? this.props.history.push('/sent', { sent: true }) : alert(alertMessage)
    }, (error) => {
      alert(alertMessage)
    })
  }

  render() {
    return (
      <form>
        <h3 className={style['contact-header']}>CONTACT US</h3>
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
        <button className={style['submit']} type='submit' value='Submit' onClick={this.handleSubmit.bind(this)}>Submit</button>
      </form>
    )
  }
}
