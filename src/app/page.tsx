'use client';
import React from 'react';
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main>
        <HomeSection />
        <ServicesSection />
        <AboutSection />
        <PortifolioSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
};


function HomeSection() {
  return (
    <div className="home-page">
      <section className="home">
        <div className="home-content">
          <h1 className="home-content-title">
            Transform Your Home With New Paint
          </h1>
          <button
            className="quote-button-page"
            onClick={() => window.location.href = '/contact'}
          >
            Get a Free Estimate
          </button>
        </div>
      </section>
    </div>
  )
};

function ServicesSection() {
  return (
    <div className="services-page">
      <section className="services-header">
        <h1>Our Painting Services</h1>
        <p>We offer a comprehensive range of painting services to meet all your needs.</p>
      </section>

      <section className="service-details">
        <div className="service-item">
          <Image
            src="/Interior-Dining-Room.jpg"
            alt="Interior Painting"
            width={300}
            height={300}
            className="rounded-lg object-cover"
          />
          <h2>Interior Painting</h2>
          <p>
            Transform your living spaces with our expert interior painting services. We handle everything from surface preparation to the final coat, ensuring a flawless finish.
          </p>
          <ul>
            <li>Wall and ceiling painting</li>
            <li>Trim and molding painting</li>
            <li>Drywall repair</li>
          </ul>
          <button
            className="quote-button-page"
            onClick={() => window.location.href = '/contact'}
          >
            Get a Quote
          </button>
        </div>

        <div className="service-item">
          <Image
            src="/Exterior-After-zoom.JPG"
            alt="Exterior Painting"
            width={500}
            height={300}
            className="rounded-lg object-cover"
          />
          <h2>Exterior Painting</h2>
          <p>
            Protect and beautify your home exterior with our professional painting services. We use high-quality paints that withstand the elements.
          </p>
          <ul>
            <li>Siding and trim painting</li>
            <li>Deck and fence staining</li>
            <li>Power washing</li>
            <li>Weatherproofing</li>
          </ul>
          <button
            className="quote-button-page"
            onClick={() => window.location.href = '/contact'}
          >
            Get a Quote
          </button>
        </div>

        <div className="service-item">
          <Image
            src="/images/cabinet-service.jpg"
            alt="Cabinet Refinishing"
            width={300}
            height={300}
            className="rounded-lg object-cover"
          />
          <h2>Cabinet Refinishing</h2>
          <p>
            Give your kitchen or bathroom cabinets a fresh, new look without the expense of replacement. Our refinishing services can breathe new life into your space.
          </p>
          <ul>
            <li>Cabinet sanding and priming</li>
            <li>Painting or staining</li>
            <li>Hardware replacement</li>
          </ul>
          <button
            className="quote-button-page"
            onClick={() => window.location.href = '/contact'}
          >
            Get a Quote
          </button>
        </div>
      </section>
    </div>
  );
};



function AboutSection() {
  return (
    <section id="about" className="about-page">
      <div className="about-container">
        <div className="about-grid">
          <div className="about-image-wrapper">
            <Image
              src="/placeholder.svg?height=400&width=600"
              width={600}
              height={400}
              alt="PMCL Painting team"
              className="about-image"
            />
          </div>
          <div className="about-text-content">
            <div className="about-badge">About Us</div>
            <h2 className="about-heading">Your Trusted Painting Partner</h2>
            <p className="about-description">
              PMCL Painting has been serving the community with exceptional painting services for years. Our team of
              skilled professionals is dedicated to delivering quality results that exceed your expectations.
            </p>
            <ul className="about-list">
              <li className="about-list-item">
                <CheckCircle className="about-icon" />
                <span>Licensed and insured professionals</span>
              </li>
              <li className="about-list-item">
                <CheckCircle className="about-icon" />
                <span>Premium quality paints and materials</span>
              </li>
              <li className="about-list-item">
                <CheckCircle className="about-icon" />
                <span>Attention to detail and clean workmanship</span>
              </li>
              <li className="about-list-item">
                <CheckCircle className="about-icon" />
                <span>On-time project completion</span>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </section>
  );
}

function PortifolioSection() {
  return (
    <section className="portfolio">
      <h2>Our Portfolio</h2>
      <div className="portfolio-grid">
        <div className="portfolio-item">
          <Image src="/Interion-Room.jpg" alt="Portfolio 1"
            width={300}
            height={300}
          />
        </div>
        <div className="portfolio-item">
          <Image src="/Interior-Dining-Room.jpg" alt="Portfolio 2"
            width={300}
            height={300}
          />
        </div>
        <div className="portfolio-item">
          <Image src="/Exterior-After-zoom.JPG" alt="Portfolio 3"
            width={300}
            height={300}
          />
        </div>
        {/* Add more portfolio items */}
      </div>
    </section>
  )
}

<section className="testimonials">
  <h2>Testimonials</h2>
  <div className="testimonial-grid">
    <div className="testimonial-item">
      <p>“Great service and excellent results! Highly recommend.”</p>
      <p>- John Doe</p>
    </div>
    <div className="testimonial-item">
      <p>“The painters were professional and efficient. We are very happy with the outcome.”</p>
      <p>- Jane Smith</p>
    </div>
    {/* Add more testimonials */}
  </div>
</section>


function ContactSection() {
  return (
    <section id="contact" className="contact-page">
      <h2>Contact Us</h2>
      <p>If you have any questions or would like to request a quote, please fill out the form below.</p>
      <p>Phone: (864)-346-7562</p>
      <p>Email: Pmclpainting@Gmail.com</p>
      <div className="grid">
        <main className="form">

          <Image
            className="pmcl"
            src="/logo-PMCL.svg"
            alt="PMCL Painting logo"
            width={300}
            height={300}
            priority
          />
          <a className="form-title">
            GET A FREE QUOTE!
          </a>
          <ol className="form-text">


            <li className="form-item">
              <label className="name-block"
                htmlFor="customer-name">
                Name:
                <input
                  className="customer-name"
                  id="customer-name"
                  type="text"
                  placeholder="Enter your name"
                  aria-label="Name"
                  required
                />
              </label>
            </li>

            <li className="form-item">
              <label className="email-block"
                htmlFor="customer-email">
                Email:
                <input
                  className="customer-email"
                  id="customer-email"
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email"
                  required
                />
              </label>
            </li>

            <li className="form-item">
              <label className="phone-block"
                htmlFor="customer-number">
                Phone Number:

                <input

                  className="customer-number"
                  id="customer-number"
                  type="tel"
                  placeholder="Enter your phone number"
                  aria-label="Phone Number"
                  required
                />
              </label>
            </li>

            <li className="form-item">
              <label className="job-block"
                htmlFor="job-description">
                Job Description:

                <textarea
                  className="job-description"
                  id="job-description"
                  rows={4}
                  placeholder="Describe the job details"
                  aria-label="Job Description"
                  required
                />
              </label>
            </li>

          </ol>
          <button
            className="submit-button">Submit
          </button>



        </main>

        <footer className="other-info">


        </footer>

      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2023 PMCL Painting. All rights reserved.</p>
      <div className="social-media">
        <a href="https://www.facebook.com/PMCLPainting" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://www.instagram.com/PMCLPainting" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </footer>
  )
} 