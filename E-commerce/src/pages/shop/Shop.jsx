import React, { useState } from "react";
import "./Shop.css";
import { category } from "../../Category";
import { dummydata } from "../../dummydata";
import Product from "../../components/Product/Product";
import { FaShopify } from "react-icons/fa6";

function Shop() {
    let [cate, setCate] = useState(dummydata);
      function filterProduct(category){
        if(category==="All"){
          setCate(dummydata)
        }else{
          const updatedata = dummydata.filter((item) => item.category === category);
        setCate(updatedata);
        }
        
      }
  return (
    <div className="shop">
      <div className="heading">
        <span>Shop</span>
        <FaShopify />
      </div>
      <div className="category-section">
        {category.map((item) => (
          <div
            className="category-card" 
            onClick={() => {
              filterProduct(item.name);
            }}
          >
            <img src={item.Image} alt="" />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <div className="product-section">
        {cate.map((item) => (
          <Product name={item.name} price={item.price} image={item.image} id={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
