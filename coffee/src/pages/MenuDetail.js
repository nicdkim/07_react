import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMenuDetail } from "../api/MenuApi";

function MenuDetail({ addToCart }) {
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
    addToCart({ name: menu.name, price: menu.price });
    alert(`${menu.name}이(가) 장바구니에 추가되었습니다!`);
  };

  return (
    <div>
      <h1>{menu.name}</h1>
      <p>가격: ₩{menu.price}</p>
      <p>설명: {menu.description}</p>
      <button onClick={handleAddToCart}>장바구니에 추가</button>
      <button onClick={() => navigate("/menu")}>돌아가기</button>
    </div>
  );
}

export default MenuDetail;