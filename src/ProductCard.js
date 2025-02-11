import './ProductCard.css';


function ProductCard({ product }) {
    return (
      <div className="product-card">
        <img src={ 'images/' + product.imageUrl} alt={product.name} />
        <h3 >{product.name}</h3>
        <p >{product.price}</p>
      </div>
    );
  }

  export default ProductCard;