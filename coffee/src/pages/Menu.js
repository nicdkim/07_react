import { useEffect, useState } from "react";
import MenuItems from "../components/MenuItems";
import { getMenuList } from "../api/MenuApi";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const [menuData, setMenuData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setMenuData(getMenuList());
  }, []);

  const handleOrder = () => {
    navigate("/order-confirmation");
  };

  return (
    <div>
      <h1>메뉴 목록</h1>
      <ul>
        {menuData.map((menu) => (
          <li key={menu.id}>
            <MenuItems menu={menu} />
          </li>
        ))}
      </ul>
      <button onClick={handleOrder}>주문하기</button>
    </div>
  );
};

export default Menu;