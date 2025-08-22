import React, { useState, useEffect } from 'react';
import { Banners, VRFMultiCarousel } from './HomePage';
import banner1 from '../assets/images/banner/1734663252864-Goal Plus Trading.jpg'
import { StickyNavbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Carousel from 'react-multi-carousel';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import AOS from 'aos';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

AOS.init();

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 1536 },
        items: 2,
    },
    desktop: {
        breakpoint: { max: 1536, min: 1024 },
        items: 2,
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



export const AboutPage = () => {
    return (
        <div>
            <StickyNavbar />
            <Banners backgroundImage={banner1} />
            <div className='px-8 py-5 md:px-15'>
                <AboutMain />
            </div>
            <Testimonials />
            <div className='px-8 py-5 md:px-15'>
                <HistoryOFDevelopment />
                <TimelineDevelopment />
            </div>
            <Footer />
        </div>
    );
}


export const AboutMain = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        AOS.init({
            duration: 600,
            once: false, // <-- key change
            mirror: true, // animate on scroll up too
        });
    }, []);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <img src={banner1} alt="" data-aos="fade-up"
            />
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab label="History" />
                    <Tab label="Mission" />
                    <Tab label="Core Value" />
                </Tabs>

                {/* ✅ Conditionally render tab content */}
                <Box sx={{ mt: 3 }}>
                    {value === 0 && <SectionHistory />}
                    {value === 1 && <SectionMission />}
                    {value === 2 && <SectionValue />}
                </Box>
            </Box>
        </div>
    );
};

export const SectionHistory = () => {
    return (
        <div className='flex justify-center items-center h-auto' data-aos="fade-up">
            <p className='text-xl text-center'>To be the one-stop solution for our customers, earn their trust,
                and build long lasting relationship</p>
        </div>
    )
}


export const SectionMission = () => {
    return (
        <div className='flex justify-center items-center h-auto' data-aos="fade-up">
            <p className='text-xl text-center'>To fulfill customer satisfaction by providing superior
                quality products, services, and solutions. </p>
        </div>
    )
}

export const SectionValue = () => {
    return (
        <div className='flex justify-center items-center h-auto' data-aos="fade-up">
            <p className='text-xl text-center'>TTeamwork, Integrity, Accountability and Communication Excellence.</p>
        </div>
    )
}

export const Testimonials = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 bg-bg-fujiare px-8 py-5 md:px-15'>
            <div className=''>
                <div className='flex items-center gap-1 text-fujiaire-text'>
                    <div className='w-[13px] h-[13px] bg-fujiaire-text rounded-full'></div>
                    <span>Testimonials</span>
                </div>
                <h1 className='text-3xl md:text-4xl lg:text-4xl xl:text-5xl' data-aos="zoom-in">Built on Trust, Backed by Reviews</h1>
                <p className='mt-2 text-md md:text-xl' data-aos="fade-up">Reliable, efficient cooling service that exceeded expectations-highly recommend for comfort! </p>
                <button className="before:ease relative h-12 w-40 overflow-hidden border border-blue-500 text-blue-500 shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-blue-500 before:duration-300 hover:text-white hover:shadow-blue-500 hover:before:h-64 hover:before:-translate-y-32 mt-5" data-aos="zoom-out-down">
                    <span className="relative z-10">Get in Touch </span>
                </button>
            </div>
            <SectionCarousel />
        </div>
    )
}

export const SectionCarousel = () => {
    return (
        <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            arrows={false}
            showDots={false}
            className="pb-4"
        >
            <div className='w-full py-5'>
                <h1 className='text-md px-5 py-5'>
                    The Cool Air system has transformed our work environment. It maintains perfect temperature levels throughout the day,
                    and we've seen a noticeable drop in energy costs. Highly recommended for large office spaces.
                </h1>
                <div className='flex items-center px-5 py-5'>
                    <Stack direction="row" spacing={2}>
                        <div className='flex items-center gap-3'>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            <span>CEO Vinea</span>
                        </div>
                    </Stack>
                </div>
            </div>
            <div className='w-full py-5'>
                <h1 className='text-md px-5 py-5'>
                    The Cool Air system has transformed our work environment. It maintains perfect temperature levels throughout the day,
                    and we've seen a noticeable drop in energy costs. Highly recommended for large office spaces.
                </h1>
                <div className='flex items-center px-5 py-5'>
                    <Stack direction="row" spacing={2}>
                        <div className='flex items-center gap-3'>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            <span>CEO Vinea</span>
                        </div>
                    </Stack>
                </div>
            </div>
            <div className='w-full py-5'>
                <h1 className='text-md px-5 py-5'>
                    The Cool Air system has transformed our work environment. It maintains perfect temperature levels throughout the day,
                    and we've seen a noticeable drop in energy costs. Highly recommended for large office spaces.
                </h1>
                <div className='flex items-center px-5 py-5'>
                    <Stack direction="row" spacing={2}>
                        <div className='flex items-center gap-3'>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            <span>CEO Vinea</span>
                        </div>
                    </Stack>
                </div>
            </div>
        </Carousel>
    )
}

export const HistoryOFDevelopment = () => {
    return (
        <div className=''>
            <h1 className='text-3xl md:text-5xl font-semibold'>History of development</h1>
            <p className='w-[100%] text-md mt-2'>Creation and Development (1985-2024)
                Rise in self-reliance, grow in self-improvement </p>

            <TimelineDevelopment />
        </div>
    )
}


export const TimelineDevelopment = () => {
    return (
        <div className="px-4 md:px-12 lg:px-24 py-8">
            <Timeline position="alternate">
                {[
                    {
                        year: '1985',
                        text: 'MR. TAN and MR. Yamamoto founded the trading business of Fujiaire Malaysia',
                    },
                    {
                        year: '1993',
                        text: 'Fujiaire entered the air conditioning business',
                    },
                    {
                        year: '1997',
                        text: 'Fujiaire opened its RAC Factory in Kuala Lumpur, and within three years, it had become the No.1 popular local brand in Malaysia',
                    },
                    {
                        year: '2000',
                        text: 'Fujiaire began to enter the real estate industry. Now Fujiaire has become a major player in ASEAN',
                    },
                    {
                        year: '2010',
                        text: 'Fujiaire sold more than 30,000 units of air conditioners, becoming the first local air conditioner brand in ASEAN',
                    },
                ].map((item, index) => (
                    <TimelineItem key={index}>
                        <TimelineOppositeContent
                            sx={{
                                m: 'auto 0',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                            }}
                        >
                            <img
                                src={banner1}
                                alt="timeline"
                                className="w-40 md:w-60 lg:w-72 rounded shadow-md object-contain"
                            />
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="primary" />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <h3 className="text-lg font-semibold text-sky-600 mb-1">
                                In {item.year}
                            </h3>
                            <p className=" text-sm md:text-base text-gray-700">{item.text}</p>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </div>
    );
};