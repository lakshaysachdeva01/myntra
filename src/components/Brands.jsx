import React from "react"
import brand1 from "../assets/brand1.webp"
import brand2 from "../assets/brand2.webp"
import brand3 from "../assets/brand3.webp"
import brand4 from "../assets/brand4.webp"
import brand5 from "../assets/brand5.webp"
import brand6 from "../assets/brand3.webp"
import brand7 from "../assets/brand4.webp"
import brand8 from "../assets/brand5.webp"
import SwiperBanner from "./Swiperbanner"
function Brands() {
  const images = [
      brand1,
      brand2,
      brand4,
      brand3,
      brand5,   brand6,   brand7,   brand8,
     
    ];
  return (
<>
<div className="container">
    <h3>Biggest Deals on top brands</h3>
    <div className="imagebox">
      
<div className=" hidden min-[451px]:flex flex-wrap justify-center">
{images.map((item, index) => (
        <images  key={index} >
         <img src={item} alt="brand" />
        </images>
      ))}
</div>
<SwiperBanner images={images.map(item => item)}   className="hidden max-[450px]:block w-[100%]" 
  imgClassName="pb-10 w-[250px] justify-center items-center m-auto" 
 />
    </div>
</div>

</>

    );
}

export default Brands;