import React, { useState, useRef, useEffect } from 'react';
import AirIcon from '@mui/icons-material/Air';
import { motion, useInView } from 'framer-motion';
import userIntersectionObserver from '../hooks/userIntersectionObserver.js';
import intersectionObserver from '../hooks/userIntersectionObserver.js';


const ChooseUsComponents = () => {
    return (
        <div>

        </div>
    );
}

export default ChooseUsComponents;



export const ChooseUsSection = ({ title, description }) => {
    const titleRef = useRef();

    userIntersectionObserver(titleRef, { threshold: 0.01 });
    intersectionObserver(titleRef, { threshold: 0.01});

    return (
        <div className="" style={{ overflowX: 'hidden' }}>
            <div className='flex justify-between items-center overflow-x-hidden' ref={titleRef}>
                <h1 className='text-[20px] md:text-[35px] font-semibold hover:text-fujiaire-text'>
                    {title}
                </h1>
                {/* <a href="" className='hover:text-fujiaire-text'>View all</a> */}
            </div>
            <div className="mb-6">
                <div className="flex items-center gap-2">
                    <div className="w-[13px] h-[13px] bg-fujiaire-text rounded-full"></div>
                    <h4 className="text-[15px] md:text-xl text-fujiaire-text">{description}</h4>
                </div>
            </div>
        </div>
    )
}


export const ChooseUsCard = ({ features = [] }) => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);

    const isInView1 = useInView(ref1, { amount: 0.3 });

    const fadeVariants = {
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
        hidden: { opacity: 0, y: 60, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    return (
        <motion.div
            ref={ref1}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10"
            variants={fadeVariants}
            initial="hidden"
            animate={isInView1 ? 'visible' : 'hidden'}
        >
            {features.map((feature, idx) => (
                <div
                    key={idx}
                    className="flex flex-col items-center justify-center text-center h-[324px] border rounded-xl p-6 shadow-sm transition-transform transform duration-300 hover:scale-105 hover:shadow-md"
                >
                    <div className="w-[103px] h-[88px] flex items-center justify-center border mb-4 p-4 rounded-lg">
                        {feature.icon}
                    </div>
                    <h3 className="text-[20px] font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-[16px]">{feature.description}</p>
                </div>
            ))}
        </motion.div>
    );
}
