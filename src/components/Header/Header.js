import React from 'react'
import style from './Header.css'
import Navigation from '../Navigation'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
  render() {
    return (
      <div className={style.root}>
        <div className={style.container}>
          <Navigation />
          <Link className={style.logo} to='/'>
            <div className={style.logo_image} />
          </Link>
        </div>
      </div>
    )
  }
}
