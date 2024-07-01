import React, { useEffect, useState } from 'react';
import Pagination from './Pagination/Pagination';

function ProductsList() {
  const [products, setProducts] = useState([]);
const [page,SetPage] = useState(1)
const [total , Settotal]=useState(0) 

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${(page - 1) * 10}`);

      const data = await response.json();
      setProducts(data.products);
      Settotal(data.total)
    //   console.log(data.total)
      console.log(total);
    };
    fetchProduct();
  }, [page]);

  return (
    <div>
      <h1>Products List:</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.map((product) => (
          <li
            key={product.id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '10px',
              marginBottom: '10px',
            }}
          >
            <h2 style={{ textAlign: 'center' }}>{product.title}</h2>
            <img
              src={product.thumbnail}
              alt={product.title}
              style={{ width: '50%', height: 'auto', alignSelf: 'center' }}
            />
            <span style={{ textAlign: 'center', width: '100%' }}>${product.price}</span>
          </li>
        ))}
      </ul>
      <Pagination total={total} page={page} setPage={SetPage} product={products} />
    </div>
  );
}

export default ProductsList;



