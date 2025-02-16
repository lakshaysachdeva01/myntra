import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import WishlistButton from "../components/wishlist";
import { getProjectId } from "../projectid";
import SwiperBanner from "../components/SwiperBanner";
const baseurl = "https://technolitics-s3-bucket.s3.ap-south-1.amazonaws.com/websitebuilder-s3-bucket/";

function Productdetails() {
    const { slug } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const projectId = getProjectId();
        const fetchProducts = async () => {
            try {
                console.log("Fetching product for slug:", slug);
                
                const response = await axios.get(
                    `https://api.webbuilder.technolitics.com/api/v1/website-builder/website/product-management/get-product-by-slug/${projectId}?slug=${slug}`
                );

                console.log("Full API Response:", response.data);
                
                if (response.data?.data) {
                    setData(response.data.data);
                } else {
                    setError("Invalid product data.");
                }

            } catch (err) {
                console.error("Error fetching product:", err.response?.data || err.message);
                setError("Product details not available.");
            } finally {
                setLoading(false);
            }
        };

        if (slug) {
            fetchProducts();
        }
    }, [slug]);

    const addToCart = (product) => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        
        const existingProductIndex = cart.findIndex(item => item.id === product.id);
        
        if (existingProductIndex !== -1) {
            cart[existingProductIndex].quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        
        localStorage.setItem("cart", JSON.stringify(cart));
    
        // Dispatch event to notify other components
        window.dispatchEvent(new Event("cartUpdated"));
    };
    
    

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!data) return <p>No product found.</p>;

    return (
        <div>
            <p className="pt-20 text-[14px] text-[#565335] hidden md:block capitalize m-8">
                <NavLink to="/living">Home & Living</NavLink> /
                <NavLink to={`/Productlist/${data.category.name}`}>{data.category.name}</NavLink> /
                <span className="font-[700]">{data.title}</span>
            </p>

            <div className="lg:flex  lg:m-8">
                {/* Product Images */}
                <div className="lg:w-[60%] gap-[10px]  flex-wrap hidden md:flex">
  {data.arrays?.arrayOne?.length > 0 ? (
    data.arrays.arrayOne.map((item, index) => {
      // Ensure correct image path
      const imageUrl = item.startsWith("http") ? item : `${baseurl}${item}`;

      return (
        <div className="w-[49%] max-h-[500px]" key={index}>
          <img src={imageUrl} alt="brand" className="w-full h-auto" />
        </div>
      );
    })
  ) : (
    <p>No images available.</p>
  )}
</div>

<SwiperBanner className="md:hidden pb-8 pt-[80px]" images={data.arrays.arrayOne.map(item =>
  item.startsWith("http") ? item : `${baseurl}${item}`
)} />

                {/* Product Details */}
                <div className="lg:w-[40%] p-[20px] pt-[0]">
                    <h3 className="text-[16px] md:text-3xl text-[#282c3f] text-[24px] font-[700] pb-10">
                        {data.title}
                    </h3>
                    <p
                        className="text-[14px] md:text-[20px] font-[400] pb-10 text-[#535766] leading-[20px] md:leading-[32px]"
                        dangerouslySetInnerHTML={{ __html: data?.description || "No description available" }}
                    />
                    <span className="text-[24px] font-[700] text-[#282c3f]">
                        ₹{data?.sellingPrice ?? ""}
                    </span>
                    <br />
                    <div className="text-[#03a685] font-[600] pb-20">Inclusive of all taxes</div>

                    {/* ADD TO BAG Button */}
                    <div className="md:relative fixed bottom-[0] bg-white w-[100%] left-0 justify-center py-[10px] flex text-[#535766] font-[700] uppercase">
                    <button
  className="h-[40px] w-[50%] md:w-[290px] rounded-sm border border-gray-300 mx-[2px] md:mx-2 bg-[#ff3f6c] text-white"
  onClick={() => {
    if (data?.arrays?.arrayOne?.[0]) {
      addToCart({ 
        id: data._id, 
        img: data.arrays.arrayOne[0], 
        name: data.title, 
        price: data.sellingPrice ,
        description:data.description,
        slug:data.seoDetails.slug
      });
    } else {
      console.warn("Image not available!");
    }
  }}
>
  ADD TO BAG
</button>





                        <WishlistButton className="max-w-[40%] md:w-[100%]" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Productdetails;
