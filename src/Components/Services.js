import React from 'react'

function Services() {
  return (
    
         <div class="rn-service-area rn-section-gap section-separator" id="features">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-title text-center" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true">
                            <span class="subtitle">Speciality</span>
                            <h2 class="title">What I Do</h2>
                        </div>
                    </div>
                </div>
                <div class="row row--25 mt_md--10 mt_sm--10">

                    {/* <!-- Start Single Service --> */}
                    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true" class="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30">
                        <div class="rn-service">
                            <div class="inner">
                                <div class="icon">
                                    <i data-feather="menu"></i>
                                </div>
                                <div class="content">
                                    <h4 class="title"><a href="#">Reactjs Apps Development</a></h4>
                                    <p class="description">3+ years of experience at ReactJS, Redux, Context, React-Bootstrap, React-Materical UI and having a good experience at state management </p>
                                    <a class="read-more-button" href="#"><i class="feather-arrow-right"></i></a>
                                </div>
                            </div>
                            <a class="over-link" href="#"></a>
                        </div>
                    </div>
                    {/* <!-- End SIngle Service -->
                    <!-- Start Single Service --> */}
                    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" data-aos-once="true" class="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30">
                        <div class="rn-service">
                            <div class="inner">
                                <div class="icon">
                                    <i data-feather="book-open"></i>
                                </div>
                                <div class="content">
                                    <h4 class="title"><a href="#">Backend Devlopment</a></h4>
                                    <p class="description"> As a Support to my Front-end application I am managing the backend with NodeJS and developing application through MERN Technology </p>
                                    <a class="read-more-button" href="#"><i class="feather-arrow-right"></i></a>
                                </div>
                            </div>
                            <a class="over-link" href="#"></a>
                        </div>
                    </div>
                    {/* <!-- End SIngle Service -->
                    <!-- Start Single Service --> */}
                    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" class="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30">
                        <div class="rn-service">
                            <div class="inner">
                                <div class="icon">
                                    <i data-feather="tv"></i>
                                </div>
                                <div class="content">
                                    <h4 class="title"><a href="#">Front-End Support </a></h4>
                                    <p class="description">I am professional at HTML5, CSS3 and Bootstrap5 and love to deal with the defferent challenges to provide a stunning application interface </p>
                                    <a class="read-more-button" href="#"><i class="feather-arrow-right"></i></a>
                                </div>
                            </div>
                            <a class="over-link" href="#"></a>
                        </div>
                    </div>
                    {/* <!-- End SIngle Service --> */}

                </div>
            </div>
        </div>
    
  )
}

export default Services