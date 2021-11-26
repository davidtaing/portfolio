import Image from "next/image";
import profilePic from "../../../public/portrait-1024.png";

const HeroSection = () => {
  return (
    <div id="home" className="hero-section">
      <div id="hero-section--text">
        <h1>Creating Web Experiences That Move You.</h1>
        <h2>
          Sydney Based Fullstack Developer with a focus on TypeScript & React.
        </h2>
        <Image
          src={profilePic}
          alt="A picture of me! Hello."
          width="768"
          height="768"
          layout="responsive"
        />
      </div>
      <div id="hero-section--image"></div>
    </div>
  );
};

export default HeroSection;
