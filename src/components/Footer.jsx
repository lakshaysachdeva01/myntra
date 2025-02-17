import { navdata } from "../../data";
import React from "react";
import { NavLink } from "react-router-dom";
import android from "../assets/googleplay.png"
import apple from "../assets/appstore.png"
import org from "../assets/original.png"
import exchange from "../assets/exchange.png"
function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="upperlinks p-4">
                <div className="linkrow " style={{width:'20%'}}>
                    <div className="implink">
                        <h3>Online Shopping</h3>
                        {navdata.slice(0, 5).map((item, index) => (
                            <NavLink className="footerlink" key={index} to={item.Link}>
                                {item.name}
                            </NavLink>
                        ))}
                        <NavLink className="footerlink" to="/studio">Gift cards</NavLink>
                        <NavLink className="footerlink" to="/studio">Myntra Insider</NavLink>
                    </div>
                    <div className="implink">
                        <h3>Useful links</h3>
                        <NavLink className="footerlink" to="/studio">Blog</NavLink>
                        <NavLink className="footerlink" to="/studio">Career</NavLink>
                        <NavLink className="footerlink" to="/studio">Site Map</NavLink>
                        <NavLink className="footerlink" to="/studio">Corporate Information</NavLink>
                        <NavLink className="footerlink" to="/studio">Whitehat</NavLink>
                        <NavLink className="footerlink" to="/studio">Cleartrip</NavLink>
                    </div>
                </div>
                <div className="linkrow " style={{width:'20%'}}>
                    <div className="implink">
                    <h3>Customer Policies</h3>
                    <NavLink className="footerlink" to="/studio">Contact us</NavLink>
                    <NavLink className="footerlink" to="/studio">FAQ</NavLink>
                    <NavLink className="footerlink" to="/studio">T&C</NavLink>
                    <NavLink className="footerlink" to="/studio">Terms of Use</NavLink>
                    <NavLink className="footerlink" to="/studio">Track Orders</NavLink>
                    <NavLink className="footerlink" to="/studio">Shipping</NavLink>
                    <NavLink className="footerlink" to="/studio">Cancellation</NavLink>
                    <NavLink className="footerlink" to="/studio">Returns</NavLink>
                    <NavLink className="footerlink" to="/studio">Privacy Policy</NavLink>
                    <NavLink className="footerlink" to="/studio">Grievance Redressal</NavLink>
                    </div>
                </div>
                <div className="linkrow" style={{width:'32%'}}>
                    <div className="implink">
                        <h3>Experience myntra app on mobile</h3>
                    <div className="flex">
                        <img src={android} className="mr-1" alt="image" />
                        <img src={apple} alt="image" />
                    </div>
                    </div>
                    <div className="implink">
                        <h3>keep in touch</h3>
                    </div>
                </div>
                <div className="linkrow"  style={{width:'28%'}}>
                      <div className="flexbox">
                        <img src={org} alt="image" />
                        <p><span>100% original</span> guarantee for all products at myntra.com</p>
                      </div>
                      <div className="flexbox">
                        <img src={exchange} alt="image" />
                        <p><span>Return within 14days</span> of receiving your order</p>
                      </div>
                    </div>
                </div>
                <div className="lowerlinks m-2 p-2">
                    <h3 >popular searches</h3>
                   <p className="m-2" >Sherwani  Track Pants  Blazers  Sweaters For Men  Men Wedding Dresses  Kurta Pajama  Raincoats  Shorts  Trousers  Waistcoat  Inner Wear  Nightwear  Jeans  Shirts  Jogger Jeans  Men Suits  T Shirts  Sweatshirts  Jackets For Men  Tracksuits  Ripped Jeans  Ethnic Wear  Hoodies  Raksha Bandhan Gifts  Watches  Shoes  Belts  Swimwear  Dhotis  Boxers  Vests  Thermals  Socks  Shrugs  Bracelets  Rings  Sunglasses  Headphones  Wallets  Helmets  Caps  Mufflers  Gloves  Ties  Cufflinks  Men Sandals  Floaters  Flip Flops  Trunks  Bags</p>
                </div>
            </footer>

        </div>

    );
}

export default Footer;
