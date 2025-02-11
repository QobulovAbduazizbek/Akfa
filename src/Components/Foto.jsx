import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-rotate.css";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgVideo from "lightgallery/plugins/video";
import lgShare from "lightgallery/plugins/share";
import lgRotate from "lightgallery/plugins/rotate";
import React from 'react';
import foto1 from "../Img/foto1.webp";
import foto2 from "../Img/foto2.webp";
import foto3 from "../Img/foto3.webp";
import foto4 from "../Img/foto4.webp";

// Example SVG search icon
const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
);

const Foto = () => {
    const images = [foto1, foto2, foto3, foto4]; // Array of images

    // Function to render the gallery items
    const renderGallery = () => {
        return images.map((image, index) => (
            <a href={image} key={index} data-lg-item={`{"src": "${image}"}`} className="group w-full m-5 h-[500px] overflow-hidden relative inline-block cursor-pointer rounded-xl mx-auto">
                <img src={image} alt={`Gallery item ${index}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <SearchIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
            </a>
        ));
    };

    return (
        <div className="w-full max-w-[1450px] mx-auto py-3 px-5">
            <div className="my-20">
                <h3 className="text-5xl font-bold opacity-90 mb-5">Установили более 3000 окон</h3>
                <p className="font-medium text-xl opacity-60">Для изготовления своей продукции мы используем только самые высококачественные оригинальные<br /> европейские комплектующие</p>
            </div>
            <LightGallery
                speed={500}
                plugins={[lgThumbnail, lgShare, lgRotate, lgVideo, lgAutoplay, lgZoom]}
                elementClassNames="grid grid-cols-2 gap-4 md:gap-9 pb-14"
                escKeyClose={true} // Enable ESC key to close the gallery
                download={false} // Disable download option
                zoom={true} // Enable zoom functionality
            >
                {renderGallery()}
            </LightGallery>
        </div>
    );
};

export default Foto;
