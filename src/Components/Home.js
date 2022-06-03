import React from 'react';



function Home() {
  return (
    <>
           <main className="page-wrapper-two">

{/* <!-- start slider area --> */}
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
{/* <!-- start slider area End -->

<!-- Start Service Area --> */}
<div className=" section-separator " id="features">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="section-title text-center" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true">
                    {/* <!-- <span className="subtitle">Speciality</span> --> */}
                   
                </div>
            </div>

            <div className="col-lg-5">
                <img src={process.env.PUBLIC_URL + "/assets/images/landing/subhan-about2.png"} className="" />
            </div>
            <div className="col-lg-7 mt--10 ">
                <h3 className="title mb-5 about-p"  >About Me</h3>
               
                <p className="mt--35">
                  I am an eager developer who is always seeking to find the opportunity to work in a fun and challenging working environment that will encourage me to improve and learn new and necessary skills as well as to be motivated by the market to do my best for the sake of helping the others and myself to be advanced in the software industry.
                </p>
                <div className="button-area">
                    <a className="rn-btn" href="#resume"><span>Resume/CV</span></a>
                </div>

              </div>

             
        </div>
       
    </div>
</div>
{/* <!-- End Service Area  --> */}





{/* <!-- Start Service Area --> */}
<div className="rn-service-area rn-section-gap section-separator" id="features">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="section-title text-center" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true">
                    <span className="subtitle">Speciality</span>
                    <h2 className="title">What I Do</h2>
                </div>
            </div>
        </div>
        <div className="row row--25 mt_md--10 mt_sm--10">

            {/* <!-- Start Single Service --> */}
            <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30">
                <div className="rn-service">
                    <div className="inner">
                        <div className="icon">
                            <i data-feather="menu"></i>
                        </div>
                        <div className="content">
                            <h4 className="title"><a href="#">Reactjs Apps Development</a></h4>
                            <p className="description">3+ years of experience at ReactJS, Redux, Context, React-Bootstrap, React-Materical UI and having a good experience at state management </p>
                            <a className="read-more-button" href="#"><i className="feather-arrow-right"></i></a>
                        </div>
                    </div>
                    <a className="over-link" href="#"></a>
                </div>
            </div>
            {/* <!-- End SIngle Service -->
            <!-- Start Single Service --> */}
            <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30">
                <div className="rn-service">
                    <div className="inner">
                        <div className="icon">
                            <i data-feather="book-open"></i>
                        </div>
                        <div className="content">
                            <h4 className="title"><a href="#">Backend Devlopment</a></h4>
                            <p className="description"> As a Support to my Front-end application I am managing the backend with NodeJS and developing application through MERN Technology </p>
                            <a className="read-more-button" href="#"><i className="feather-arrow-right"></i></a>
                        </div>
                    </div>
                    <a className="over-link" href="#"></a>
                </div>
            </div>
            {/* <!-- End SIngle Service -->
            <!-- Start Single Service --> */}
            <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30">
                <div className="rn-service">
                    <div className="inner">
                        <div className="icon">
                            <i data-feather="tv"></i>
                        </div>
                        <div className="content">
                            <h4 className="title"><a href="#">Front-End Support </a></h4>
                            <p className="description">I am professional at HTML5, CSS3 and Bootstrap5 and love to deal with the defferent challenges to provide a stunning application interface </p>
                            <a className="read-more-button" href="#"><i className="feather-arrow-right"></i></a>
                        </div>
                    </div>
                    <a className="over-link" href="#"></a>
                </div>
            </div>
            {/* <!-- End SIngle Service --> */}

        </div>
    </div>
</div>
{/* <!-- End Service Area  --> */}





{/* <!-- Start Portfolio Area --> */}
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
{/* <!-- End portfolio Area -->
<!-- Start Resume Area --> */}
<div className="rn-resume-area rn-section-gap section-separator" id="resume">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="section-title text-center">
                    <span className="subtitle">3+ Years of Experience</span>
                    <h2 className="title">My Resume</h2>
                </div>
            </div>
        </div>
        <div className="row mt--45">
            <div className="col-lg-12">
                <ul className="rn-nav-list nav nav-tabs" id="myTabs" role="tablist">
                    <li className="nav-item " style={{flexBasis: "50%"}}>
                        <a className="nav-link active" id="education-tab" data-toggle="tab" href="#education" role="tab" aria-controls="education" aria-selected="true">education</a>
                    </li>
                    <li className="nav-item" style={{flexBasis: "50%"}}>
                        <a className="nav-link" id="professional-tab" data-toggle="tab" href="#professional" role="tab" aria-controls="professional" aria-selected="false">professional
                            Skills</a>
                    </li>
                   
                </ul>
                {/* <!-- Start Tab Content Wrapper  --> */}
                <div className="rn-nav-content tab-content" id="myTabContents">
                    {/* <!-- Start Single Tab  --> */}
                    <div className="tab-pane show active fade single-tab-area" id="education" role="tabpanel" aria-labelledby="education-tab">
                        <div className="personal-experience-inner mt--40">
                            <div className="row">
                                {/* <!-- Start Skill List Area  --> */}
                                <div className="col-lg-6 col-md-12 col-12">
                                    <div className="content">
                                        <span className="subtitle">2004 - 2021</span>
                                        <h4 className="maintitle">Education Quality</h4>
                                        <div className="experience-list">

                                            {/* <!-- Start Single List  --> */}
                                            <div className="resume-single-list">
                                                <div className="inner">
                                                    <div className="heading">
                                                        <div className="title">
                                                            <h4>Bachelor of Science in Computer Science</h4>
                                                            <span>Univeristy Of Engineering & Technology Peshawar (2017 - 2021)</span>
                                                        </div>
                                                        <div className="date-of-time">
                                                            <span>3.37/4.0</span>
                                                        </div>
                                                    </div>
                                                    <p className="description">Completed Bachelor of Science in Computer Science from one of the top universities of the country that teaches the advance concepts of theoratical and technical aspects of Computer Science and Software Engineering.</p>
                                                </div>
                                            </div>
                                            {/* <!-- End Single List  -->

                                            <!-- Start Single List  --> */}
                                            <div className="resume-single-list">
                                                <div className="inner">
                                                    <div className="heading">
                                                        <div className="title">
                                                            <h4> Higher Secondary School (Computer Science)</h4>
                                                            <span>Govt Afzal Khan Lala Post Graduate Degree Collage Matta (2015 - 2017)</span>
                                                        </div>
                                                        <div className="date-of-time">
                                                            <span>827/1100</span>
                                                        </div>
                                                    </div>
                                                    <p className="description">Completed Higher Secondary School Certificate at Computer Science at my home town and awarded with scholorship and with good prize at speed programming.</p>
                                                </div>
                                            </div>
                                            {/* <!-- End Single List  -->

                                            <!-- Start Single List  --> */}
                                            <div className="resume-single-list">
                                                <div className="inner">
                                                    <div className="heading">
                                                        <div className="title">
                                                            <h4>Secondary School Certificate (Science)</h4>
                                                            <span>Hira Secondary School Darmai (2013)</span>
                                                        </div>
                                                        <div className="date-of-time">
                                                            <span>923/1100</span>
                                                        </div>
                                                    </div>
                                                    <p className="description"> Completed the Journey of high school at our hometown from once of the top school and awarded with good prizes at School Competetions like class study competition, sport competition and extra curriculum competitions.</p>
                                                </div>
                                            </div>
                                            {/* <!-- End Single List  --> */}

                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End Skill List Area  -->

                                <!-- Start Skill List Area 2nd  --> */}
                                <div className="col-lg-6 col-md-12 col-12 mt_md--60 mt_sm--60">
                                    <div className="content">
                                        <span className="subtitle">2017 - 2022</span>
                                        <h4 className="maintitle">Job Experience</h4>
                                        <div className="experience-list">

                                            {/* <!-- Start Single List  --> */}
                                            <div className="resume-single-list">
                                                <div className="inner">
                                                    <div className="heading">
                                                        <div className="title">
                                                            <h4>Senior Front-End Developer (ReactJS)</h4>
                                                            <span>KarakoramX Technologies Pvt Ltd Peshawar Pakistan (2019 - 2022)</span>
                                                        </div>
                                                        <div className="date-of-time">
                                                            <span>Developer</span>
                                                        </div>
                                                    </div>
                                                    <p className="description">I am a Senior Web Developer at KarakoramX Technologies and is responsible for the Front-End web Applicaiton Devlopment at ReactJS with Context,React Bootstrap and Material UI.</p>
                                                </div>
                                            </div>
                                            {/* <!-- End Single List  -->

                                            <!-- Start Single List  --> */}
                                            <div className="resume-single-list">
                                                <div className="inner">
                                                    <div className="heading">
                                                        <div className="title">
                                                            <h4>Senior Web Application Developer</h4>
                                                            <span>SoftHat IT Solution Pvt Ltd Peshawar, Pakistan (2018 - 2019)</span>
                                                        </div>
                                                        <div className="date-of-time">
                                                            <span>Full Stack</span>
                                                        </div>
                                                    </div>
                                                    <p className="description">I was Senior Web Applicaiton Developer at SoftHat IT Solution and was responsible for the front-end (ReactJs) as well as backend with PHP and MySQL Database.</p>
                                                </div>
                                            </div>
                                            {/* <!-- End Single List  -->

                                            <!-- Start Single List  --> */}
                                            <div className="resume-single-list">
                                                <div className="inner">
                                                    <div className="heading">
                                                        <div className="title">
                                                            <h4>Internship at Web Apps Development</h4>
                                                            <span>KarakoramX Technologies Pvt Ltd Peshwar Pakistan (2017 -
                                                        2018)</span>
                                                        </div>
                                                        <div className="date-of-time">
                                                            <span>5.00/5</span>
                                                        </div>
                                                    </div>
                                                    <p className="description">Got Internship at 2017 and I completed my internship at Web Apps Development like HTML, CSS, Bootstrap, Reactjs and PHP with </p>
                                                </div>
                                            </div>
                                            {/* <!-- End Single List  --> */}

                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End Skill List Area  --> */}
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Single Tab  -->

                    <!-- Start Single Tab  --> */}
                    <div className="tab-pane fade " id="professional" role="tabpanel" aria-labelledby="professional-tab">
                        <div className="personal-experience-inner mt--40">
                            <div className="row row--40">

                                {/* <!-- Start Single Progressbar  --> */}
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="progress-wrapper">
                                        <div className="content">
                                            <span className="subtitle">Features</span>
                                            <h4 className="maintitle">ReactJS Skills</h4>
                                            {/* <!-- Start Single Progress Charts --> */}
                                            <div className="progress-charts">
                                                <h6 className="heading heading-h6">ReactJS</h6>
                                                <div className="progress">
                                                    <div className="progress-bar wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar"  style={{width: "100%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span
                                                    className="percent-label">100%</span></div>
                                                </div>
                                            </div>
                                            {/* <!-- End Single Progress Charts -->

                                            <!-- Start Single Progress Charts --> */}
                                            <div className="progress-charts">
                                                <h6 className="heading heading-h6">Redux | Context</h6>
                                                <div className="progress">
                                                    <div className="progress-bar wow fadeInLeft" data-wow-duration="0.6s" data-wow-delay=".4s" role="progressbar"  style={{width: "100%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span
                                                    className="percent-label">100%</span></div>
                                                </div>
                                            </div>
                                            {/* <!-- End Single Progress Charts -->

                                            <!-- Start Single Progress Charts --> */}
                                            <div className="progress-charts">
                                                <h6 className="heading heading-h6">React-Bootstrap | Bootstrap5</h6>
                                                <div className="progress">
                                                    <div className="progress-bar wow fadeInLeft" data-wow-duration="0.7s" data-wow-delay=".5s" role="progressbar"  style={{width: "100%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span
                                                    className="percent-label">100%</span></div>
                                                </div>
                                            </div>
                                            {/* <!-- End Single Progress Charts -->

                                            <!-- Start Single Progress Charts --> */}
                                            <div className="progress-charts">
                                                <h6 className="heading heading-h6">React-Material UI</h6>
                                                <div className="progress">
                                                    <div className="progress-bar wow fadeInLeft" data-wow-duration="0.8s" data-wow-delay=".6s" role="progressbar"  style={{width: "100%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span
                                                    className="percent-label">100%</span></div>
                                                </div>
                                            </div>
                                            {/* <!-- End Single Progress Charts -->

                                            <!-- Start Single Progress Charts --> */}
                                            <div className="progress-charts">
                                                <h6 className="heading heading-h6">HTML | CSS</h6>
                                                <div className="progress">
                                                    <div className="progress-bar wow fadeInLeft" data-wow-duration="0.9s" data-wow-delay=".7s" role="progressbar"  style={{width: "100%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span
                                                    className="percent-label">100%</span></div>
                                                </div>
                                            </div>
                                            {/* <!-- End Single Progress Charts --> */}

                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End Single Progressbar  -->

                                <!-- Start Single Progressbar  --> */}
                                <div className="col-lg-6 col-md-6 col-12 mt_sm--60">
                                    <div className="progress-wrapper">
                                        <div className="content">
                                            <span className="subtitle">Features</span>
                                            <h4 className="maintitle">Backend Support Skills</h4>
                                            {/* <!-- Start Single Progress Charts --> */}
                                            <div className="progress-charts">
                                                <h6 className="heading heading-h6">NodeJS</h6>
                                                <div className="progress">
                                                    <div className="progress-bar wow fadeInLeft" data-wow-duration="0.6s" data-wow-delay=".4s" role="progressbar" style={{width: "100%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span
                                                    className="percent-label">100%</span></div>
                                                </div>
                                            </div>
                                            </div>
                                            {/* <!-- End Single Progress Charts -->

                                            <!-- Start Single Progress Charts --> */}
                                            <div className="progress-charts">
                                                <h6 className="heading heading-h6">ExpressJS</h6>
                                                <div className="progress">
                                                    <div className="progress-bar wow fadeInLeft" data-wow-duration="0.6s" data-wow-delay=".4s" role="progressbar" style={{width: "100%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span
                                                    className="percent-label">100%</span></div>
                                                </div>
                                            </div>
                                            {/* <!-- End Single Progress Charts -->

                                            <!-- Start Single Progress Charts --> */}
                                            <div className="progress-charts">
                                                <h6 className="heading heading-h6">MangoDB</h6>
                                                <div className="progress">
                                                    <div className="progress-bar wow fadeInLeft" data-wow-duration="0.7s" data-wow-delay=".5s" role="progressbar" style={{width: "100%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span
                                                    className="percent-label">100%</span></div>
                                                </div>
                                            </div>
                                            {/* <!-- End Single Progress Charts -->

                                            <!-- Start Single Progress Charts --> */}
                                            <div className="progress-charts">
                                                <h6 className="heading heading-h6">JSON </h6>
                                                <div className="progress">
                                                    <div className="progress-bar wow fadeInLeft" data-wow-duration="0.8s" data-wow-delay=".6s" role="progressbar" style={{width: "100%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span
                                                    className="percent-label">100%</span></div>
                                                </div>
                                            </div>
                                            {/* <!-- End Single Progress Charts --> */}

                                           

                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End Single Progressbar  --> */}

                            </div>
                        </div>
                    </div>
                    {/* <!-- End Single Tab  --> */}

                  

                    
                </div>
            </div>
        </div>
    </div>


{/* <!-- End Resume Area -->




<!-- Start Contact section --> */}

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
                        <p>I am an eager developer who is always seeking to find the opportunity to work in a fun and challenging working environment that will encourage me to improve and learn new and necessary skills as well as to be motivated by the market to do my best for the sake of helping the others and myself to be advanced in the software industry.
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
{/* <!-- End Contuct section --> */}

{/* <!-- Start Footer Area --> */}
<div className="rn-footer-area  section-separator">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="footer-area text-center">
                   
                    <p className="description ">© 2022. All rights reserved by <a target="_blank" href="#">Subhanuddin.</a></p>
                </div>
            </div>
        </div>
    </div>
</div>
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









{/* <!-- Modal Blog Body area Start --> */}
<div className="modal fade" id="exampleModalCenters" tabIndex="-1" role="dialog" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-news" role="document">
        <div className="modal-content">

            <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><i data-feather="x"></i></span>
                </button>
            </div>

            {/* <!-- End of .modal-header --> */}

            

            <div className="modal-body">
                <img src={process.env.PUBLIC_URL + "/assets/images/blog/blog-big-01.jpg"} alt="news modal" className="img-fluid modal-feat-img" />
                <div className="news-details">
                    <span className="date">2 May, 2021</span>
                    <h2 className="title">Digital Marketo to Their New Office.</h2>
                    <p>Nobis eleifend option congue nihil imperdiet doming id quod mazim placerat
                        facer
                        possim assum.
                        Typi non
                        habent claritatem insitam; est usus legentis in iis qui facit eorum
                        claritatem.
                        Investigationes
                        demonstraverunt
                        lectores legere me lius quod ii legunt saepius. Claritas est etiam processus
                        dynamicus, qui
                        sequitur
                        mutationem consuetudium lectorum.</p>
                    <h4>Nobis eleifend option conguenes.</h4>
                    <p>Mauris tempor, orci id pellentesque convallis, massa mi congue eros, sed
                        posuere
                        massa nunc quis
                        dui.
                        Integer ornare varius mi, in vehicula orci scelerisque sed. Fusce a massa
                        nisi.
                        Curabitur sit
                        amet
                        suscipit nisl. Sed eget nisl laoreet, suscipit enim nec, viverra eros. Nunc
                        imperdiet risus
                        leo,
                        in rutrum erat dignissim id.</p>
                    <p>Ut rhoncus vestibulum facilisis. Duis et lorem vitae ligula cursus venenatis.
                        Class aptent
                        taciti sociosqu
                        ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc vitae
                        nisi
                        tortor. Morbi
                        leo
                        nulla, posuere vel lectus a, egestas posuere lacus. Fusce eleifend hendrerit
                        bibendum. Morbi
                        nec
                        efficitur ex.</p>
                    <h4>Mauris tempor, orci id pellentesque.</h4>
                    <p>Nulla non ligula vel nisi blandit egestas vel eget leo. Praesent fringilla
                        dapibus dignissim.
                        Pellentesque
                        quis quam enim. Vestibulum ultrices, leo id suscipit efficitur, odio lorem
                        rhoncus dolor, a
                        facilisis
                        neque mi ut ex. Quisque tempor urna a nisi pretium, a pretium massa
                        tristique.
                        Nullam in
                        aliquam
                        diam. Maecenas at nibh gravida, ornare eros non, commodo ligula. Sed
                        efficitur
                        sollicitudin
                        auctor.
                        Quisque nec imperdiet purus, in ornare odio. Quisque odio felis, vestibulum
                        et.</p>
                </div>

                {/* <!-- Comment Section Area Start --> */}
                <div className="comment-inner">
                    <h3 className="title mb--40 mt--50">Leave a Reply</h3>
                    <form action="#">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-12">
                                <div className="rnform-group"><input type="text" placeholder="Name" />
                                </div>
                                <div className="rnform-group"><input type="email" placeholder="Email" />
                                </div>
                                <div className="rnform-group"><input type="text" placeholder="Website" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-12">
                                <div className="rnform-group">
                                    <textarea placeholder="Comment"></textarea>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <a className="rn-btn" href="#"><span>SUBMIT NOW</span></a>
                            </div>
                        </div>
                    </form>
                </div>
                {/* <!-- Comment Section End --> */}
            </div>
            {/* <!-- End of .modal-body --> */}
        </div>
    </div>
</div>
{/* <!-- End Modal Blog area -->
<!-- modal area End --> */}


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