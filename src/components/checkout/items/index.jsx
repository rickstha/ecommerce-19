import { useSelector } from "react-redux";

const CheckoutItems = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    //every checkout items have the same price so use the price api to show clicked items in checkout Items.
    // 003s
    <ul className="checkout-items">
      {cartItems.map((item) => (
        <li key={item.id} className="checkout-item">
          <div className="checkout-item__content">
            <div className="checkout-item__img">
              <img src={item.thumb} />
            </div>

            <div className="checkout-item__data">
              <h3>{item.name}</h3>
              <span>#{item.id}</span>
            </div>
          </div>
          <h3>${Math.ceil(item.price)}</h3>
        </li>
      ))}
    </ul>
  );
};

export default CheckoutItems;
