import React from "react";
import WishlistButton from "./wishlist";
import { NavLink } from "react-router-dom";
import SwiperBanner from "./SwiperBanner"; // Import your Swiper component

const baseurl = "https://technolitics-s3-bucket.s3.ap-south-1.amazonaws.com/websitebuilder-s3-bucket/";

const ProductBox = ({ product }) => {
    const images = product?.arrays?.arrayOne?.map(img => `${baseurl}${img}`) || []; 

    return (
        <NavLink className="w-[50%] md:w-auto" to={`/Productdetails/${product.seoDetails.slug}`}>
            <div className="group w-[100%] md:w-[210px] relative h-[360px] hover:shadow-[0px_0px_3px_rgb(0,0,0,0.2)] md:m-4">
                
                {/* Use SwiperBanner Component */}
                <SwiperBanner imgClassName="h-[280px] object-cover"  images={images} hoverPlay={true} />

                <div className="p-[8px] w-[100%]">
                    <div className="min-w-[100%] z-99 md:w-[210px] absolute opacity-0 h-[50px] pt-[8px] flex justify-center left-0 group-hover:opacity-100 mt-[-50px] bg-white">
                        <WishlistButton className="opacity-0 absolute"/>
                    </div>

                    <h4 className="text-[14px] font-[700] text-[#282c3f]">
                        {product?.title
                            ? product.title.length > 18 
                                ? product.title.slice(0, 18) + "..."
                                : product.title
                            : "No Title"}
                    </h4>

                    <p className="text-[14px] text-[#535766]" dangerouslySetInnerHTML={{ 
                        __html: product?.description
                            ? product.description.length > 26 
                                ? product.description.slice(0, 26) + "..."
                                : product.description
                            : "No description available"
                    }} />

                    <span className="text-[14px] font-[700] text-[#282c3f]">
                        ₹{product?.sellingPrice ?? ""}
                    </span>
                </div>
            </div>
        </NavLink>
    );
};

export default ProductBox;
