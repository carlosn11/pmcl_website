import Image from "next/image";
import react,  {PropsWithChildren } from "react";
import Navbar from "./Components/NavBar";


export default function Home() {


  return (
    <main>
      <div className="App">
        <Navbar />
        <div className="container">
        </div>
        <h1> Hello Next </h1>
      </div>
    </main>
  );
}
