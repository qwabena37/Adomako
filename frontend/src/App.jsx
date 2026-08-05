import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import ProductsAdmin from "./pages/ProductsAdmin";
import ProductDetails from "./pages/ProductDetails";
import ShopGallery from "./pages/ShopGallery";
import Contact from "./pages/Contact";
import InquiriesAdmin from "./pages/InquiriesAdmin";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ShopGallery" element={<ShopGallery />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<PrivateRoute> <Dashboard /> </PrivateRoute>} />
        <Route path="/admin/products" element={<PrivateRoute> <ProductsAdmin /> </PrivateRoute>} />
        <Route path="/admin/create-product" element={ <PrivateRoute> <ProductsAdmin /> </PrivateRoute> } />
       <Route path="/admin/inquiries" element={ <PrivateRoute> <InquiriesAdmin /> </PrivateRoute> } /> 
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;