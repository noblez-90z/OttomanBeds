import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./HomeComponenet.jsx/Homepage";

import MainHomePage from "./MainShopping/MainHome";
import CartPage from "./MainShopping/CartPage";
import WishlistPage from "./MainShopping/WishListPage";
import ItemDetials from "./MainShopping/ItemDetials";
import OttoBeds from "./HomeComponenet.jsx/OttomanBeds";

import Bed from "./MainShopping/Bed";
import BedDetials from "./MainShopping/BedDetails";
import FramesDetials from "./MainShopping/FramesDetials";
import HomeLand from "./MainShopping/HomeLand";
import Frame from "./MainShopping/Frame";

function App() {
  return (
    <div className="">
      <Router>
        <div className="">
          <Routes>
            <Route path="/" element={<Homepage />} />

            <Route path="/Shop" element={<MainHomePage />} />
            <Route path="/headboard" element={<HomeLand />} />
            <Route path="/item/:id" element={<ItemDetials />} />
            <Route path="/itemBed/:id" element={<BedDetials />} />
            <Route path="/itemFrame/:id" element={<FramesDetials />} />
            <Route path="/Cart" element={<CartPage />} />
            <Route path="/Wishlist" element={<WishlistPage />} />
            <Route path="/OttoBeds" element={<OttoBeds />} />
            <Route path="/Bed" element={<Bed />} />
            <Route path="/Frame" element={<Frame />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
