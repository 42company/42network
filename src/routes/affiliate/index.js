import React from 'react'
import Layout from '../../components/Layout'
import style from './affiliate.css'

export default class Affiliate extends React.Component {
  render () {
    return (
      <Layout>
        <section className={style['banner']}>
          <div className={style['banner-image']} />
          <div className={style['banner-description']}>
            <div className={style['banner-description-head']}>You are mobile publisher,ad network or media buyer!</div>
            <div className={style['banner-description-body']}>We help you monetise your traffic!</div>
          </div>
        </section>
        <section className={style['contact']}>
          <div>
          </div>
        </section>
        <section className={style['benefits']}>
          <div>
          </div>
        </section>
        <section className={style['slogan']}>
          <div>
          </div>
        </section>
      </Layout>
    )
  }
}
