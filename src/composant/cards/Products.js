import React, {useState,useEffect} from 'react'
import axios from "axios";
import Card from "./Card";
import './card.scss';




function Products() {



    const [products,setproducts]=useState([])

    useEffect(()=>{
        async function fetchProducts(){
            const{data}=await axios.get('/api/produits')
            setproducts(data)
        }
        fetchProducts()

    },[])

    return (
       <div className="container_card">
           {products.map(product=>(
               <Card title={product.title} images={product.images} new_price={product.price} devise={product.devise} product={product}/>

               )
           )}

        </div>



    )
}

export default Products