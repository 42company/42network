import React from 'react'
import style from './Navigation.css'
import { NavLink } from 'react-router-dom'

export default class Footer extends React.Component {
  render() {
    return (
      <div className={style.root} role='navigation'>
        <NavLink className={style.link} exact activeClassName={style['active']} to="/">Home</NavLink>
        <NavLink className={style.link} exact activeClassName={style['active']} to="/affiliate">Affiliates</NavLink>
        <NavLink className={style.link} exact activeClassName={style['active']} to="/advertiser">Advertisers</NavLink>
      </div>
    )
  }
}
