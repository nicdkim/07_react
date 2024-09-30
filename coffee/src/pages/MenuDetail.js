import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMenuDetail, addToCart } from "../api/MenuApi"; // MenuApi에서 가져오기

const MenuDetail = ({ cart, setCart }) => {
  const { menuCode } = useParams();
  const [menu, setMenu] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const menuDetail = getMenuDetail(menuCode);
    setMenu(menuDetail);
  }, [menuCode]);

  if (!menu) {
    return <div>로딩 중...</div>;
  }

  const handleAddToCart = () => {
    addToCart(menu.name, cart, setCart); // MenuApi의 addToCart 사용
    alert(`${menu.name}이(가) 장바구니에 추가되었습니다!`);
  };

  return (
    <div>
      <h1>{menu.name}</h1>
      <p>{menu.description}</p>
      <h3>가격: ₩{menu.price}</h3>
      <button onClick={handleAddToCart}>장바구니에 추가</button>
      <button onClick={() => navigate("/menu")}>돌아가기</button>
    </div>
  );
};

export default MenuDetail;