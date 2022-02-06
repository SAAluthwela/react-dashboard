import React from "react";
import "./newProduct.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="newProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="newProductItemImg">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="newProductItem">
          <label>Name</label>
          <input
            className=""
            type="text"
            placeholder="iphone 13 pro max"
          ></input>
        </div>
        <div className="newProductItem">
          <label>Stock</label>
          <input className="" type="text" placeholder="123"></input>
        </div>
        <div className="newProductItem">
          <label>Active</label>
          <select className="newProductSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newProductButton">Create</button>
      </form>
    </div>
  );
}
