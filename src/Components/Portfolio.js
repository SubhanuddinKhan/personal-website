import React from 'react'

function Portfolio() {
  return (
    <div className="rn-portfolio-area rn-section-gap section-separator" id="portfolio">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true" className="section-title text-center">
                    <span className="subtitle">Visit my portfolio and keep your feedback</span>
                    <h2 className="title">My Portfolio</h2>
                </div>
            </div>
        </div>

        <div className="row row--25 mt--10 mt_md--10 mt_sm--10">
            {/* <!-- Start Single Portfolio --> */}
            <div data-aos="fade-up" data-aos-delay="100" data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
                <div className="rn-portfolio" data-toggle="modal" data-target="#exampleModalCenter">
                    <div className="inner">
                        <div className="thumbnail">
                            <a href="javascript:void(0)">
                                <img src={process.env.PUBLIC_URL + '/assets/images/landing/netflix-clone.png'} alt="Personal Portfolio Images" />
                            </a>
                        </div>
                        <div className="content">
                            <div className="category-info">
                                <div className="category-list">
                                    <a href="javascript:void(0)">Application</a>
                                </div>
                                <div className="meta">
                                    <span><a href="javascript:void(0)"><i className="feather-heart"></i></a>
                                        600</span>
                                </div>
                            </div>
                            <h4 className="title"><a href="javascript:void(0)">Netflix Clone (Live Data) <i
                                        className="feather-arrow-up-right"></i></a></h4>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Single Portfolio -->

            <!-- Start Single Portfolio --> */}
            <div data-aos="fade-up" data-aos-delay="300" data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
                <div className="rn-portfolio" data-toggle="modal" data-target="#whatsappModalCenter">
                    <div className="inner">
                        <div className="thumbnail">
                            <a href="javascript:void(0)">
                                <img src={process.env.PUBLIC_URL + "/assets/images/landing/whatsapp-clone.jpg"} alt="Personal Portfolio Images" />
                            </a>
                        </div>
                        <div className="content">
                            <div className="category-info">
                                <div className="category-list">
                                    <a href="javascript:void(0)">Application</a>
                                </div>
                                <div className="meta">
                                    <span ><a href="javascript:void(0)"><i className="feather-heart"></i></a>
                                        750</span>
                                </div>
                            </div>
                            <h4 className="title"><a href="javascript:void(0)">Whatsapp Clone
                                <i className="feather-arrow-up-right"></i></a></h4>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Single Portfolio --> */}

            {/* <!-- Start Single Portfolio --> */}
            <div data-aos="fade-up" data-aos-delay="500" data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
                <div className="rn-portfolio" data-toggle="modal" data-target="#mernModalCenter">
                    <div className="inner">
                        <div className="thumbnail">
                            <a href="javascript:void(0)">
                                <img src={process.env.PUBLIC_URL + "/assets/images/landing/mern.png"} alt="Personal Portfolio Images" />
                            </a>
                        </div>
                        <div className="content">
                            <div className="category-info">
                                <div className="category-list">
                                    <a href="javascript:void(0)">MERN E-Commerce Simple CRUB App</a>
                                </div>
                                <div className="meta">
                                    <span><a href="javascript:void(0)"><i className="feather-heart"></i></a>
                                        630</span>
                                </div>
                            </div>
                            <h4 className="title"><a href="javascript:void(0)">Simple MERN Ecommerce Basic Store (CRUD Operation)
                                    <i className="feather-arrow-up-right"></i></a></h4>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Single Portfolio --> */}
        </div>
    </div>
</div>
  )
}

export default Portfolio