


import React, { useState } from 'react'

const Product = () => {
    const [product, setProduct] = useState("");
    const [data, setData] = useState(null);
    const [price, setPrice] = useState("");
    const [desc, setDesc] = useState("");




    const handleSubmit = (e) => {
        e.preventDefault();
        setData({ product, price, desc});
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h1>Product Form</h1>
                <div>
                    <label>Product Name: </label>
                    <input
                        type="text"
                        placeholder="product"
                        value={product}
                        onChange={(e) => setProduct(e.target.value)}
                    />
                    <label>Price: </label>
                    <input
                        type="number"
                        placeholder="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <label>Description: </label>
                    <input
                        type="text"
                        placeholder="description"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                </div>
               
                <button type="submit">Submit</button>
            </form>

            <div>
            <h1>Showing form data</h1>
                
                {data !== null && (
                    
                    <div>
                        <h3>Product: {data.name}</h3>
                        <h3>Price: {data.email}</h3>
                        <h3>Description: {data.street}</h3>
                        
                    </div>
                )}
            </div>
        </div>
    )
}

export default Product;


