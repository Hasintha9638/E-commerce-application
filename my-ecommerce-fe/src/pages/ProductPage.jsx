import { useEffect, useState } from "react";
import Product from "../components/Product";
import Cart from "../components/ViewCart";

const ProductPage = () => {
    const [products, setProducts] = useState(null);
    const [cart, setCart] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:3000/api/products')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <>
            <div>
                <h1>Product Page</h1>
                <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ flex: 1 }}>
                    <h1>Products</h1>
                    {products && products.map(product => (
                        <Product key={product.id} product={product} setCart={setCart} />
                    ))}
                </div>

                <div style={{ flex: 1 }}>
                    <Cart cart={cart} setCart={setCart} />
                </div>
            </div>
            </div>
        </>
    );
}

export default ProductPage;