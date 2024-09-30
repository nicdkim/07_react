import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayOut from "./layout/LayOut";
import Main from "./pages/Main";
import MyPage from "./pages/MyPage";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayOut/>}>
            <Route index element={<Main/>}></Route>
            <Route path="main" element={<Main/>}/>
            <Route path="mypage" element={<MyPage/>}/>
            <Route path="login" element={<Login/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
