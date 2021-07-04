import React from 'react'
import Products from "../cards/Products";
import Head from "../head/header";
import Footer from "../footer/footer_main";
import AddProduct from "../cards/AddProduct";

export default function Home() {
    return (
        <div>
            <Head />
        <div className="home_page">Bienvenue</div>  
        <Products/>
        <AddProduct/>
        <Footer />
        </div>
    )
}
