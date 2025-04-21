"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Container from "../components/Container/Containar";
import Product from "../components/Products/Product";

const Store = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3004/product").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <Container>
      <div className="grid grid-cols-4 mt-4 gap-4">
        <Product data={data} />
      </div>
    </Container>
  );
};

export default Store;

