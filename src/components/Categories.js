import React from "react";
import { Dropdown } from "react-bootstrap";
import { getAllProducts, getCategoryProducts } from "../api/Api";
import { useSelector, useDispatch } from "react-redux";

const Categories = ({ setProducts }) => {
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();
  console.log("reducer response", category);
  const filterProduct = async (cat) => {
    dispatch({ type: "ADD_CAT", payload: cat });
    // const updatedList = products.filter((product) => product.category === cat);

    if (cat === "all") {
      const res = await getAllProducts();
      setProducts(res);
    } else {
      const res = await getCategoryProducts(cat);
      setProducts(res);
    }
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="dark" className="rounded" id="dropdown-basic">
        Categories
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => filterProduct("all")}>All</Dropdown.Item>
        <Dropdown.Item onClick={() => filterProduct("men's clothing")}>
          Mens Clothing
        </Dropdown.Item>
        <Dropdown.Item onClick={() => filterProduct("women's clothing")}>
          Womens Clothing
        </Dropdown.Item>
        <Dropdown.Item onClick={() => filterProduct("electronics")}>
          Electronics
        </Dropdown.Item>
        <Dropdown.Item onClick={() => filterProduct("jewelery")}>
          Jewellery
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Categories;
