// components/Hero.jsx

import Image from "next/image";
import Socials from "./socials";

const Hero = () => {
  return (
    <div className="hero-container">
      <Image src='/images/genesis.jpeg' className="profile-img" width={300} height={300} alt="Joe's personal headshot" />
      <div className="hero-text">
        <h1>Hey, I&apos;m Genesis  👋</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <Socials />
      </div>
    </div>
  )
}

export default Hero;