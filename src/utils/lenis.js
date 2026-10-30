import Lenis from "lenis";

// Initialize Lenis
const lenis = () => {
    new Lenis({
        autoRaf: true,
        duration: 1,
    });
};

export default lenis;
