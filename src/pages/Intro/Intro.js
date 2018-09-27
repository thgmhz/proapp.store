import React from 'react'
import './Intro.css'
import { withRouter } from "react-router-dom";

const Intro = withRouter(
  ({ history }) => {

    setTimeout(() => {
      history.push('/home')
    }, 10500)

    return (
      <section className="Intro">
        <div className="background"></div>
        <div className="container">
          <div className="text t1">
            <span>ProApp Store</span>
            <span>loves <strong>PWA</strong>
              <svg className="heart" viewBox="0 0 32 29.6">
                <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2 c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"></path>
              </svg>
            </span>
          </div>
          <div className="text t2">
            <span>Progressive</span>
            <span>Web <strong>Apps</strong></span>
          </div>
          <div className="text t3">
            <span><strong>No</strong> need</span>
            <span>to <strong>download</strong></span>
          </div>
          <div className="text t4">
            <span>Just add</span>
            <span>to your</span>
            <span><strong>Home Screen</strong></span>
          </div>
          <div className="text t5">
            <span><strong>Enjoy</strong> it :)</span>
          </div>
        </div>
      </section>
    )
  }
)

export default Intro

