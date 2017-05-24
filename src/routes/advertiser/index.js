import React from 'react'
import Layout from '../../components/Layout'
import Contact from '../../components/Contact'
import style from './advertiser.css'

export default class Advertiser extends React.Component {
  componentDidMount(prevProps) {
    window.scrollTo(0, 0)
  }

  render () {
    return (
      <Layout>
        <section className={style['banner']}>
          <div className={style['banner-section-container']}>
            <div className={style['banner-image']} />
            <div className={style['banner-description']}>
              <h1 className={style['banner-description-head']}>You are a mobile app<br />or mobile service provider.</h1>
              <p className={style['banner-description-body']}>We deliver users & performance</p>
            </div>
          </div>
        </section>
        <section className={style['contact']}>
          <div className={style['section-container']}>
            <div className={style['flex-box']}>
              <div className={style['flex-description-content-container']}>
                <div className={style['ic-media']} />
                <div className={style['description-wrapper']}>
                  <h3 className={style['contact-header']}>
                    MEDIA BUYERS
                  </h3>
                  <p className={style['description-body']}>
                    At any given time we test 500+ camapigns on
                    our network to evaluate performance and competitiveness.
                    We focus on premium offers for premium media buyers
                  </p>
                </div>
                <div className={style['divider']} />
                <div className={style['ic-network']} />
                <div className={style['description-wrapper']}>
                  <h3 className={style['contact-header']}>
                    AD NETWORKS
                  </h3>
                  <p className={style['description-body']}>
                    We help you fill a 100% of your unsold inventory.
                    Our monetisation on performance allows you to benchmark
                    new traffic sources and find out what they are really worth.
                    Our high ecpm values will help you raise the
                    minimum bids for the media buyers in your network.
                  </p>
                </div>
              </div>
            </div>
            <div className={style['flex-box']}>
              <div className={style['flex-content-container']}>
                <Contact history={this.props.history} partnerType='advertiser' />
              </div>
            </div>
          </div>
        </section>
        <section className={style['benefits']}>
          <div className={style['benefits-section-container']}>
            <div className={style['flex-box']}>
              <div className={style['flex-content-container']}>
                <div className={style['ic-quality']} />
                <h3 className={style['benefits-header']}>QUALITY</h3>
                <p className={style['benefits-description']}>
                  - Key Performance areas can be set by you<br />
                  - Traffic Targeting<br />
                  - Optimisation
                </p>
              </div>
            </div>
            <div className={style['flex-box']}>
              <div className={style['flex-content-container']}>
                <div className={style['ic-technology']} />
                <h3 className={style['benefits-header']}>TECHNOLOGY</h3>
                <p className={style['benefits-description']}>
                  - Real time dashboard<br />
                  - Optimisation as per performance result<br />
                  - Budget Management<br />
                  - Innovation development team at support for special campaigns
                </p>
              </div>
            </div>
            <div className={style['flex-box']}>
              <div className={style['flex-content-container']}>
                <div className={style['ic-quantity']} />
                <h3 className={style['benefits-header']}>QUANTITY</h3>
                <p className={style['benefits-description']}>
                  - All India reach with localisation possible<br />
                  - Wide variety of traffic services<br />
                  - Wide variety of ad formats
                </p>
              </div>
            </div>
            <div className={style['flex-box']}>
              <div className={style['flex-content-container']}>
                <div className={style['ic-support']} />
                <h3 className={style['benefits-header']}>DEDICATED SUPPORT</h3>
                <p className={style['benefits-description']}>
                  -Dedicated account managers for quick connect<br />
                  -Partner with you for optimisation for maximum ROI
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={style['slogan']}>
          <div className={style['section-container']}>
            <h1>
              Collaborate now!<br />
              Our eCPMs are our best performance proof.
            </h1>
          </div>
        </section>
      </Layout>
    )
  }
}
