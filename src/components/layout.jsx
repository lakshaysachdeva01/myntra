import React from "react";
import SwiperBanner from "./Swiperbanner";
const Layout = ({ data, title }) => {
  return (
    <div className="container">
      <div className="categorycontainer">
        <h3>{title}</h3> {/* Dynamic Title */}
        <div className="hidden min-[451px]:block" >
        <div className="layoutbox">
          <div className="centerbox">
            {data.map((item, index) => (
              <div key={index} className="layoutimage">
                <img src={item.img} alt="brand" />
              </div>
            ))}
            </div>
        </div>
        </div>
        <SwiperBanner images={data.map(item => item.img)} 
  hoverPlay={false} 
  className="hidden max-[450px]:block w-[100%]" 
  imgClassName="pb-10 w-[250px] justify-center items-center m-auto" 
/>
      </div>
    </div>
  );
};

export default Layout;
