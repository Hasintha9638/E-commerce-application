import { use, useEffect, useState } from "react";
import Product from "../components/Product";

const ProductPage = () => {
    const [products, setProducts] = useState(null);
    const [cart , setCart] = useState([]);
    useEffect(() => {
        fetch('/api/products')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);


    return (
        <>
        <div>
            <h1>Product Page</h1>
        {
            products && products.map(product => (
                <Product key={product.id} product={product} setCart={setCart} />
            ))

        }
         </div>

        </>
    );

}

export default ProductPage;