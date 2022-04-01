import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductReviewLayout from './components/product-reviews/layouts/ProductReviewLayout'
import NavTabs from './features/nav/NavTabs';
import LayoutOne from './components/layouts/LayoutOne';
import { Counter } from './features/counter/Counter'
function App() {
  return (
    <>
      <NavTabs />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutOne />}></Route>
          <Route path="/counter" element={<Counter />}></Route>
          <Route path="/product-review" element={<ProductReviewLayout />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
