
gsap.from('.header h1', {
    y: -80,
    x: 100,
    opacity: 0,
    duration: 2
})

gsap.from('.header p', {
    x: -250,
    opacity: 0,
    duration: 2
})
gsap.from('.header button', {
    scale: 0,
    opacity: 0,
    rotation: 720,
    duration: 2,
})
gsap.utils.toArray(".image-card").forEach(card => {
    gsap.from(card, {
        y: 100,
        scale: 0,
        opacity: 0,
        rotation: 360,
        duration: 3,
        scrollTrigger: {
            trigger: ".image-card",
            scroller: "body",
            markers: false,
            toggleActions: "play none none reverse",
            start: "top 5%",
            pin: false,
        }
    })
});