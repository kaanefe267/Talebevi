import React, { Fragment } from 'react'
import Layout from '@/layout/Layout'
import Image from 'next/image'
import InputButton from '@/components/Buttons/InputButton'
import { IoLocationSharp } from 'react-icons/io5'
import { BsFillTelephoneFill, BsShareFill } from 'react-icons/bs'
import { GrFacebookOption, GrTwitter, GrInstagram } from 'react-icons/gr'

const index = () => {
  return (
    <Fragment>
      <Layout title="Contact">
        <div className="contact">
          <div className="contact-content">
            <div className="left-content">
              <h2 className="title">Get in Touch</h2>
              <p>Borem ipsum dolor sit amet conse ctetur adipisicing elit sed do eiusmod Eorem ipsum dolor sit amet conse ctetur.</p>
              <div className="widget">
                <div className="widget-information">
                  <IoLocationSharp className="icons" />
                  <div className="widget-text">
                    <h3>Location</h3>
                    <h2>131 Martens Place, Alexandra Hills, Australia.</h2>
                  </div>
                </div>
              </div>
              <div className="widget">
                <div className="widget-information">
                  <BsFillTelephoneFill className="icons" />
                  <div className="widget-text">
                    <h3>Call</h3>
                    <h2>+86 21 6137 9292</h2>
                  </div>
                </div>
              </div>
              <div className="widget">
                <div className="widget-information">
                  <BsShareFill className="icons" />
                  <div className="widget-text">
                    <h3>Follow Us On</h3>
                    <div className="social-media-icons">
                      <GrFacebookOption className="icon" />
                      <GrTwitter className="icon" />
                      <GrInstagram className="icon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-content">
              <div className="right-content-text">
                <h2>Quick Contact</h2>
                <p>Borem ipsum dolor sit amet conse ctetur adipisicing elit sed do eiusmod Eorem ipsum dolor sit amet conse ctetur.</p>
              </div>
              <div className="right-content-form">
                <form>
                  <div className="right-content-form-section">
                    <label htmlFor="">Name *</label>
                    <input type="text" />
                  </div>
                  <div className="right-content-form-section">
                    <label htmlFor="">Phone *</label>
                    <input type="text" />
                  </div>
                </form>
                <div className="right-content-form-section textarea-section">
                  <label htmlFor="">Comments *</label>
                  <textarea rows={5} cols={40}></textarea>
                </div>
                <InputButton message="SEND MESSAGE" />
              </div>
            </div>
          </div>
        </div>
        <div className="contact-image">
          <div className="contact-image-see">
            <Image src="/contact-world-image.png" width={1200} height={500} alt="" />
          </div>
        </div>
      </Layout>
    </Fragment>
  )
}

export default index
