'use client';
import React from 'react';
import Image from "next/image";

export default function Home() {
  return (
    <div className="home-page">
    <section className="home">
      <div className="home-content">
        <h1>Transform Your Home With New Paint</h1>
        <button 
        className="quote-button-page"
        onClick={() => window.location.href = '/contact'}
        > Get a Free Estimate
        </button>
      </div>
    </section>

    <section className="services">
      <h2>Our Services</h2>
      <div className="services-grid">
        <div className="service-item">
          <Image src="/Interior-Dining-Room.jpg" alt="Interior Painting"          
            width={300}
            height={300} />
          <h3>Interior Painting</h3>
          <p>We will bring new life to your interior spaces.</p>
        </div>
        <div className="service-item">
          <Image src="/Exterior-After-zoom.JPG" alt="Exterior Painting" 
            width={300}
            height={300}/>
          <h3>Exterior Painting</h3>
          <p>Protect and beautify your home exterior.</p>
        </div>
        <div className="service-item">
          <Image src="/logo-PMCL.svg" alt="Commercial Painting" 
            width={300}
            height={300}/>
          <h3>Commercial Painting</h3>
          <p>Professional painting for your business.</p>
        </div>
        <div className="service-item">
          <Image src="/logo-PMCL.svg" alt="Cabinet Refinishing" 
              width={300}
              height={300}
          />
          <h3>Cabinet Refinishing</h3>
          <p>Give your cabinets a fresh, new look.</p>
        </div>
      </div>
    </section>

    <section className="portfolio">
      <h2>Our Portfolio</h2>
      <div className="portfolio-grid">
        <div className="portfolio-item">
          <img src="/Interion-Room.jpg" alt="Portfolio 1"
          width={300}
          height={300}
           />
        </div>
        <div className="portfolio-item">
          <img src="/Interior-Dining-Room.jpg" alt="Portfolio 2" 
          width={300}
          height={300}
          />
        </div>
        <div className="portfolio-item">
          <img src="/Exterior-After-zoom.JPG" alt="Portfolio 3" 
          width={300}
          height={300}
          />
        </div>
        {/* Add more portfolio items */}
      </div>
    </section>

    <section className="about-us">
      <h2>About Us</h2>
      <div className="about-us-content">
        <img src="/logo-PMCL.svg" alt="Our Team" />
        <p>
          We are a team of experienced painters dedicated to providing high-quality services. We pride ourselves on our attention to detail and commitment to customer satisfaction.
        </p>
      </div>
    </section>

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

    <section className="contact-us">
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button 
        className="submit-button"
        onClick={() => window.location.href = '/services'}
        >Get a Quote!
        </button>
      </form>
      <div className="contact-info">
        <p>Phone: (864)-346-7562</p>
        <p>Email: Pmclpainting@Gmail.com</p>
      </div>
    </section>
  </div>
);
};