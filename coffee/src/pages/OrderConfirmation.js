function OrderConfirmation({ cart }) {
  return (
    <div>
      <h1>주문 확인</h1>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ₩{item.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>선택한 커피가 없습니다.</p>
      )}
    </div>
  );
}

export default OrderConfirmation;