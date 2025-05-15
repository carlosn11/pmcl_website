'use client';
import React from 'react';

export default function About() {
    return (
        <div className="about-page">
          <section className="about-header">
            <h1>About Our Company</h1>
            <p>Your trusted painting partner for quality and reliability.</p>
          </section>
    
          <section className="about-content">
            <div className="company-info">
              <h2>Our Story</h2>
              <p>
                Founded in [Year], [Company Name] has been dedicated to providing exceptional painting services to homeowners and businesses in [Your Area]. Our journey began with a passion for transforming spaces and a commitment to delivering outstanding craftsmanship. Over the years, we have built a reputation for our attention to detail, professionalism, and unwavering dedication to customer satisfaction.
              </p>
    
              <h2>Our Mission</h2>
              <p>
                Our mission is to exceed our clients expectations by delivering high-quality painting services that enhance the beauty and value of their properties. We strive to create lasting relationships with our clients by providing personalized service and exceptional results.
              </p>
    
              <h2>Our Values</h2>
              <ul>
                <li><strong>Quality:</strong> We are committed to using premium materials and employing skilled professionals to ensure superior results.</li>
                <li><strong>Integrity:</strong> We conduct our business with honesty, transparency, and respect.</li>
                <li><strong>Customer Satisfaction:</strong> We prioritize our clients needs and strive to deliver a seamless and enjoyable experience.</li>
                <li><strong>Professionalism:</strong> We maintain a professional demeanor and adhere to the highest standards of workmanship.</li>
                <li><strong>Reliability:</strong> We are dependable and committed to completing projects on time and within budget.</li>
              </ul>
    
              <h2>Meet the Team</h2>
              <div className="team-members">
                <div className="team-member">
                  <img src="/images/team-member1.jpg" alt="Team Member 1" />
                  <h3>[Team Member 1 Name]</h3>
                  <p>[Team Member 1 Title]</p>
                  <p>[Short Bio/Description]</p>
                </div>
                <div className="team-member">
                  <img src="/images/team-member2.jpg" alt="Team Member 2" />
                  <h3>[Team Member 2 Name]</h3>
                  <p>[Team Member 2 Title]</p>
                  <p>[Short Bio/Description]</p>
                </div>
                {/* Add more team members as needed */}
              </div>
            </div>
    
            <div className="company-image">
              <img src="/images/about-us-image.jpg" alt="About Us" />
            </div>
          </section>
    
          <section className="about-cta">
            <h2>Ready to Transform Your Space?</h2>
            <p>Contact us today for a free consultation and estimate.</p>
            <button 
            className="quote-button-page"
            onClick={() => window.location.href = '/contact'}
            >Get a Free Estimate</button>
          </section>
        </div>
      );
    };