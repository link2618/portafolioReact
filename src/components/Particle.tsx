import Particles from "react-tsparticles";

function Particle() {
    return (
        <Particles
            id="tsparticles"
            options={{
                fpsLimit: 120,
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    number: {
                        value: 160,
                        density: {
                            enable: true,
                            area: 1500,
                        },
                    },
                    // line_linked: {
                    //     enable: false,
                    //     opacity: 0.03,
                    // },
                    move: {
                        direction: "right",
                        speed: 0.05,
                    },
                    size: {
                        value: 1,
                    },
                    opacity: {
                        anim: {
                            enable: true,
                            speed: 1,
                            // opacity_min: 0.05,
                        },
                    },
                },
                interactivity: {
                    events: {
                        onclick: {
                            enable: true,
                            mode: "push",
                        },
                    },
                    // modes: {
                    //     push: {
                    //         particles_nb: 1,
                    //     },
                    // },
                },
                detectRetina: true,
            }}
        />
    );
}

export default Particle;
