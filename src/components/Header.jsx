import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { navdata } from "../../data";
import logo from "../assets/images.png";
import { studiodata } from "../../data";

function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateCartCount = () => {
        const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
        setCartCount(cartItems.length);
    };

    updateCartCount(); 
    window.addEventListener("cartUpdated", updateCartCount);

    return () => window.removeEventListener("cartUpdated", updateCartCount);
}, []);


  return (
    <div>
      <nav className="navbar">
        <div className="contents w-[100%]  justify-between">
          <img src={logo} alt="Logo" className="logo md:ml-70px ml-30px" />

          {/* Desktop Navigation */}
          <ul className="nav-list hidden md:flex">
            {navdata.map((item, index) => (
              <li
                key={index}
                className="nav-item"
                onMouseEnter={() => setOpenDropdown(index)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <NavLink className="link" to={item.Link}>
                  {item.name === "Studio" ? (
                    <>
                      {item.name}
                      <sup className="p-[4px] text-[#ee5f73]">NEW</sup>
                    </>
                  ) : (
                    item.name
                  )}
                </NavLink>

                {openDropdown === index &&
                  (item.name === "Studio" && studiodata.length > 0 || item.dropdown?.length > 0) && (
                    <div className="mega-dropdown">
                      {item.name === "Studio" && studiodata.length > 0 ? (
                        <div className="dropdown-imgs">
                          {studiodata.map((studioItem, studioIndex) => (
                            <NavLink to="/studio" key={studioIndex}>
                              <div className="flex flex-col items-center">
                                <img src={studioItem.img1} alt="Studio Image 1" />
                                <p className="text-[#535766] text-[16px] p-4">{studioItem.des}</p>
                                <img className="h-[274px] w-[514px]" src={studioItem.img2} alt="Studio Image 2" />
                              </div>
                            </NavLink>
                          ))}
                        </div>
                      ) : (
                        item.dropdown?.map((category, subIndex) => (
                          <div key={subIndex} className="dropdown-column">
                <h4 className="dropdown-title">{category.title}</h4>
            {category.items.length > 0 && (
       <div> 
         {category.items.map((subItem, i) => (
              <div key={i}>
                  <NavLink to={`${item.Link}/${subItem}`} className="dropdown-item">
                      {subItem}     
                         </NavLink>
        </div>
      ))}
       </div>
           )}
           </div>
                ))
             )}
                 </div>
                  )}
              </li>
            ))}
          </ul>

          <div className="searchbar hidden xl:block">
            <input type="search" className="searchbox" placeholder="Search for Products, Brands and more" />
          </div>

          <ul className="nav-list flex align-right" style={{ paddingLeft: "0" }}>
            <li>
              <NavLink className="link flex flex-col items-center" to="/">
                <i className="fa-regular fa-user text-[16px]"></i>
                <p className="hidden md:block">Profile</p>
              </NavLink>
            </li>

            <li>
              <NavLink className="link flex flex-col items-center" to="/wishlist">
                <i className="fa-regular fa-heart text-[16px]"></i>
                <p className="hidden md:block">Wishlist</p>
              </NavLink>
            </li>

            <li className="relative">
              <NavLink className="link flex flex-col items-center" to="/Cart">
                <i className="fa-solid fa-bag-shopping text-[16px] relative"></i>
                {cartCount > 0 && (
                  <span className="absolute top-[22px] right-[10px] lg:right-[18px] bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
                <p className="hidden md:block">Bag</p>
              </NavLink>
            </li>

            {/* Hamburger Menu Button (Rightmost) */}
            <li className="md:hidden ml-4 flex items-center justify-center mr-[25px]">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-xl focus:outline-none">
                <i className="fa-solid fa-bars"></i>
              </button>
            </li>
          </ul>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-menu  md:hidden absolute top-[100%] left-0 bg-white w-[70%] h-[800px] shadow-md">
            <ul>
              {navdata.map((item, index) => (
                <li key={index} className="py-2 border-b border-gray-200 text-[#454343]">
                  <NavLink to={item.Link} className="block text-lg p-2" onClick={() => setIsMenuOpen(false)}>
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Header;