import React from "react";
import Product from "../components/Productcard";
import useProducts from "../apicall";
import img from "../assets/bannerliving.webp"
import { sidebar } from "../../data";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
    return (
      <div>
        {sidebar.map((category, index) => (
          <div key={index}>
            <h3>{category.name || "Category"}</h3> {/* If each category has a name */}
            {category.items.map((subItem, i) => (
              <div  key={i}>
                <NavLink to={`/category`}>
                  <p className="text-[#3e4152] text-[15px] font-[400] py-[2px]">{subItem}</p> 
                </NavLink>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };
  
function Living() {
  const categoryId = "66dbecddcb3d9f4f04426320";
  const { products, loading, error } = useProducts(categoryId); 

    return (
        <>
        <div className="flex justify-center">
           <img className='w-[92vw] flex justify-center h-[100%] pt-30' src={img} alt={`Slide`} />
           </div>
           <div className="lg:max-w-9/10 mx-auto flex justify-center">
                <div className="w-[100%] lg:w-[70%]">
                    <h3 className="p-10 uppercase text-[#3e4152] tracking-[0.15em] text-[14px] lg:text-[1.8em] font-[700] max-h-[5em]">nice to see you , come on in ! </h3>
                   <div className="flex ">
                   {loading && <p>Loading products...</p>}
            {error && <p>Error: {error}</p>}
            <Product data={products} />
                   </div>
                </div>
                <div className="hidden lg:block w-[30%] pl-9 ">
               <Sidebar/>
                </div>
           </div>
          
        </>
    );
}

export default Living;
