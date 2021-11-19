import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-tsparticles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Particles
        params={{
          background: {
            color: {
              
            }
          },
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 789.1476416322727
              }
            },
            size: {
              value: 1.3,
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0,
                sync: false
              }
            },
            line_linked: {
              enable: false,
              distance: 250,
              color: "#ffffff",
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 1.0,
              direction: "top",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "bubble"
              },
              onclick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 83.91608391608392,
                size: 1,
                duration: 3,
                opacity: 1,
                speed: 3
              },
              repulse: {
                distance: 200,
                duration: 0.4
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              },
            }
          },
          retina_detect: true
        }}
      />
      <div style={{ position: "relative" }}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
