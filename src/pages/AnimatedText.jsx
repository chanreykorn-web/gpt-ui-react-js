import React from 'react';
import '../pages/AnimatedText.css'; // Import custom CSS for keyframes

const AnimatedText = ({ text }) => {
    return (
        <div className="overflow-hidden w-full">
            <p className="slide-through text-lg md:text-xl font-medium whitespace-nowrap">
                {text}
            </p>
        </div>
    );
};

export default AnimatedText;
