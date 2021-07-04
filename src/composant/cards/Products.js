import React, {useState,useEffect} from 'react'
import axios from "axios";
import Card from "./Card";
import './card.scss';




function Products() {



    const [products,setproducts]=useState([])

    useEffect(()=>{
        async function fetchProducts(){
            const{data}=await axios.get('/api/produits/')
            setproducts(data)
        }
        fetchProducts()

    },[])
    console.log(products)

    return (
       <div className="container_card">
           {products.map((product)=>(

                    <Card title={product.nom} images={product.image} new_price={product.prix} product={product}/>


           )

           )}

        </div>



    )
}

export default Products



