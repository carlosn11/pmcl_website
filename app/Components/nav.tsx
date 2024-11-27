"use client"
import Link from "next/link"

export default function Nav(){

const links = [
{
  path: "/",
  name: "home",
},
{
  path: "/projects",
  name: "projects",
},
{
  path: "/contact",
  name: "contact",
}

]

  return(
    <nav>
      <ul>
        <li>
          {links.map(link =>{

            return(
              <li key={link.}
            )
          })}
        </li>
      </ul>
    </nav>
  )
}
