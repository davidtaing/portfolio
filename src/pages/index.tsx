import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="homepage">
      <section className="hero-section">
        <h1>
          Turn your ideas
          <br />
          into websites & apps.
        </h1>
        <h2>
          Sydney Based Fullstack Developer
          <br />
          with a focus on TypeScript, React & Express.
        </h2>
        <button className="button-primary">View Select Work</button>
        <button className="button-secondary">Or Contact Me</button>
      </section>
    </div>
  );
};

export default Home;
