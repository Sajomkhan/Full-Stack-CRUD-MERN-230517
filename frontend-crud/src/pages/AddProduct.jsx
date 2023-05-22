import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const URL = `https://rest-api-mern-crud-product-230515.onrender.com/api/product/`;

const AddProduct = () => {
  const [products, setProducts] = useState({
    title: "",
    price: null,
  });
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setProducts((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post(URL, products);
      navigate("/", { replace: true });
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="add-product">
      <h1 style={{ marginBottom: 50 }}>Add Product</h1>
      <form>
        <div>
          <label htmlFor="title">Product Name: </label>
          <input
            type="text"
            placeholder="Product Name"
            name="title"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="price" style={{ marginRight: 8 }}>
            Product Price:{" "}
          </label>
          <input
            type="text"
            placeholder="Price"
            name="price"
            onChange={handleChange}
          />
        </div>
        <div className="add-button-div">
          <button
            className="add"
            type="submit"
            onClick={handleClick}
            style={{ width: "10rem", marginTop: "2rem", padding: "8px" }}>
            Add Product
          </button>
        </div>
      </form>
      {error && "Something went wrong!"}
    </div>
  );
};

export default AddProduct;
