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
            <label className="name-block">
              Name:
              <input className="customer-name" />
            </label>
          </li>

          <li className="form-item">
            
            <label className="email-block">
              Email:
              <input className="customer-email" />
            </label>  
          </li>
            
          <li className="form-item">
            <label className="phone-block">
              Phone Number:
              <input className="customer-number" />
            </label>  
          </li>

          <li className="form-item">
            <label className="job-block">
              Job Description:
              </label>
            <textarea className="job-description" rows={4} />
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