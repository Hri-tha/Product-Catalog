import React from "react";
import "./Product.css";
import pro1 from "./jeans1.avif";
import pro2 from "./shirt.jpg";
import pro3 from "./onepece.jpg";
import { useStateValue } from "./StateProvider";

function Product() {
  const [{ basket }, dispatch] = useStateValue();

  const products = [
    {
      id: 1,
      name: "Male jeans",
      price: "$10.99",
      image: pro1,
    },
    {
      id: 2,
      name: "Shirt",
      price: "$19.99",
      image: pro2,
    },
    {
      id: 3,
      name: "Girls Dress",
      price: "$14.49",
      image: pro3,
    },
    {
        id: 3,
        name: "Girls Dress",
        price: "$14.49",
        image: pro3,
      },
      {
        id: 3,
        name: "Girls Dress",
        price: "$14.49",
        image: pro3,
      },
      {
        id: 3,
        name: "Girls Dress",
        price: "$14.49",
        image: pro3,
      },
  ];

  const handleAddToCart = (product) => {
    // Dispatch an action to add the selected product to the basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      },
    });
  };

  const handleBuyNow = (productId) => {
    console.log(`Clicked Buy Now for product ${productId}`);
    // Add logic to handle buy now option
  };

  return (
    <div className="home">
      <div className="home__container">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img
              className="product__image"
              src={product.image}
              alt={product.name}
            />
            <div className="product__info">
              <p>{product.name}</p>
              <p className="product__price">{product.price}</p>
            </div>
            <div className="product__options">
              <button onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
              <button onClick={() => handleBuyNow(product.id)}>Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
