import { useState, useEffect } from "react";
import { getMenuList } from "../api/MenuApi";
import MenuItem from "../components/MenuItem";
import menuStyle from "./Menu.css";
import { useNavigate } from "react-router-dom";

const Menu = () => {
    const [menuList, setMenuList] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setMenuList(getMenuList());
    }, []);

    const onClickHandler = () => {
        navigate(`/menu/search?menuName=${searchValue}`);
    }

    return (
        <>
            <h1>판매 메뉴 목록</h1>
            <div>
                <input type="search" name="menuName"
                onChange={e=> {setSearchValue(e.target.value)}}/>
                <button onClick={onClickHandler}>검색</button>
            </div>
            <div className={menuStyle.menuBox}>
                {menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu}/>)}
            </div>
        </>
    )
}
export default Menu;