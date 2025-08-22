import React from 'react';
import { StickyNavbar } from '../components/Navbar';
import { Banners } from './HomePage';
import { Footer } from '../components/Footer';
import { RelatedProducts } from './ProductPage';
import banner1 from '../assets/images/banner/1734663252864-Goal Plus Trading.jpg'


export const NewPage = () => {
    return (
        <div>
            <StickyNavbar />
            <Banners backgroundImage={'https://images.pexels.com/photos/1578333/pexels-photo-1578333.jpeg'} />
            <div className='px-8 py-5 md:px-15'>
                <RelatedProducts />
            </div>
            <FujiaireHero />
            <Footer />
        </div>
    );
}


export const FujiaireHero = () => {
    return (
        <div
            className="w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${banner1})` }}
        >
            <div className="w-full h-ful">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-20 text-white">
                    {/* Left Text Section */}
                    <div className="md:w-1/2">
                        <h1 className="text-4xl md:text-5xl font-semibold mb-4">Fujiaire</h1>
                        <p className="text-lg mb-8">
                            Fujiaire is a company that imports air conditioners.
                        </p>

                        <div className="flex gap-4">
                            <button className="px-6 py-2 rounded-full border border-white hover:bg-white hover:text-black transition-all">
                                Reference
                            </button>
                            <button className="px-6 py-2 rounded-full border border-white hover:bg-white hover:text-black transition-all">
                                Product
                            </button>
                        </div>
                    </div>

                    <div className="md:w-1/2 hidden md:block" />
                </div>
            </div>
        </div>
    );
};