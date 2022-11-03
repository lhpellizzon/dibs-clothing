import Home from "./pages/Home";
import Header from "./components/Header";
import Category from "./pages/Category";
import Shop from "./pages/Shop";
import SignIn from "./pages/SignIn";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />}>
            <Route path=":categoryName" element={<Category />} />
          </Route>
          <Route path="login" element={<SignIn />} />
          <Route path="contact" element={<Contact />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
