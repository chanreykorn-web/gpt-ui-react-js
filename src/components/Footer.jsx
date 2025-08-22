import React from 'react';
import card1 from '../assets/images/card/card1.png'
import Copyright from '../utils/Copyright';

export const Footer = () => {
    return (
        <div
            className="relative w-full px-0 md:px-20 bg-cover bg-center"
            style={{ backgroundImage: `url(${card1})` }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-50" />

            {/* Grid layout */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-20 py-20 text-white">
                {/* Left side */}
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
                        Don't Wait, Stay Cool <br /> With Airz
                    </h1>
                    <p className="text-lg text-gray-200">
                        Reach out today for a free consultation and upgrade to efficient, reliable cooling with expert installation.
                    </p>
                    <button className="mt-4 px-8 py-4 text-lg rounded-full border border-white hover:bg-white hover:text-black transition-all duration-300 w-fit">
                        Schedule Now!
                    </button>
                </div>

                {/* Right side */}
                <div className="space-y-4 text-gray-200">
                    <p>
                        <span className="font-semibold text-white">_Phone :</span> +34 567 72112 35
                    </p>
                    <p>
                        <span className="font-semibold text-white">_Email :</span> info@email.com
                    </p>
                    <div>
                        <p className="font-semibold text-white">_Directions</p>
                        <p>77 Kennedy Road</p>
                        <p>Soho Manhattan</p>
                        <p>New York–USA</p>
                    </div>
                </div>
            </div>
        </div>
    )
}