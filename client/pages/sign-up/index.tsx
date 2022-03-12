import React from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import InputButton from '@/buttons/InputButton'
import Link from 'next/link'

const index = () => {
  return (
    <>
      <Header />
      <div className="sign-up">
        <Head>
          <title>Sign Up | Majengoo</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="sign-up-content">
          <div className="sign-up-content-form">
            <form>            
              <h2>Sign Up</h2>
              <div className="sign-up-content-form-input-section">
                <label htmlFor="">
                  Name <span className="required">*</span>{' '}
                </label>
                <input type="text" name="" id="" />
              </div>
              <div className="sign-up-content-form-input-section">
                <label htmlFor="">
                  Surname <span className="required">*</span>
                </label>
                <input type="text" name="" id="" />
              </div>
              <div className="sign-up-content-form-input-section">
                <label htmlFor="">
                  E-mail <span className="required">*</span>
                </label>
                <input type="text" name="" id="" />
              </div>
              <div className="sign-up-content-form-input-section">
                <label htmlFor="">
                  Password <span className="required">*</span>
                </label>
                <input type="password" name="" id="" />
              </div>
              <div className="sign-up-content-form-input-section">
                <label htmlFor="">
                Re-Password <span className="required">*</span>
                </label>
                <input type="password" name="" id="" />
              </div>
              <div className="sign-up-content-form-input-section-buttons">
                <div className='check'>
                <input type="checkbox" name="" />
                <label htmlFor="">Membership Agreement</label>
                </div>
                <div className='check'>
                <input type="checkbox" name="" />
                <label htmlFor="">Text Of Consent</label>
                </div>
              </div>   
              <InputButton message='Sign Up'/>            
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default index