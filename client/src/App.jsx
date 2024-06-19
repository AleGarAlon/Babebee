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
import TopBar from "./components/TopBar/TopBar";
import Footer from "./components/Footer/Footer";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import NewArticlePage from "./pages/NewArticlePage/NewArticlePage";
// import IsPrivate from "./components/IsPrivate/IsPrivate";
// import IsAnon from "./components/IsAnon/IsAnon";

function App() {
  return (
    <div className="App">
      <TopBar />

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/FAQ" element={<FAQPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/collections/:collection" element={<CollectionPage />} />
        <Route path="/item/:id" element={<ItemPage />} />
        <Route path="/newProduct" element={<NewProductPage />} />
        <Route path="/editProduct/:id" element={<EditProductPage />} />
        <Route path="/newArticle" element={<NewArticlePage />} />
      </Routes>

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
    </div>
  );
}

export default App;
