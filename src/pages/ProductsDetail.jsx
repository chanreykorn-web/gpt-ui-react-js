import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from "react-router-dom";
import { StickyNavbar } from '../components/Navbar';
import ChooseUsComponents, { ChooseUsCard, ChooseUsSection } from '../components/ChooseUsComponents';
import AirIcon from '@mui/icons-material/Air';
import CastIcon from '@mui/icons-material/Cast';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import AcUnitSharpIcon from '@mui/icons-material/AcUnitSharp';
import { GeneralService } from './SerivcePage';
import { RelatedProducts } from './ProductPage';
import { Footer } from '../components/Footer';
import { CoolComfortSection } from './CoolComfortSection';
import { Loading } from '../components/Loading';
import { mokup } from '../data/mokup.js';




export const ProductsDetail = () => {
    const features = [
        {
            icon: <CastIcon style={{ fontSize: 40 }} className="text-fujiaire-text" />,
            title: 'Energy Efficiency',
            description: 'Save more on bills with our low-power, high-performance cooling technology.',
        },
        {
            icon: <AirIcon style={{ fontSize: 40 }} className="text-fujiaire-text" />,
            title: 'Eco-Friendly Design',
            description: 'Sustainable materials and water-based cooling reduce your carbon footprint every day.',
        },
        {
            icon: <InvertColorsIcon style={{ fontSize: 40 }} className="text-fujiaire-text" />,
            title: 'Powerful Cooling',
            description: 'Advanced airflow system delivers rapid, consistent cooling even in peak summer heat.',
        },
        {
            icon: <AcUnitSharpIcon style={{ fontSize: 40 }} className="text-fujiaire-text" />,
            title: 'Quiet Operation',
            description: 'Enjoy peaceful environments thanks to our ultra-quiet, whisper-soft fan technology.',
        },
    ];
    return (
        <div className='overflow-y-hidden'>
            <StickyNavbar />
            <div className='px-8 py-5 md:px-15'>
                <ProductsDetailSection />
                <ChooseUsSection
                    title="Featured Products"
                    description="Cooler, somarter, better"
                />
                <ChooseUsCard features={features} />
                {/* <ChooseUsSection
                    title="Spaicication"
                    description="Let's clear the air"
                /> */}
                <GeneralService />
                <CoolComfortSection />
                <RelatedProducts products={"Related Products"} />
            </div>
            <Footer />
        </div>
    )
}




export const ProductsDetailSection = () => {
    const { id } = useParams();
    const location = useLocation();
    const [product, setProduct] = useState(location.state?.product || null);
    const [mainImage, setMainImage] = useState("");
    const [loading, setLoading] = useState(!location.state?.product);

    useEffect(() => {
        if (!product) {
            setLoading(true);
            // Find product in mokup array by id (id may be string or number)
            const found = mokup.find(item => String(item.id) === String(id));
            setProduct(found || null);
            setMainImage(found?.images?.[0] || "");
            setLoading(false);
        } else {
            setMainImage(product.images?.[0] || "");
            setLoading(false);
        }
    }, [id, product]);

    if (loading || !product) {
        return <Loading />;
    }

    return (
        <div className="">
            <h1 className="text-4xl text-fujiaire-text text-center mb-10 font-bold">
                {product.name}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* LEFT: Main image + thumbnails */}
                <div className="flex flex-col items-center w-full h-full">
                    <div className="w-full max-w-[600px] h-auto flex items-center justify-center mb-4">
                        <img
                            src={mainImage}
                            alt={product.name}
                            className="rounded shadow-lg w-full object-contain"
                        />
                    </div>

                    <div className="flex flex-wrap gap-3 mt-4 justify-center">
                        {product.images && product.images.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setMainImage(img)}
                                className="focus:outline-none"
                            >
                                <img
                                    src={img}
                                    alt={`Thumbnail ${idx + 1}`}
                                    className={`w-24 h-16 object-cover border rounded shadow-md transform transition duration-300
                    ${mainImage === img ? "border-blue-500 shadow-2xl scale-105" : "border-gray-300"}
                    hover:shadow-2xl hover:scale-105`}
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* RIGHT: Text */}
                <div>
                    <p className="text-fujiaire-text text-2xl mb-4">
                        {product.description}
                    </p>
                    <p className="text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsam in cupiditate maiores placeat nesciunt eum totam repudiandae assumenda, facilis nam cum expedita recusandae, nobis reiciendis quibusdam ipsum nulla voluptatibus sequi iste nostrum odio mollitia. Soluta rerum, vitae, sit voluptate fugiat fugit aliquam fuga laborum sequi aspernatur dignissimos debitis impedit.
                    </p>
                </div>
            </div>
        </div>
    );
};

