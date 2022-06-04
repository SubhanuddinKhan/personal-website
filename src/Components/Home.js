import React from 'react';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Services from './Services';
import Slider from './Slider';



function Home() {
  return (
    <>
           <main className="page-wrapper-two">

{/* <!-- start slider area --> */}

<Slider />
{/* <!-- start slider area End -->

<!-- Start Service Area --> */}
<About />
{/* <!-- End Service Area  --> */}


{/* <!-- Start Service Area --> */}
       <Services />
        {/* <!-- End Service Area  --> */}





{/* <!-- Start Portfolio Area --> */}
<Portfolio />
{/* <!-- End portfolio Area -->
<!-- Start Resume Area --> */}
<Resume />


{/* <!-- End Resume Area -->




<!-- Start Contact section --> */}

<Contact />
{/* <!-- End Contuct section --> */}

{/* <!-- Start Footer Area --> */}

<Footer />

{/* <!-- End Footer Area -->
<!-- modal area -->
<!-- Modal Portfolio Body area Start --> */}
<div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><i data-feather="x"></i></span>
                </button>
            </div>
            <div className="modal-body">
                <div className="row align-items-center">

                    <div className="col-lg-6">
                        <div className="portfolio-popup-thumbnail">
                            <div className="image">
                                <img className="w-100" src={process.env.PUBLIC_URL + "/assets/images/landing/netflix-clone.png"} alt="slide" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="text-content">
                            <h3>
                                <span>React Redux App</span> Netflix Clone (Live Data)
                            </h3>
                            <p className="mb--30">
                                <ul>
                                    <li>
                                        Technologies: React JS, Redux, Firebase 
                                    </li>
                                    <li>
                                        Responsibility: I have developed the Front-End as well as Backend with a firebase of web application which includes Authentications, Authorizations, Payment Gateways, live IMDB API's with youtube trailers and a lot more other functions
                          
                                    </li>
                                </ul>
                                  </p>
                            <div className="button-group mt--20">
                               
                                <a href="https://netflix-clone-cc3a5.firebaseapp.com/" className="rn-btn">
                                    <span>VIEW PROJECT</span>
                                    <i data-feather="chevron-right"></i>
                                </a>
                            </div>

                        </div>
                        {/* <!-- End of .text-content --> */}
                    </div>
                </div>
                {/* <!-- End of .row Body--> */}
            </div>
        </div>
    </div>
</div>
{/* <!-- End Modal Portfolio area -->


 <!-- Modal Portfolio Body area Start --> */}
 <div className="modal fade" id="whatsappModalCenter" tabIndex="-1" role="dialog" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><i data-feather="x"></i></span>
                </button>
            </div>
            <div className="modal-body">
                <div className="row align-items-center">

                    <div className="col-lg-6">
                        <div className="portfolio-popup-thumbnail">
                            <div className="image">
                                <img className="w-100" src={process.env.PUBLIC_URL + "/assets/images/landing/whatsapp-clone.jpg"} alt="slide" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="text-content">
                            <h3>
                                <span>React | Context App</span> Whatsapp Clone (Firebase DB)
                            </h3>
                            <p className="mb--30">
                                <ul>
                                    <li>
                                        Technologies: React JS, Context API, Firebase 
                                    </li>
                                    <li>
                                        Responsibility: I have developed the Front-End as well as Backend with a firebase of web application which includes Oath Login with google, Authentications, chats, group chats, and a lot more features.
                          
                                    </li>
                                </ul>
                                  </p>
                            <div className="button-group mt--20">
                               
                                <a href="https://whatsapp-clone-a5d2c.web.app/" className="rn-btn">
                                    <span>VIEW PROJECT</span>
                                    <i data-feather="chevron-right"></i>
                                </a>
                            </div>

                        </div>
                        {/* <!-- End of .text-content --> */}
                    </div>
                </div>
                {/* <!-- End of .row Body--> */}
            </div>
        </div>
    </div>
</div>
{/* <!-- End Modal Portfolio area --> */}







 {/* <!-- Modal Portfolio Body area Start --> */}
 <div className="modal fade" id="mernModalCenter" tabIndex="-1" role="dialog" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><i data-feather="x"></i></span>
                </button>
            </div>
            <div className="modal-body">
                <div className="row align-items-center">

                    <div className="col-lg-6">
                        <div className="portfolio-popup-thumbnail">
                            <div className="image">
                                <img className="w-100" src={process.env.PUBLIC_URL + "/assets/images/landing/mern.png"} alt="slide" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="text-content">
                            <h3>
                                <span>ReactJS | NodeJS | ExpressJS | MangoDB</span> E-Commerce CRUD App (MERN App)
                            </h3>
                            <p className="mb--30">
                                <ul>
                                    <li>
                                        Technologies: ReactJS | NodeJS | ExpressJS | MangoDB
                                    </li>
                                    <li>
                                        Responsibility: I have developed the Front-End as well as Backend with a NodeJS express server of web application which includes Authentication, Authorization, view data, update data, delete data and insert data.
                          
                                    </li>
                                </ul>
                                  </p>
                            <div className="button-group mt--20">
                               
                                <a href="https://youtu.be/iZ5MVOVAHJE" className="rn-btn">
                                    <span>VIEW PROJECT</span>
                                    <i data-feather="chevron-right"></i>
                                </a>
                            </div>

                        </div>
                        {/* <!-- End of .text-content --> */}
                    </div>
                </div>
                {/* <!-- End of .row Body--> */}
            </div>
        </div>
    </div>
</div>
{/* <!-- End Modal Portfolio area --> */}




<div className="backto-top">
    <div>
        <i data-feather="arrow-up"></i>
    </div>
</div>


</main>
    </>
  )
}

export default Home