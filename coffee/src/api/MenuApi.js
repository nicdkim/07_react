import menus from "../data/Coffee-detail.json";

export function getMenuList() {
  return menus;
}

export function getMenuDetail(menuCode) {
  return menus.filter((menu) => menu.id === parseInt(menuCode))[0];
}

export function addToCart(item, cart, setCart) {
  setCart([...cart, item]);
}