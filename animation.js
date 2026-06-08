
const splitText = () => {
    const h1 = document.querySelector('.header h1');

    const headingContent = h1.textContent;

    let half = Math.floor(headingContent.length / 2);

    let word = "";

    headingContent.split("").forEach((char, idx) => {

        const content = char === " " ? "&nbsp;" : char;

        if (idx < half) {
            // word += `<span class='left-half'>${char}</span>`;
            word += `<span class='left-half'>${content}</span>`;
            console.log(word);
            
        } else {
            // word += `<span class='right-half'>${char}</span>`;
            word += `<span class='right-half'>${content}</span>`;
        }
    });

    h1.innerHTML = word;
}

splitText();

gsap.from('h1 span.left-half', {
    y: 200,
    duration: 1,
    delay: 0.5,
    stagger: 0.3,
    opacity: 0
});

gsap.from('h1 span.right-half', {
    y: 200,
    duration: 1,
    delay: 0.5,
    stagger: -0.3,
    opacity: 0
});

// gsap.from('.header h1', {
//     y: -80,
//     x: 100,
//     opacity: 0,
//     duration: 2
// })

gsap.from('.header p', {
    y: -100,
    x: 100,
    opacity: 0,
    duration: 2
})
gsap.from('.header button', {
    x: -250,
    opacity: 0,
    duration: 2
})
// gsap.from('.header button', {
//     scale: 0,
//     opacity: 0,
//     rotation: 720,
//     duration: 2,
// })


gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray(".image-card").forEach(card => {
    gsap.from(card, {
        scale: 0,
        opacity: 0,
        rotation: 360,
        duration: 2.5,
        // y: 100,
        // scale: 0.8,
        // opacity: 0,
        // duration: 1,
        ease: "power3.out",
        delay: 0.5,
        scrollTrigger: {
            trigger: card,
            scroller: "body",
            markers: false,
            toggleActions: "play none none reverse",
            start: "top 80%",
            pin: false,
        }
    })
});