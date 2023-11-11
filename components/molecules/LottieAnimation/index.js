import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const LottieAnimation = ({ animationData, loop }) => {
    const container = useRef(null);

    useEffect(() => {
        if (container.current) {
            lottie.loadAnimation({
                container: container.current,
                animationData: animationData,
                loop: loop || true, // set loop to true by default
                renderer: 'svg', // or 'canvas'
                autoplay: true,
            });
        }
    }, [animationData, loop]);

    return <div ref={container} />;
};

export default LottieAnimation;
