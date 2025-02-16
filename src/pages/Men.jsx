import Swiperbanner from "../components/Swiperbanner";
import Brands from "../components/Brands";
import React from "react";
import Category from "../components/Category";
import Layout from "../components/layout";
import { topbrands, category,luxe,ethnic,sports, footwear, accessories, swiperimages } from "../../data";


function Men() {
   
    return(

        <>
        <div>
            apicall();
            
        <Swiperbanner images={swiperimages} hoverPlay={false} className="my-[100px]" imgClassName="pb-10"/>
        <Brands/>
        <Category data={category}  title="categories to bag" />
        <Layout data={topbrands} title="Explore top brands"/>
        <Category data={luxe} title="myntra luxe" />
        <Layout data={ethnic} title="trending in indian wear"/>
        <Layout data={sports} title="trending in sports wear"/>
        <Layout data={footwear} title="trending in footwear"/>
        <Layout data={accessories} title="trending in accessories"/>
       </div>
        </>
    )
        
}

export default Men;