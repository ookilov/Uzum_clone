import React, { useState } from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import NotFound from "./Components/NotFound/NotFound";
import ProductInfo from "./Components/ProductInfo/ProductInfo";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import Favorite from "./pages/Favorite/Favorite";
import Karzina from "./pages/Karzina/Karzina";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <div className="dark:bg-dark dark:text-white min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/auth" Component={Auth} />
        <Route path="/cart" Component={Cart} />
        <Route path="/favorite" Component={Favorite} />
        <Route path="/karzina" Component={Karzina} />
        <Route path="/Product/:id" Component={ProductInfo} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </div>
  );
}

export default App;
