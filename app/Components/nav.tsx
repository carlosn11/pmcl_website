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
},

  ]

  return(
    <nav>
      <ul className="flex gap-12">
      {links.map(link =>{
          return(
          <li key={link.path}>
            <Link href={link.path}>
              <span>{link.name}</span>
            </Link>
          </li>
          )
        })}
      </ul>
    </nav>
  )
}
