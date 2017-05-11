import React from 'react'
import Layout from '../../components/Layout'
import style from './home.css'

export default class Home extends React.Component {
  render () {
    return (
      <Layout>
        <div className={style['root']}>
          <section className={style['banner']}>
            <div>
              <h1 className={style['banner-header']}>42network for online mobile performance</h1>
              <div>
                <button className={style['normal-affiliate-button']}>Affiliate</button>
                <button className={style['normal-advertiser-button']}>Advertiser</button>
              </div>
              <h1 className={style['description-header']}>The Answer to the Ultimate Question of Life, The Universe, and Everything : 42</h1>
              <p className={style['description']}>
                42Company India Pvt Ltd is a fast growing online media company focussing on mobile entertainment services in India.
                Founded by mobile industry veterans, privately funded, we are an independent, owner-managed company.
                We have a dedicated team of professionals looking at analysing your advertising needs and providing best solutions.
              </p>
            </div>
          </section>
          <section className={style['diagram-bg']}>
            <div className={style['diagram']} />
          </section>
          <section className={style['slogan']}>
            <h1>We deliver. That’s a promise!</h1>
            <p>Collaborate with 42Network and see your business grow</p>
          </section>
          <section className={style['partners']}>
            <div className={style['partners-header']}>
              Our Advertising partners
            </div>
            <div className={style['partners-header']}>
              Our Publisher partners
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}
