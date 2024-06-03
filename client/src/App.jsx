import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
// import ProfilePage from "./pages/ProfilePage/ProfilePage";
// import SignupPage from "./pages/SignupPage/SignupPage";
// import LoginPage from "./pages/LoginPage/LoginPage";

import Navbar from "./components/Navbar/Navbar";
import BlogPage from "./pages/BlogPage/BlogPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import CollectionsPage from "./pages/CollectionsPage/CollectionsPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import CollectionPage from "./pages/CollectionPage/CollectionPage";
import ItemPage from "./pages/ItemPage/ItemPage";
import FAQPage from "./pages/FAQPage/FAQPage";
import NewProductPage from "./pages/NewProductPage/NewProductPage";
import EditProductPage from "./pages/EditProductPage/EditProductPage";
// import IsPrivate from "./components/IsPrivate/IsPrivate";
// import IsAnon from "./components/IsAnon/IsAnon";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/FAQ" element={<FAQPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/collections/:name" element={<CollectionPage />} />
        <Route path="/item/:name" element={<ItemPage />} />
        <Route path="/newProduct" element={<NewProductPage />} />
        <Route path="/editProduct/:id" element={<EditProductPage />} />

        {/* <Route
          path="/profile"
          element={
            <IsPrivate>
              <ProfilePage />
            </IsPrivate>
          }
        />

        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        /> */}
      </Routes>
    </div>
  );
}

export default App;
