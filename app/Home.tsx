import Image from "next/image";
import react,  {PropsWithChildren } from "react";
import Nav from "./Components/nav";
export default function Home() {


  return (
    <main>
      <div className="App">
        
        <div className="container">
        </div>
        <h1> Hello Next </h1>
        <Nav />
      </div>
    </main>
  );
}
