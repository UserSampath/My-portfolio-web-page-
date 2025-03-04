import React from "react";
import "./home.css"
import Profile from "../../assets/p4.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { delay, motion } from "framer-motion";
const Home = () => {
 const [particleColor, setParticleColor] = useState(
   getComputedStyle(document.documentElement)
     .getPropertyValue("--first-color")
     .trim()
 );
useEffect(() => {
  // Function to update the color state
  const updateColor = () => {
    const newColor = getComputedStyle(document.documentElement)
      .getPropertyValue("--first-color")
      .trim();
    setParticleColor(newColor);
  };

  // Delay fetching the color for a short time (e.g., 500ms)
  const timeoutId = setTimeout(() => {
    updateColor();
  }, 10);

  // Observe changes in the root element's style
  const observer = new MutationObserver(updateColor);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["style"],
  });

  // Cleanup observer and timeout on component unmount
  return () => {
    clearTimeout(timeoutId);
    observer.disconnect();
  };
}, []);

  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              // color: { value: "#ffffff" },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: { enable: true, mode: "push" },
                onHover: { enable: true, mode: "repulse" },
                resize: true,
              },
              modes: {
                push: { quantity: 3 },
                repulse: { distance: 200, duration: 0.4 },
              },
            },
            particles: {
              color: { value: particleColor },
              links: {
                color: particleColor,
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: { default: "bounce" },
                random: false,
                speed: 1.5,
                straight: false,
              },
              number: {
                density: { enable: true, area: 800 },
                value: 100,
              },
              opacity: { value: 0.5 },
              shape: { type: "circle" },
              size: { value: { min: 0.5, max: 3 } },
            },
            detectRetina: true,
          }}
        />
      )}
      <section className="home section grid">
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "120%",
          }}>
          <img src={Profile} alt="" className="home__img" />
        </motion.div>
        <div className="home__content">
          <motion.div
            initial={{ opacity: 0, y: 50 }} // Start invisible and lower
            animate={{ opacity: 1, y: 0 }} // Fade in and move up
            transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
            className="home__data">
            <h1 className="home__title">
              <span>I'm Nalaka Sampath</span> <br /> Software Engineer
            </h1>
            <p className="home__description">
              I am a passionate and motivated person, dedicated to exploring new
              technologies in the field of Information Technology.
            </p>
            <motion.div
              
              initial={{ opacity: 0, x: -50 }} // Start invisible and lower
              animate={{ opacity: 1, x: 0 }} // Fade in and move up
              transition={{ duration: 0.8, ease: "easeOut" ,delay:2}} // Smooth transition
            >
              <Link to="/about" className="button">
                More About Me{" "}
                <span className="button__icon">
                  <FaArrowRight />
                </span>{" "}
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <div className="color__block"></div>
      </section>
    </div>
  );
};

export default Home;
