import React, { useState } from 'react';
import { StickyNavbar } from '../components/Navbar';
import { Banners } from './HomePage';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import BannerServie from '../assets/images/banner/Artboard1.jpg'
import card1 from '../assets/images/card/aircon-service-man.jpg'
import card2 from '../assets/images/card/1HP.jpg'
import AddIcon from '@mui/icons-material/Add';
// import { Testimonials } from './AboutPage';
import { Footer } from '../components/Footer';
import Carousel from 'react-multi-carousel';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';


const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 1536 },
        items: 2,
    },
    desktop: {
        breakpoint: { max: 1536, min: 1024 },
        items: 2,
        // gap: 10
    },
    tablet: {
        breakpoint: { max: 1024, min: 640 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 640, min: 0 },
        items: 1,
    },
};


export const SerivcePage = () => {
    return (
        <div>
            <StickyNavbar />
            <Banners backgroundImage={BannerServie} />
            <div className='px-8 py-5 md:px-15'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <img src={card1} alt="" className='flex justify-end rounded-2xl md:w-[579px] lg:w-[579px] object-center' />
                    <GeneralService />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-15'>
                    <GeneralServiceSection />
                    <img src={card1} alt="" className=' flex justify-end rounded-2xl md:w-[579px] lg:w-[579px] object-center' />
                </div>
            </div>
            <Testimonials />
            <Footer />
        </div>
    );
}


export const GeneralService = () => {
    const accordionData = [
        {
            title: 'Air Cooler Installation ',
            content:
                'We professionally install AIRZ air coolers in homes and offices. ensuring proper placement, energy efficiency, noise control, and optimal performance tailored to your indoor layout and cooling needs. ',
        },
        {
            title: 'Smart Thermostat Setup',
            content: `1. Check Compatibility: Ensure your AC is compatible with the smart thermostat. Verify if a C-wire is needed.
            2. Tools: Screwdriver, drill (if needed), thermostat app.
            3. Turn Off Power: Switch off HVAC at the circuit breaker.
            4. Remove Old Thermostat: Take a photo of wiring, label wires (R, Y for cooling, G for fan, C), and remove old unit.
            5. Install New Thermostat: '\n'
               - Mount backplate, ensuring it’s level.
               - Connect wires to matching terminals (Y for cooling, G for fan, etc.).
               - If no C-wire, use an adapter or compatible model.
            6. Power On: Attach thermostat, restore power, and follow app setup instructions.`
        },
        {
            title: 'Smart Thermostat Setup',
            content: `1. Check Compatibility: Ensure your AC is compatible with the smart thermostat. Verify if a C-wire is needed.
            2. Tools: Screwdriver, drill (if needed), thermostat app.
            3. Turn Off Power: Switch off HVAC at the circuit breaker.
            4. Remove Old Thermostat: Take a photo of wiring, label wires (R, Y for cooling, G for fan, C), and remove old unit.
            5. Install New Thermostat: '\n'
               - Mount backplate, ensuring it’s level.
               - Connect wires to matching terminals (Y for cooling, G for fan, etc.).
               - If no C-wire, use an adapter or compatible model.
            6. Power On: Attach thermostat, restore power, and follow app setup instructions.`
        },
    ];

    return (
        <div>
            {accordionData.map((item, index) => (
                <Accordion
                    key={index}
                    disableGutters
                    elevation={0}
                    square
                    sx={{
                        borderBottom: '1px solid #ddd',
                        '&:before': {
                            display: 'none',
                        },
                    }}
                >
                    <AccordionSummary
                        expandIcon={<AddIcon />}
                        aria-controls={`panel${index + 1}-content`}
                        id={`panel${index + 1}-header`}
                    >
                        <Typography component="span">{item.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{item.content}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
};

export const GeneralServiceSection = () => {
    const accordionData = [
        {
            title: 'Air Cooler Installation ',
            content:
                'We professionally install AIRZ air coolers in homes and offices. ensuring proper placement, energy efficiency, noise control, and optimal performance tailored to your indoor layout and cooling needs. ',
        },
        {
            title: 'Smart Thermostat Setup',
            content: `1. Check Compatibility: Ensure your AC is compatible with the smart thermostat. Verify if a C-wire is needed.
            2. Tools: Screwdriver, drill (if needed), thermostat app.
            3. Turn Off Power: Switch off HVAC at the circuit breaker.
            4. Remove Old Thermostat: Take a photo of wiring, label wires (R, Y for cooling, G for fan, C), and remove old unit.
            5. Install New Thermostat: '\n'
               - Mount backplate, ensuring it’s level.
               - Connect wires to matching terminals (Y for cooling, G for fan, etc.).
               - If no C-wire, use an adapter or compatible model.
            6. Power On: Attach thermostat, restore power, and follow app setup instructions.`
        },
        {
            title: 'Smart Thermostat Setup',
            content: `1. Check Compatibility: Ensure your AC is compatible with the smart thermostat. Verify if a C-wire is needed.
            2. Tools: Screwdriver, drill (if needed), thermostat app.
            3. Turn Off Power: Switch off HVAC at the circuit breaker.
            4. Remove Old Thermostat: Take a photo of wiring, label wires (R, Y for cooling, G for fan, C), and remove old unit.
            5. Install New Thermostat: '\n'
               - Mount backplate, ensuring it’s level.
               - Connect wires to matching terminals (Y for cooling, G for fan, etc.).
               - If no C-wire, use an adapter or compatible model.
            6. Power On: Attach thermostat, restore power, and follow app setup instructions.`
        },
    ];

    return (
        <div>
            {accordionData.map((item, index) => (
                <Accordion
                    key={index}
                    disableGutters
                    elevation={0}
                    square
                    sx={{
                        borderBottom: '1px solid #ddd',
                        '&:before': {
                            display: 'none',
                        },
                    }}
                >
                    <AccordionSummary
                        expandIcon={<AddIcon />}
                        aria-controls={`panel${index + 1}-content`}
                        id={`panel${index + 1}-header`}
                    >
                        <Typography component="span">{item.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{item.content}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
};


export const Testimonials = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 bg-bg-fujiare px-8 py-5 md:px-15'>
            <div className=''>
                <div className='flex items-center gap-1 text-fujiaire-text'>
                    <div className='w-[13px] h-[13px] bg-fujiaire-text rounded-full'></div>
                    <span>Testimonials</span>
                </div>
                <h1 className='text-3xl md:text-4xl lg:text-5xl' data-aos="zoom-in">Built on Trust, Backed by Reviews</h1>
                <p className='mt-2 text-md md:text-xl lg:text-2xl' data-aos="fade-up">Reliable, efficient cooling service that exceeded expectations-highly recommend for comfort! </p>
                <button className="before:ease relative h-12 w-40 overflow-hidden border border-blue-500 text-blue-500 shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-blue-500 before:duration-300 hover:text-white hover:shadow-blue-500 hover:before:h-64 hover:before:-translate-y-32 mt-5" data-aos="zoom-out-down">
                    <span className="relative z-10">Get in Touch</span>
                </button>
            </div>
            <SectionCarousel />
        </div>
    )
};


export const SectionCarousel = () => {
    return (
        <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            arrows={true}
            showDots={false}
            className="pb-4"
        >
            <div className='w-[100%] h-[331px] lg:w-[230px] lg:h-[331px] xl:w-[275px] xl:h-[331px] 2xl:w-[341px] 2xl:h-[331px] bg-white rounded-2xl'>
                <img src={card1} alt="" className=' rounded-t-2xl' />
                <h1 className='text-md px-5 py-5'>
                    The Cool Air system has transformed our work environment. It maintains
                </h1>
            </div>
            <div className='w-[100%] h-[331px] lg:w-[230px] lg:h-[331px] xl:w-[275px] xl:h-[331px] 2xl:w-[341px] 2xl:h-[331px] bg-white rounded-2xl'>
                <img src={card1} alt="" className='rounded-t-2xl' />
                <h1 className='text-md px-5 py-5'>
                    The Cool Air system has transformed our work environment. It maintains
                </h1>
            </div>
        </Carousel>
    )
}
