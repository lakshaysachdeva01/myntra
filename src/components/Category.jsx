
import React from "react";
import SwiperBanner from "./SwiperBanner";
function Category({ data, title   }) {
  
  return (
<>
<div className="container ">
  
    <div className="categorycontainer">
    <h3>{title}</h3>
    <div className="categorybox">
<div className="hidden min-[451px]:block" >
  <div className="categoryimage">

{data.map((item, index) => (
              <div key={index} className="imagess">
                <img src={item.img} alt="brand" />
              </div>
            ))}</div>
</div>
 
<SwiperBanner images={data.map(item => item.img)} 
  hoverPlay={false} 
  className="hidden max-[450px]:block w-[100%]" 
  imgClassName="pb-10 w-[250px] justify-center items-center m-auto" 
/>

    </div>
    </div>
</div>

</>

    );
}

export default Category;