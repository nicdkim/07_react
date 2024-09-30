import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayOut from "./layout/LayOut";
import Main from "./pages/Main";
import About from "./pages/About";
import Menu from "./pages/Menu";
import MenuDetail from "./pages/MenuDetails";
import MenuSearch from "./pages/MenuSearch";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayOut/>}>
            <Route path="main" element={<Main/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="menu">
              <Route index element={<Menu/>}/>
              <Route path=":menuCode" element={<MenuDetail/>}/>
              {/* ex) localhost:3000/menu/30 -> menuCode = 30 */}
              <Route path="search" element={<MenuSearch/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
