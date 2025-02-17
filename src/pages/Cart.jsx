import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const baseurl = "https://technolitics-s3-bucket.s3.ap-south-1.amazonaws.com/websitebuilder-s3-bucket/";

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isSuccessOpen, setIsSuccessOpen] = useState(false);
    const [formData, setFormData] = useState({ name: "", phone: "", email: "", address: "", paymentMethod: "COD" });

    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }
    }, []);

    const updateCart = (updatedCart) => {
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const increaseQuantity = (id) => {
        const updatedCart = cartItems.map((item) =>
            item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );
        updateCart(updatedCart);
    };

    const decreaseQuantity = (id) => {
        const updatedCart = cartItems.map((item) =>
            item.id === id ? { ...item, quantity: Math.max(1, (item.quantity || 1) - 1) } : item
        );
        updateCart(updatedCart);
    };

    const removeFromCart = (id) => {
        const updatedCart = cartItems.filter((item) => item.id !== id);
        updateCart(updatedCart);
    };

    const totalAmount = cartItems.reduce((total, item) => total + item.price * (item.quantity || 1), 0);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const placeOrder = () => {
        setIsFormOpen(true);
    };

    const confirmOrder = () => {
        const orderData = cartItems.map(({ img, ...item }) => item); // Remove images from the data being sent

        console.log("Order Details:", {
            ...formData,
            totalAmount,
            items: orderData,
        });

        setIsFormOpen(false);
        setIsSuccessOpen(true);
        localStorage.removeItem("cart");
        setCartItems([]);
    };

    return (
        <div className="w-[100%] items-center flex justify-center">
            <div className="xl:p-8 xl:pt-[150px] pt-[100px] m-1 xl:w-7/10 xl:flex items-start justify-center">
                <div className="xl:w-[65%] xl:mr-[20px]">
                    <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

                    {cartItems.length === 0 ? (
                        <p>Your cart is empty. <NavLink to="/">Go Shopping</NavLink></p>
                    ) : (
                        cartItems.map((item, index) => (
                            <div key={index} className="border border-gray-200 relative mb-2 flex items-center p-1">
                                <img src={baseurl + item.img} alt={item.name} className="w-30 h-[150px] object-cover mr-4" />
                                <div>
                                    <p className="text-[14px] font-medium">{item.name}</p>
                                    <p className="text-[12px] text-[#535766]" dangerouslySetInnerHTML={{
                                        __html: item?.description
                                            ? item.description.length > 80
                                                ? item.description.slice(0, 80) + "..."
                                                : item.description
                                            : "No description available"
                                    }} />
                                    <div className="flex items-center my-4">
                                        <button className="bg-gray-300 px-3 py-1 rounded" onClick={() => decreaseQuantity(item.id)}>-</button>
                                        <span className="mx-4">{item.quantity}</span>
                                        <button className="bg-gray-300 px-3 py-1 rounded" onClick={() => increaseQuantity(item.id)}>+</button>
                                    </div>
                                    <p className="text-lg font-semibold">₹{item.price * (item.quantity || 1)}</p>
                                    <p className="text-[12px]"><span className="font-[700]">14 days</span> return available</p>
                                    <button
                                        className=" text-black absolute top-[0px] right-[10px] text-[28px] rounded"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        &times;
                                    </button>
                                </div>
                            </div>
                        ))
                        
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className="border border-gray-200 relative mb-2 flex flex-col mt-[50px] p-2 xl:w-[35%]">
                        <h2 className="text-[12px] font-bold text-[#565535] px-3 mb-4">Price Details</h2>
                        <div className="flex p-4 justify-between text-[14px] font-semibold mb-4">
                            <span className="text-[#565535] font-[400]">Total MRP</span>
                            <span>₹{totalAmount}</span>
                        </div>
                        <button
                            className="w-full bg-[#ff3f63] text-white py-2 rounded-[3px] text-lg font-semibold "
                            onClick={placeOrder}
                        >
                            Place Order
                        </button>
                    </div>
                )}
            </div>

            {/* Order Form Modal */}
            {isFormOpen && (
                <div className="fixed bg-white inset-0 flex justify-center items-center  bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg m-auto xl:max-w-[550px] shadow-lg">
                        <h3 className="text-lg font-bold mb-3">Enter Your Details</h3>
<form action="https://formspree.io/f/mnnjoadw" method="post">
                        <input type="text" name="name" placeholder="Full Name" className="w-full p-4  my-4 border border-gray-300 rounded-md mb-2" value={formData.name} onChange={handleInputChange} />
                        <input type="text" name="phone" placeholder="Phone Number" className="w-full p-4 my-4 border border-gray-300 rounded-md mb-2" value={formData.phone} onChange={handleInputChange} />
                        <input type="email" name="email" placeholder="Email (optional)" className="w-full my-4 p-4 border border-gray-300 rounded-md mb-2" value={formData.email} onChange={handleInputChange} />
                        <textarea name="address" placeholder="Address" className="w-full p-4 mt-4 border border-gray-300 rounded-md mb-2" value={formData.address} onChange={handleInputChange} />
                        <input type="pincode" name="pincode" placeholder="Pincode " className="w-[49%] mr-2 mb-4 p-4 border border-gray-300 rounded-md mb-2"  onChange={handleInputChange} />
                        <input type="landmark" name="pincode" placeholder="Landmark " className="w-[49%] mb-4 p-4 border border-gray-300 rounded-md mb-2"  onChange={handleInputChange} />
<div className="flex">
                        <select name="paymentMethod" className="w-[40%] p-2 h-[50px] mr-2  border border-gray-300 rounded-md " value={formData.paymentMethod} onChange={handleInputChange}>
                            <option value="COD">Cash on Delivery</option>
                            <option value="UPI">UPI</option>
                            <option value="Credit Card">Credit Card</option>
                            <option value="Debit Card">Debit Card</option>
                        </select>

                        <button className="w-full bg-[#ff3f63] text-white py-2 rounded-md" onClick={confirmOrder}>Confirm Order</button>
                   </div></form> </div>
                </div>
            )}

            {/* Success Modal */}
            {isSuccessOpen && (
                <div className="fixed inset-0 flex justify-center items-center h-[100vh] w-[100vw] p-[100px] bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-lg font-bold mb-3 text-center">🎉 Congratulations! Your order is placed successfully. 🎉</h3>
                        <button className="w-full bg-[#ff3f63] text-white py-2 rounded-md mt-4" onClick={() => setIsSuccessOpen(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
