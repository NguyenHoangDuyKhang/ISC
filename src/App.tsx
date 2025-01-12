import Navbar from "./component/Nav/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ImageGrid from "./pages/Git_img/image_grid";
import Product_Card from "./pages/product_card/product_card";
import List_comment from "./pages/list_comment/list_comment";

function App() {
  return (
    <>
      <Router>
        <div className="layout">
          <div className="navbar-container">
            <Navbar />
          </div>
          <main className="main">
            <Routes>
              <Route path="/" element={<ImageGrid />} />
              <Route path="/product_card" element={<Product_Card />} />
              <Route path="/list_comment" element={<List_comment />} />
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
