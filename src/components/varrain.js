export const fedeIn = (direction, delay)   => {
    return {
        hidden: {
            y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
            x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
        },
        show: {
            y: 10,
            x: 0,
            opacity: 1,
            // scale: 175,
            transition: {
                type: "tween",
                duration: 1.2,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            },
        },
    }
}

export const leftFedeIn = (direction, delay) => {
    return {
        hidden: {
            opacity: 0,
            y: direction === "right" ? 40 : direction === "button" ? -40 : 0,
            x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
        },
        show: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                type: "tween",
                duration: 1.2,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            },
        },
    }
}

export default {fedeIn, leftFedeIn};