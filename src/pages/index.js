import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Subscribe from '../components/Subscribe';
import Header from '../components/Header';
import Video from '../components/Video';

import spray from '../assets/images/body_image1-min.jpg';
import bodyImage1 from '../assets/images/simply_water.png';
import bodyImage2 from '../assets/images/certification.png';
import bodyImage3 from '../assets/images/body_image3-min.png';

import UvIcon from '../assets/icons/uv-protection.svg';
import CleanIcon from '../assets/icons/clean.svg';
import HealthCanadaIcon from '../assets/icons/health-canada.svg';
import DisinfectantIcon from '../assets/icons/disinfectant.svg';
import CallIcon from '../assets/icons/call.svg';
import CalendarIcon from '../assets/icons/calendar.svg';
import SmileIcon from '../assets/icons/smile.svg';

import logo from '../assets/images/logo.png';


const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">{config.heading}</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
            {config.subHeading}
          </h2>
          <div className="masthead-buttons">
            <Scroll type="id" element="about">
              <a href="#about" className="masthead-button btn btn-primary">
                Learn More
              </a>
            </Scroll>
            <Scroll type="id" element="signup">
              <a href="#signup" className="masthead-button btn btn-primary">
                Contact Us
              </a>
            </Scroll>
          </div>
        </div>
      </div>
    </header>

    <section id="about" className="about-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">Protect yourself from COVID19</h2>
            <p className="text-white-50">
              VBP Sanitizing eliminates 99.99% of virus, bacteria, and germs. Non-toxic and lab-proven, we guarantee your safety and health.
            </p>
          </div>
        </div>
        <div className="row descriptions">
          <div className="col-md-3 col-sm-12">
            <UvIcon className="descriptionIcon" />
            <p className="descriptionText">UV light Sterlization of high touch objects</p>
          </div>
          <div className="col-md-3 col-sm-12">
            <CleanIcon className="descriptionIcon" />
            <p className="descriptionText">Hospital-grade and food safe</p>
          </div>
          <div className="col-md-3 col-sm-12">
            <HealthCanadaIcon className="descriptionIcon" />
            <p className="descriptionText">Health Canada and Public Health Ontario guided Prodedure</p>
          </div>
          <div className="col-md-3 col-sm-12">
            <DisinfectantIcon className="descriptionIcon" />
            <p className="descriptionText">Deep cleaning with Phytoncide fogging</p>
          </div>
        </div>
      </div>
    </section>

    <section id="projects" className="projects-section bg-light">
      <div className="container">
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7 video-container">
          <Video
            videoSrcURL="https://www.youtube.com/embed/5agNuzdVfJA"
            videoTitle="VBP Sanitizing"
          />
            {/* <img className="img-fluid mb-3 mb-lg-0" src={bodyImage3} alt="" /> */}
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-left">
              <h4>What We Do..</h4>
              <p className="text-black-50 mb-0">
              VBP has adopted sanitization practices from South Korea to eliminate 99.99% of germs, bacteria, and viruses. First, we electrostatic spray high touch surfaces and fog hard-to-reach areas using FDA and WHO-approved disinfectant imported from South Korea. This disinfectant is hospital-grade and food-safe to guarantee a thorough clean and ensure customer safety. Second, we disinfect high touch objects using UV light. Third, we finish the sanitization process by spraying affected areas with Phytoncide, a natural anti-microbial and deodorizer.
              </p>
            </div>
          </div>
        </div>

        <div id="products" className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={bodyImage1} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-left">
                  <h4 className="text-white">Simply Water</h4>
                  <p className="mb-0 text-white-50">
                  Tested to remove 99% of viruses, bacteria and odours!
                  ​FDA Approved Sanitizing Power!
                  Alkaline Anion Disinfectant Sanitizer Spray!
                  Eliminates viruses without the use of harsh chemicals.
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src={bodyImage2} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-left text-lg-right">
                  <h4 className="text-white">What is Akaline Water?</h4>
                  <p className="mb-0 text-white-50">
                    When water is electrolyzed with an anode and cathode, alkaline water is formed in the cathode. Alkaline water formed in the cathode contains many anions. Alkaline water's main functions are disinfecting and cleansing. When akaline water encounters other substances, it pulls the cations, and their repulsive force pushes away the debris on the surface, resulting in a cleansing effect. Also, the charged anions destroy the nucleus of the germs, which then lose their power and are considered to be disinfected.
                  </p>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="steps-section" id="steps">
          <div className="row">
            <h2>How it works - Simple as 1, 2, 3</h2>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12 steps-image">
              <img src={logo} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6 col-md-12 steps-description">
              <div className="works-step">
                <CallIcon className="steps-icon" />
                <p>Get an estimate by Phone or Online</p>
              </div>
              <div className="works-step">
                <CalendarIcon className="steps-icon" />
                <p>Schedule service at your convenience</p>
              </div>
              <div className="works-step">
                <SmileIcon className="steps-icon" />
                <p>Relax and let us do the rest</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Subscribe />

    <SocialLinks />
    <Footer />
  </Layout>
);

export default IndexPage;
