import { Routes, Route, Navigate } from "react-router-dom";

import ProductsPage from "../pages/ProductsPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import AddProductPage from "../pages/AddProductPage";
import EditProductPage from "../pages/EditProductPage";
import CartPage from "../pages/CartPage";
import ContactPage from "../pages/ContactPage";
import HeroBanner from "../components/home/HeroBanner";
import WhyChooseUs from "../components/home/WhyChooseUs";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />

      <Route
        path="/home"
        element={
          <>
            <HeroBanner />
            <WhyChooseUs />
          </>
        }
      />

      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:id" element={<ProductDetailsPage />} />
      <Route path="/products/add" element={<AddProductPage />} />
      <Route path="/products/edit/:id" element={<EditProductPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};

export default AppRoutes;
