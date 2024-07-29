import { useEffect, useState } from 'react';
import './App.css';
import ComparisonTable from './ComparisonTable';
import ProductCard from './ProductCard';
import config from './config';


function AppFruits() {
  const [products, setProducts] = useState([
    {
      imageUrl : "avocados.jpg",
      name : "Avocados",
      price : 2.99
    },
    {
      imageUrl : "cherries.jpg",
      name : "Cherries",
      price : 2.99
    },
    {
      imageUrl : "watermelon.jpg",
      name : "Watermelon",
      price : 2.99
    }
  ]);

  // useEffect( () => {

  //   fetch( config.API_ROOT_PATH +"/all" )
  //   .then( response => response.json() )
  //   .then( json => setProducts( json ))
  //   .catch( e => console.error(e));

  //   console.log("Promisas paleistas");
  // }, [] );

  return (
    <div className="app">
      <h1>Compare Products</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
          <ComparisonTable products={products} />
    </div>
  );
}

export default AppFruits;
