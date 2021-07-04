/*
import axios from "axios";


export default function card_main() {


    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [products,setproducts]=useState([])

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
        async function fetchProducts(){
            const {data}=await axios.get('http://localhost:8080/api/produits')
            setproducts(data)
        }
        fetchProducts()
    },[])

    return (
       <div className="container_card">
           {console.log(products.length)}
        </div>



    )
}

*/
