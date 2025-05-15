import Image from "next/image";
export default function Contact() {
  return (
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

  );
}