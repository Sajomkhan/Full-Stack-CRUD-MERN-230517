import React, { useState } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";

const URL = `https://rest-api-mern-crud-product-230515.onrender.com/api/product/`;

const EditProduct = () => {
  const location = useLocation();
  const { _id, title, price } = location.state;

  const [products, setProducts] = useState({
    title: title,
    price: price,
  });
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setProducts((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(products);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(URL + _id, products);
      navigate("/", { replace: true });
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="add-product">
      <h1 style={{ marginBottom: 50 }}>Edit Product</h1>
      <form>
        <div>
          <label htmlFor="title">Product Name: </label>
          <input
            type="text"
            name="title"
            value={products.title}
            placeholder="Product Name"
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
            name="price"
            value={products.price}
            placeholder="Price"
            onChange={handleChange}
            required
          />
        </div>
        <div className="edit-button-div">
          <Link to="/">
            <button
              className="back"
              style={{ width: "10rem", marginTop: "2rem", padding: "8px" }}>
              &#8592; Back
            </button>
          </Link>
          <button
            className="update"
            onClick={handleClick}
            style={{ width: "10rem", marginTop: "2rem", padding: "8px" }}>
            Update Product
          </button>
        </div>
      </form>
      {error && "Something went wrong!"}
    </div>
  );
};

export default EditProduct;
