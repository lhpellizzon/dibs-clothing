import Home from "./pages/Home";
import Header from "./components/Header";
import Category from "./pages/Category";
import Shop from "./pages/Shop";
import SignIn from "./pages/SignIn";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home title="Categories | Dibs" />} />
          <Route path="/shop" element={<Shop />}>
            <Route path=":categoryName" element={<Category />} />
          </Route>
          <Route path="login" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="contact" element={<Contact />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
