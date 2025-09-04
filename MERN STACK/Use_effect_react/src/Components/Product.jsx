import axios from 'axios'
import { useEffect,useState } from 'react';




const Product = () => {
    const [products, setProducts] = useState([]);

    async function getData() {
        const res = await axios.get("https://dummyjson.com/products");
        setProducts(res.data.products);
        console.log("rendering");
         
      }



      useEffect(()=>{
        getData();
      },[])

  return (
    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque et nisi excepturi esse adipisci in illum. Nisi eos praesentium, similique maiores beatae voluptate accusantium, velit cupiditate veritatis molestias sit sunt?
    </div>
  )
}

export default Product