import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayOut from "./layout/LayOut";
import Main from "./pages/Main";
import Menu from "./pages/Menu";
import MenuDetail from "./pages/MenuDetail";
import OrderConfirmation from "./pages/OrderConfirmation";
import { useState } from "react";
import { addToCart } from "./api/MenuApi";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route path="main" element={<Main />} />
          <Route path="menu" element={<Menu cart={cart} setCart={setCart} />} />
          <Route path="menu/:menuCode" element={<MenuDetail addToCart={(item) => addToCart(item, cart, setCart)} />} />
          <Route path="ordered" element={<OrderConfirmation cart={cart}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;