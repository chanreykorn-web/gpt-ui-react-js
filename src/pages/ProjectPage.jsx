import React from 'react';
import { StickyNavbar } from '../components/Navbar';
import { Banners } from './HomePage';
import { Footer } from '../components/Footer';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
// import { RelatedProducts } from './ProductPage';
import iterm1 from '../assets/images/card/4-Way Cassette Type.jpg'

export const ProjectPage = () => {
    return (
        <div>
            <StickyNavbar />
            <Banners backgroundImage={'https://images.pexels.com/photos/12196838/pexels-photo-12196838.jpeg'} />
            <div className='px-8 py-5 md:px-15'>
                <LabTabs />
            </div>
            <Footer />
        </div>
    );
}


export default function LabTabs() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const tabs = [
        { label: 'All', value: '1', type: 'all' },
        { label: 'Fujiair', value: '2', type: 'fujiair' },
        { label: 'Shop', value: '3', type: 'shop' },
    ];

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box
                    className="flex justify-center"
                    sx={{ borderBottom: 'none' }}
                >
                    <TabList
                        onChange={handleChange}
                        aria-label="related products tabs"
                        centered
                        sx={{
                            '.MuiTabs-indicator': {
                                display: 'none', // hide underline
                            },
                        }}
                    >
                        {tabs.map((tab) => (
                            <Tab key={tab.value} label={tab.label} value={tab.value} />
                        ))}
                    </TabList>
                </Box>

                {tabs.map((tab) => (
                    <TabPanel key={tab.value} value={tab.value}>
                        <RelatedProducts type={tab.type} />
                    </TabPanel>
                ))}
            </TabContext>
        </Box>
    );
}


const productData = [
    {
        title: 'Fujiair Pro AC',
        image: iterm1,
        category: 'fujiair',
    },
    {
        title: 'Fujiair Silent Cool',
        image: iterm1,
        category: 'fujiair',
    },
    {
        title: 'Smart Home Bundle',
        image: iterm1,
        category: 'shop',
    },
    {
        title: 'Cooling Fan V2',
        image: iterm1,
        category: 'shop',
    },
    {
        title: 'Deluxe AC Combo',
        image: iterm1,
        category: 'all',
    },
];

export const RelatedProducts = ({ type }) => {
    // Filter logic
    const filteredProducts =
        type === 'all'
            ? productData
            : productData.filter((item) => item.category === type);

    // Display name
    const titleMap = {
        all: 'All Products',
        fujiair: 'Fujiair Series',
        shop: 'Shop Items',
    };

    return (
        <div>
            {/* <h1 className="text-[32px] mt-5 mb-5 font-medium text-center">
                {titleMap[type] || 'Products'}
            </h1> */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProducts.map((item, index) => (
                    <div
                        key={index}
                        className="relative w-full h-64 shadow-2xl bg-red-100 rounded-2xl overflow-hidden group"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                            <div className="mb-6 px-4 py-2 bg-opacity-80 rounded-full text-black text-xl">
                                {item.title}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
