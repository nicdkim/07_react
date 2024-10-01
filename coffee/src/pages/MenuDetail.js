import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMenuDetail, addToCart } from "../api/MenuApi";

const MenuDetail = ({ cart, setCart }) => {
  const { menuCode } = useParams();
  const [menu, setMenu] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const menuDetail = getMenuDetail(menuCode);
    setMenu(menuDetail);
  }, [menuCode]);

  if (!menu) {
    return <div>커피 준비중...</div>;
  }

  const handleAddToCart = () => {
    addToCart(menu.name, cart, setCart);
    alert(`${menu.name}이(가) 장바구니에 추가되었습니다!`);
  };

  return (
    <div>
      <h1>{menu.name}</h1>
      <h3>가격: ₩{menu.price}</h3>
      <p>{menu.description}</p>
      <button onClick={handleAddToCart}>장바구니에 추가</button>
      <button onClick={() => navigate("/menu")}>돌아가기</button>
    </div>
  );
};

export default MenuDetail;