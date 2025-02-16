import React from "react";
import { NavLink, useParams } from "react-router-dom";
import useFetchProducts from "../apicallall";
import ProductBox from "../components/Productbox";
import { setProjectId } from "../projectid";
function ProductList() {
  const projectId = "66dbecddcb3d9f4f04426320"; 
  setProjectId(projectId);
    const { name } = useParams();
    
    const { products, loading, error } = useFetchProducts(projectId);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

const filteredProducts = products.filter((item) => item.category.name === name);

    if (!filteredProducts) return <p>No product found</p>;

    return (
        <div className="container text-black">
            <p className="text-[14px] md:text-[#565335] text-white capitalize p-8 pt-[110px] bg-[#d799cb]  md:bg-white" ><NavLink to="/living">Home & Living</NavLink>  /  <span className="font-[700]">{name} </span></p>
            <div className="container flex">
                <div className="w-[18%] border  md:block hidden border-gray-300 border-b-0">
                   <div className="border-b border-gray-300">
                   <div className="p-6">
  {["MEN", "WOMEN", "BOYS", "GIRLS"].map((label) => (
    <label key={label} className="flex items-center gap-3 my-1 cursor-pointer">
      <input
        type="radio"
        name="gender"
        value={label}
        className="hidden peer"
      />
      <span className="w-3.5 h-3.5 border border-gray-400 rounded-full flex items-center justify-center peer-checked:border-[#ff3f6c] peer-checked:bg-[#ff3f6c]">
        <span className="w-2.5 h-2.5 bg-white rounded-full opacity-0 p-[2px] peer-checked:opacity-100"></span>
      </span>
      <span className="text-gray-700 text-[13px] font-[700] ">{label}</span>
    </label>
  ))}
</div>
                   </div>
 <div className="p-8 flex flex-col">
<label>Price</label>
<input  className="text-[#ff3f6c]"  type="range" name="" id="" />
<p>₹ 0 - ₹ 50,000</p>
 </div>


                </div>
                <div className="w-[100%] md:w-[82%] flex flex-wrap">
                {filteredProducts.map((product) => (
                    <ProductBox key={product._id} product={product} />
                ))}
                </div>
            </div>
        </div>
    );
}

export default ProductList;
