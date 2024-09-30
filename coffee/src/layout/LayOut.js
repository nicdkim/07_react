import { Outlet, NavLink } from "react-router-dom";

function LayOut() {
  return (
    <div>
      <h1>커피 주문 사이트</h1>
      <ul>
        <li><NavLink to="/main">홈</NavLink></li>
        <li><NavLink to="/menu">메뉴</NavLink></li>
        <li><NavLink to="/order-confirmation">주문 확인</NavLink></li>
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default LayOut;