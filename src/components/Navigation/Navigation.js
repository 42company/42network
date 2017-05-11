import React from 'react'
import style from './Navigation.css'
import { Link } from 'react-router-dom'

export default class Footer extends React.Component {
  render() {
    return (
      <div className={style.root} role='navigation'>
        <Link className={style.link} to="/affiliate">affiliate</Link>
        <Link className={style.link} to="/advertiser">advertiser</Link>
      </div>
    )
  }
}
