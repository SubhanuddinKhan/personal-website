import React from 'react'

function Slider() {
  return (
    <div>
        <section id="home" className="slider-style-5 rn-section-gap pb--110 align-items-center with-particles">
    <div id="particles-js"></div>
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="banner-inner">
                    <div className="thumbnail gradient-border gradient-animation">
                        <img id="border" className="gradient-border" src={process.env.PUBLIC_URL + "/assets/images/logo/main-logo.jpg"} alt="" />
                    </div>
                    <h1>Subhanuddin</h1>
                    {/* <!-- type headline start--> */}
                    <span className="cd-headline clip is-full-width">
                        <span>I am a </span>
                    {/* <!-- ROTATING TEXT --> */}
                    <span className="cd-words-wrapper">
                            <b className="is-visible">React Js Developer.</b>
                            <b className="is-hidden">Front-End Developer.</b>
                            
                        </span>
                    </span>
                    
                    <div className="button-area">
                        <a className="rn-btn" href="#contacts"><span>CONTACT ME</span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default Slider