import React from 'react'
import Layout from '../../components/Layout'
import style from './affiliate.css'

export default class Affiliate extends React.Component {
  render () {
    return (
      <Layout>
        <section className={style['banner']}>
          <div className={style['section-container']}>
            <div className={style['banner-image']} />
            <div className={style['banner-description']}>
              <h1 className={style['banner-description-head']}>You are mobile App or a Mobile Service Provider!</h1>
              <p className={style['banner-description-body']}>We deliver users & performance</p>
            </div>
          </div>
        </section>
        <section className={style['contact']}>
          <div className={style['section-container']}>
            <div className={style['flex-box']}>
              <div className={style['flex-description-content-container']}>
                <div className={style['ic-mobile']} />
                <div className={style['description-wrapper']}>
                  <h3 className={style['contact-header']}>
                    MOBILE APPS
                  </h3>
                  <p className={style['description-body']}>
                    We create value for your app depending on your growth phase.
                    Whether it be installs or more. We aim at bringing you quality users and a clear ROI.
                    Our expert teams help with best solutions for optimisation and most efficient return.
                    Our knowledge of app mechanics helps us target the right users.
                  </p>
                </div>
                <div className={style['divider']} />
                <div className={style['ic-provider']} />
                <div className={style['description-wrapper']}>
                  <h3 className={style['contact-header']}>
                    MOBILE SERVICE PROVIDERS
                  </h3>
                  <p className={style['description-body']}>
                    We believe in delivering performance, be it CPI,CPL,CPM,CPC,CPA.
                    You name it, we perform and deliver. Our traffic is good quality
                    and we tie up with the best publishers to ensure the response
                    is most efficient and as per your desired KPIs. We understand your
                    business needs and partner with you as a network to achieve the
                    best with maximum and best quality reach within performance parameters.
                  </p>
                </div>
              </div>
            </div>
            <div className={style['flex-box']}>
              <div className={style['flex-content-container']}>
                <form>
                  <h3 className={style['contact-header']}>CONTACT US</h3>
                  <label htmlFor='name'>Name</label>
                  <input type='text' id='name' name='name' />
                  <label htmlFor='name'>Company</label>
                  <input type='text' id='company' name='company' />
                  <label htmlFor='name'>Email</label>
                  <input type='text' id='e-mail' name='e-mail' />
                  <label htmlFor='name'>Phone number</label>
                  <input type='text' id='phone-number' name='phone-number' />
                  <label htmlFor='name'>Skype ID</label>
                  <input type='text' id='skype' name='skype' />
                  <input className={style['submit']} type='submit' value='Submit' />
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className={style['benefits']}>
          <div className={style['section-container']}>
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
            <h1>We deliver. That’s a promise!<br />Collaborate with 42Network and see your business grow</h1>
          </div>
        </section>
      </Layout>
    )
  }
}
