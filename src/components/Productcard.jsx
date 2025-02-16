import React from "react";
import { NavLink } from "react-router-dom";

const Product = ({ data }) => {
    const imagePrefix = "https://technolitics-s3-bucket.s3.ap-south-1.amazonaws.com/websitebuilder-s3-bucket/";

    return (
        <div>
            {data && data.length > 0 ? (
          <div className="flex flex-wrap lg:gap-[10px]">
         {data.map((product, index) => {
             const imageUrl = product?.icon ? `${imagePrefix}${product.icon}` : null;
             const productname = product?.name || "#"; // Prevents broken links
             // 
        return (
                 <div key={index}  className="w-[50%] lg:w-[49%] mb-[30px] overflow-hidden ">
                 <NavLink to={`/Productlist/${productname}`}>
                        
                   {imageUrl ? (
                     <img className="h-[140px] lg:h-[300px] w-[100%] object-cover hover:scale-[1.02]" src={imageUrl} alt={product?.name || "Product"} />
                ) : (
                    <p>No Image Available</p>
                       )}
       <p className="text-center my-[20px] text-[#3e4152] text-[1.2em]">{product?.name || "No Title"}</p>
                   </NavLink>
                  </div>
            );
                    })}
                </div>
            ) : (
                <p>No products found</p>
            )}
        </div>
    );
};

export default Product;
