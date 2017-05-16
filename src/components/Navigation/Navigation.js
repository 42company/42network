import React from 'react'
import style from './Navigation.css'
import { Link } from 'react-router-dom'

export default class Footer extends React.Component {
  render() {
    return (
      <div className={style.root} role='navigation'>
        <Link className={style.link} to="/">Home</Link>
        <Link className={style.link} to="/affiliate">Affiliates</Link>
        <Link className={style.link} to="/advertiser">Advertisers</Link>
      </div>
    )
  }
}
