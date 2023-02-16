import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/getProducts")
      .then((res) => {
        console.log(res);
        setList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="d-flex flex-wrap mt-5">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            {/* <th scope="col">Description</th> */}
          </tr>
        </thead>
        <tbody>
          {list.map((product, index) => (
            <tr key={index}>
              {}
              <th scope="row">{index + 1}</th>
              <td> {product.title}</td>
              <td>{product.price}</td>
              <td><Link to={`/getProduct/${product._id}`} className="d-block"> Mas Info </Link></td>
              
              {/* <td>{product.description}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
