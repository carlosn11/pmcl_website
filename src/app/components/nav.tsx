/**
 * The `Nav` component renders a navigation bar with a logo and a list of links.
 * 
 * @component
 * @example
 * // Usage example:
 * <Nav />
 * 
 * @returns {JSX.Element} The rendered navigation bar component.
 * 
 * @remarks
 * The navigation bar includes a logo image and a list of links defined in the `links` array.
 * Each link is rendered as a list item with a `Link` component.
 * 
 * @see {@link https://reactjs.org/docs/components-and-props.html | React Components and Props}
 */


"use client";
import Link from "next/link";
import Image from "next/image";

export default function Nav(){

  /**
   * An array of link objects used for navigation.
   * Each link object contains the following properties:
   * - `path`: A string representing the URL path of the link.
   * - `name`: A string representing the display name of the link.
   */
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
    <nav className="nav-bar">
      <div className="logo-nav"> 
        <Image
          className="logo-nav"
          src="logo-PMCL-no-circle-white.svg"
          alt="PMCL Painting logo"
          width={40}
          height={40}
          priority
        />
      </div>
        <ul className="links">          
        {links.map(link => {
          // Ensure link.path is unique for each link
          return (
          <li key={link.path}>
            <Link 
            className="text-links"
            href={link.path}>
              <span>{link.name}</span>
            </Link>
          </li>
          )
        })}
      </ul> 

        <button 
          className="quote-button" 
          onClick={() => window.location.href = '/contact'}
        > Get a Quote!
        </button>

    </nav>
  );
}