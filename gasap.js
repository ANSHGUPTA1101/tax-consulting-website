export const gasap = () => {

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
        gsap.to(section, {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: "top 80%", 
                toggleActions: "play none none reverse",
            },
        });
    });
});

    document.addEventListener("DOMContentLoaded", function () {
        gsap.to(".hero-h2", { opacity: 1, y: 0, duration: 1 });
        gsap.to(".hero-section h1", { opacity: 1, y: 0, duration: 1, delay: 0.3 });
        gsap.to(".hero-p", { opacity: 1, y: 0, duration: 1, delay: 0.6 });
        gsap.to(".hero-img", { opacity: 1, y: 0, duration: 1, delay: 0.9 });
        gsap.to(".CTA", { opacity: 1, y: 0, duration: 1, delay: 1.2 });
    });
}