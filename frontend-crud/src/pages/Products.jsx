import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const URL = `https://rest-api-mern-crud-product-230515.onrender.com/api/product/`;

const Products = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const getAllProducts = async () => {
      try {
        const res = await axios.get(URL);
        setProductData(res.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };
    getAllProducts();
  }, []);

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(URL + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ marginTop: "1rem" }}>
      <h1 style={{ textAlign: "center" }}>List of Products</h1>
      <Link to="/add-product">
        <button
          className="add"
          style={{ width: "10rem", marginTop: "2rem", padding: "8px" }}>
          Add Product
        </button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>Sl.No.</th>
            <th>Products</th>
            <th>Price</th>
            <th>ID</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <h2 style={{ marginTop: 30, color: "blue" }}>Loading Data...</h2>
          ) : (
            !productData.length && (
              <h2 style={{ marginTop: 30, color: "red" }}>
                Server is not available!
              </h2>
            )
          )}
          {productData &&
            productData.map((product, index) => {
              const { _id, title, price } = product;
              return (
                <tr key={index}>
                  <td style={{ textAlign: "center" }}>{index + 1}</td>
                  <td>{title}</td>
                  <td style={{ textAlign: "center" }}>{price}</td>
                  <td>{_id}</td>
                  <td>
                    <Link to="/edit-product" state={{ _id, title, price }}>
                      <button className="edit">Edit</button>
                    </Link>
                    <button
                      className="delete"
                      onClick={() => handleDeleteProduct(_id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
