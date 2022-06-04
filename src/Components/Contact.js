import React from 'react'

function Contact() {
  return (
    <div className="rn-contact-area rn-section-gap section-separator" id="contacts">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="section-title text-center">
                    <span className="subtitle">Contact</span>
                    <h2 className="title">Contact With Me</h2>
                </div>
            </div>
        </div>
        <div className="row mt--50 mt_md--40 mt_sm--40 mt-contact-sm">
            <div className="col-lg-5">
                <div className="contact-about-area">
                    <div className="thumbnail">
                        <img src={process.env.PUBLIC_URL + "/assets/images/landing/subhan-banner.png"} alt="contact-img" />
                    </div>
                    <div className="title-area">
                        <h4 className="title">Subhanuddin</h4>
                        <span>Technologies: ReactJS | Redux | React-Bootstrap |
                            React-Material UI | HTML | CSS |
                            Bootstrap | JSON</span>
                    </div>
                    <div className="description">
                        <p>Web devlopment is my passion passion You Dream I Design
                        </p>
                        <span className="phone">Phone: <a href="tel:+923139157019">+92 313 9157019</a></span>
                        <span className="mail">Email: <a href="mailto:subhanuddinkhan@gmail.com">subhanuddinkhan@gmail.com</a></span>
                    </div>
                    <div className="social-area">
                        <div className="name">FIND WITH ME</div>
                        <ul className="social-share d-flex liststyle" >
                        <li className="facebook" ><a href="https://www.facebook.com/subhanuddinkhan.uet"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook" style={{color: "red", marginRight: "8px"}}>
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg></a>
                        </li>
                        <li className="instagram"><a href="https://instagram.com/subhanuddinkhan_"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"  style={{color: "red", marginRight: "8px"}}>
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg></a>
                        </li>
                        <li className="linkedin"><a href="https://www.linkedin.com/in/subhanuddinkhan/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"  style={{color: "red", marginRight: "8px"}}>
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
                                    </path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg></a>
                        </li>

                       
                    </ul>
                    </div>
                </div>
            </div>
            <div data-aos-delay="600" className="col-lg-7 contact-input">
                <div className="contact-form-wrapper">
                    <div className="introduce">
                        <form className="rnt-contact-form rwt-dynamic-form row" id="contact-form" method="POST" action="mail.php">

                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label for="contact-name">Your Name</label>
                                    <input className="form-control form-control-lg" name="contact-name" id="contact-name" type="text" />
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label for="contact-phone">Phone Number</label>
                                    <input className="form-control" name="contact-phone" id="contact-phone" type="text" />
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label for="contact-email">Email</label>
                                    <input className="form-control form-control-sm" id="contact-email" name="contact-email" type="email" />
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label for="subject">subject</label>
                                    <input className="form-control form-control-sm" id="subject" name="subject" type="text" />
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label for="contact-message">Your Message</label>
                                    <textarea name="contact-message" id="contact-message" cols="30" rows="10"></textarea>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <button name="submit" type="submit" id="submit" className="rn-btn">
                                    <span>SEND MESSAGE</span>
                                    <i data-feather="arrow-right"></i>
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Contact