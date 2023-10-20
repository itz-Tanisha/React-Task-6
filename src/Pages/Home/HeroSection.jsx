import Image from "./home.png";

export default function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
        {/* <div className="hero--section--content--box"> */}
          <div className="hero--section--content">
            <p className="section--title">Hi, I'm Tanisha</p> <br />
            <h1 className="hero--section--title">
              <span className="hero--section-title--color color">Full Stack</span>{" "}
              <br />
              <span className="color">Developer</span>
            </h1>
            <p className="hero--section-description">
            </p>
          </div>
          
        {/* </div> */}
        <div className="hero--section--img">
          <img src={Image} alt="Hero Section" />
        </div>
      </section>
    );
  }
  