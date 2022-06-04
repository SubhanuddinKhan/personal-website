import React from 'react'

function About() {
  return (
    <div>
        <div className=" section-separator " id="about">
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
    </div>
  )
}

export default About