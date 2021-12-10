import { useEffect, useState } from "react";
import styled from "styled-components";
import api from "../../api/api";
import { womenProducts } from "../../data";
import WomenProduct from "./WomenProduct";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const WomenProducts = () => {
  const [womenList, setWomenList] = useState([]);
  // const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    getProductData();
  }, []);

  const getProductData = () => {
    console.log("inside getProductData");
    api.productget
      .productget()
      .then((result) => {
        console.log("getProductData =", result);
        if (result.status) {
        }
        const filteredData = result.filter((item) => {
          // return Object.keys(item.productCategory).some((key) =>
          // item.productCategory.toString().toLowerCase().includes(lowercasedValue)
          // );
          if (item.productCategory === "Women") {
            return item;
          }
        });
        console.log("filteredData=", filteredData);

        setWomenList(filteredData);
      })
      .catch((error) => {
        console.log("getProductData err=====", error);
      });
  };

  return (
    <Container>
      {womenList.map((item) => (
        <WomenProduct item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default WomenProducts;
