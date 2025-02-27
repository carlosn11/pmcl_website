import Image from "next/image";
export default function Contact() {
  return (
    <div className="grid">
      <main className="form">
        
        <Image
          className="pmcl"
          src="/logo PMCL.png"
          alt="PMCL Painting logo"
          width={200}
          height={40}
          priority
        />
        <a className="form-title">
             GET A FREE QUOTE!
        </a>
        <ol className="form-text">
          
          
          <li className="form-item">
            <label>
              Name:
              <input className="customer-name" />
            </label>
          </li>

          <li className="form-item">
            
            <label>
              Email:
              <input className="customer-email" />
            </label>  
          </li>
            
          <li className="form-item">
            <label>
              Phone #:
              <input className="customer-number" />
            </label>  
          </li>

          <li className="form-item">
            <label className="block">Job Description:</label>
            <textarea className="job-description" rows={4} />
          </li>
        </ol>


        <div className="flex gap-4 items-center flex-col sm:flex-row">
          
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
          
            Summit
          </a>

        </div>

      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>

        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>

        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>

      </footer>
      
    </div>

  );
}