import React from 'react'
import style from './Footer.css'

export default class Footer extends React.Component {
  render() {
    return (
      <div className={style['root']}>
        <div className={style['container']}>
          (c)2017 <b>42Network</b> All rights reserved.
        </div>
      </div>
    )
  }
}
