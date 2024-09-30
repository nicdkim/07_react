import { Link } from "react-router-dom";

const MenuItems = ({ menu }) => {
  return (
    <Link to={`/menu/${menu.id}`}>
      <div className="MenuItem">
        {menu.name} - ₩{menu.price}
      </div>
    </Link>
  );
};

export default MenuItems;