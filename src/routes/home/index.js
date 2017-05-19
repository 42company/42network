import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import style from './home.css'
import introImage from './images/img_intro_4.png'
import skyLine from './images/bottom_skyline.png'

export default class Home extends React.Component {
  componentDidMount(prevProps) {
    window.scrollTo(0, 0)
  }

  render () {
    return (
      <Layout>
        <div className={style['root']}>
          <section className={style['intro']}>
            <div className={style['section-container']}>
              <h1 className={style['intro-header']}>42Network for online mobile performance</h1>
              <div>
                <Link className={style['normal-affiliate-button']} to='/affiliate'>Affiliates</Link>
                <Link className={style['normal-advertiser-button']} to='/advertiser'>Advertisers</Link>
              </div>
            </div>
            <img className={style['intro-image']} src={introImage} width='100%' alt='42network-intro' />
          </section >
          <section className={style['description']}>
            <div className={style['section-container']}>
              <h1 className={style['description-header']}>The Answer to the Ultimate Question of<br />Life, The Universe, and Everything:</h1>
              <div className={style['icon']} />
              <p className={style['description-body']}>
                <b>42Company India Pvt Ltd</b> is a fast growing online media company focussing on mobile entertainment services in India.
                Founded by mobile industry veterans, privately funded, we are an independent, owner-managed company.
                We have a dedicated team of professionals looking at analysing your advertising needs and providing best solutions.
              </p>
            </div>
          </section>
          <section className={style['diagram-bg']}>
            <div className={style['section-container']}>
              <div className={style['diagram']} />
              <div className={style['be-a-partner']}>
                <div className={style['affiliates']}>
                  <div className={style['flex-container']}>
                    <h1 className={style['partner-header']}>Affiliates</h1>
                    <div className={style['partner-description']}>You are publisher,<br />ad network or media buyer. We deliver local monetisation</div>
                    <Link className={style['affiliate-button']} to='/affiliate'>42 for Affiliates</Link>
                  </div>
                </div>
                <div className={style['advertisers']}>
                  <div className={style['flex-container']}>
                    <h1 className={style['partner-header']}>Advertisers</h1>
                    <div className={style['partner-description']}>You are a mobile service provider or app developer. We deliver users, distribution and sales.</div>
                    <Link className={style['advertiser-button']} to='/advertiser'>42 for Advertisers</Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={style['slogan']}>
            <div className={style['section-container']}>
              <h1>We deliver. That’s a promise!</h1>
              <p className={style['slogan-description']}>Collaborate with 42Network and see your business grow</p>
            </div>
          </section>
          <section className={style['partners']}>
            <div className={style['partner-section-container']}>
              <div className={style['advertise-partners-header']}>
                Our Advertising partners
              </div>
              <div className={style['partner-wrapper']}>
                <div className={style['advertise-partner-container']}>
                  <div className={style['ic-dogether']} />
                </div>
                <div className={style['advertise-partner-container']}>
                  <div className={style['ic-myntra']} />
                </div>
                <div className={style['advertise-partner-container']}>
                  <div className={style['ic-flipkart']} />
                </div>
                <div className={style['advertise-partner-container']}>
                  <div className={style['ic-orahi']} />
                </div>
                <div className={style['advertise-partner-container']}>
                  <div className={style['ic-uc']} />
                </div>
                <div className={style['advertise-partner-container']}>
                  <div className={style['ic-abof']} />
                </div>
                <div className={style['advertise-partner-container']}>
                  <div className={style['ic-buyhatke']} />
                </div>
                <div className={style['advertise-partner-container']}>
                  <div className={style['ic-panelstation']} />
                </div>
              </div>
            </div>
            <img className={style['intro-image']} src={skyLine} width='100%' alt='skyline' />
          </section>
        </div>
      </Layout>
    )
  }
}
