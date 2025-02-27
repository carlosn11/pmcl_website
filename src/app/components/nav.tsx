"use client";
import Link from "next/link";
import Image from "next/image";


export default function Nav(){

  const links = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/services",
      name: "Services",
    },
    {
      path: "/about",
      name: "About",
    },
    {
      path: "/contact",
      name: "Contact",
    },
  ];

  return(
    <nav className="Nav Bar">
      <div className="logo"> 
        <Image
          className="logo_nav"
          src="logo PMCL no-circle white.svg"
          alt="PMCL Painting logo"
          width={40}
          height={10}
          priority
        />
      </div>
        <ul className="links">          
        {links.map(link =>{
          return(
          <li key={link.path}>
            <Link 
            className="text_links"
            href={link.path}>
              <span>{link.name}</span>
            </Link>
          </li>
          )
        })}
      </ul> 
    </nav>
  );
}