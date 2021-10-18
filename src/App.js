// import logo from "./logo.svg";
import "./App.css";

import Routes from "./Routes";
import { useEffect, useState } from "react";
// import Product from "./Product";
const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://615ad1f14a360f0017a812b2.mockapi.io/animals")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  const onHandleAdd = (product) => {
    setProducts([...products, product]);
  };
  const onHandleDelete = (id) => {
    const newProduct = products.filter((product) => product.id !== id);
    setProducts(newProduct);
  };
  const onHandleUpdate = (product) => {
    const newProducts = products.map((item) =>
      item.id === product.id ? product : item
    );
    setProducts(newProducts);
  };
  return (
    <div className="App">
      <Routes
        products={products}
        onAdd={onHandleAdd}
        onDelete={onHandleDelete}
        onUpdate={onHandleUpdate}
      />
    </div>
  );
};
export default App;
