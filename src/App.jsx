import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./ProductPage";
import Product from "./Product";

function App() {
  const [products, setProducts] = useState([
    { id: 0, title: "Product1", description: "Description1", reviews: [] },
    { id: 1, title: "Product2", description: "Description2", reviews: [] },
    { id: 2, title: "Product3", description: "Description3", reviews: [] },
  ]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Product products={products} />} />
          <Route
            path="/product/:id"
            element={<ProductPage products={products} setProducts={setProducts} />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;