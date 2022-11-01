import Home from "./pages/Home";
import Header from "./components/Header";
import Category from "./pages/Category";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryName" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
