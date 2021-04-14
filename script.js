anime({
    targets: ".wave",
    duration: 500,
    opacity: [0, 1],
    easing: "linear"
})

const animation = anime.timeline();

animation.add({
    targets: ".wave",
    keyframes: [
        { rotate: 25 },
        { rotate: -14 },
        { rotate: 10 },
        { rotate: -7 },
        { rotate: 3 },
    ],
    duration: 1000,
    delay: 200,
    easing: "cubicBezier(0.300, 0.160, 0.725, 0.875)"
});

animation.add({
    targets: ".wave",
    translateY: [0, -40],
    opacity: [1, 0],
    duration: 100,
    delay: 500,
    easing: "linear"
});

animation.add({
    targets: ".content",
    translateY: [100, 0],
    opacity: [0, 1],
    duration: 1200
});
