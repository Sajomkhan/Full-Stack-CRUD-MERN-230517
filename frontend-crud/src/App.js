import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import Products from "./pages/Products";
import Footer from "./components/Footer";
import Navebar from "./components/Navebar";
import Error from "./pages/Error";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navebar />
      <main>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/edit-product" element={<EditProduct />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
