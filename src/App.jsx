import LandingPage from "./components/LandingPage";
import "./App.css";
import ProductPage from "./pages/ProductPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* <ProductPage/> */}
      {/* <LandingPage/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/product-page/:id/products" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
