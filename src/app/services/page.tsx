'use client';

import React from 'react';
import Image from "next/image";

export default function services() {
    return (
    <div className="services-page">
        <section className="services-header">
        <h1>Our Painting Services</h1>
        <p>We offer a comprehensive range of painting services to meet all your needs.</p>
        </section>

        <section className="service-details">
        <div className="service-item">
            <img src="/Interior-Dining-Room.jpg" alt="Interior Painting" />
            <h2>Interior Painting</h2>
            <p>
            Transform your living spaces with our expert interior painting services. We handle everything from surface preparation to the final coat, ensuring a flawless finish.
            </p>
            <ul>
            <li>Wall and ceiling painting</li>
            <li>Trim and molding painting</li>
            <li>Drywall repair</li>
            </ul>
            <button className="quote-button-page"
            onClick={() => window.location.href = '/contact'} 
            >Get a Quote</button>
        </div>

        <div className="service-item">
            <Image src="/Exterior-After-zoom.JPG" 
            alt="Exterior Painting" 
            width={500}
            height={300}/>
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
            <button className="quote-button-page"
            onClick={() => window.location.href = '/contact'}
            >Get a Quote</button>
        </div>


        <div className="service-item">
            <img src="/images/cabinet-service.jpg" alt="Cabinet Refinishing" />
            <h2>Cabinet Refinishing</h2>
            <p>
            Give your kitchen or bathroom cabinets a fresh, new look without the expense of replacement. Our refinishing services can breathe new life into your space.
            </p>
            <ul>
            <li>Cabinet sanding and priming</li>
            <li>Painting or staining</li>
            <li>Hardware replacement</li>
            </ul>
            <button className="quote-button-page"
            onClick={() => window.location.href = '/contact'}
            >Get a Quote</button>
        </div>
        </section>
    </div>
    );
};

// Removed duplicate export statement