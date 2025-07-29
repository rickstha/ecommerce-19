import { useDispatch } from "react-redux";

import removeProduct from "@/store/reducers/cart";
import setCount from "@/store/reducers/cart";
import type { ProductStoreType } from "@/types";

const ShoppingCart = ({
  thumb,
  name,
  id,
  color,
  size,
  count,
  price,
}: ProductStoreType) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(
      removeProduct(
        {
          // thumb,
          id,
          color,
          size,
          count,

          price,
        },
        // Add the second argument as required by removeProduct, e.g., an action type or additional payload
        // Replace 'undefined' with the actual value if needed
        undefined
      )
    );
  };

  const setProductCount = (count: number) => {
    if (count <= 0) {
      return;
    }

    // Update to match the expected properties of CartTypes
    dispatch(setCount({ id, count }, undefined));
  };

  return (
    <tr>
      <td>
        <div className="cart-product">
          <div className="cart-product__img">
            <img src={thumb} alt="" />
          </div>

          <div className="cart-main">
            <div className="cart-product__img2">
              <img src={thumb} alt="" />
            </div>
          </div>

          <div className="cart-product__content">
            <h3>{name}</h3>
            <p>#{id}</p>
          </div>
        </div>
      </td>
      <td className="cart-item-before" data-label="Color">
        {color}
      </td>
      <td className="cart-item-before" data-label="Size">
        {size}
      </td>
      <td>
        <div className="quantity-button">
          <button
            type="button"
            onClick={() => setProductCount(count - 1)}
            className="quantity-button__btn"
          >
            -
          </button>
          <span>{count}</span>
          <button
            type="button"
            onClick={() => setProductCount(count + 1)}
            className="quantity-button__btn"
          >
            +
          </button>
        </div>
      </td>
      <td>${price}</td>
      <td className="cart-item-cancel">
        <i className="icon-cancel" onClick={() => removeFromCart()} />
      </td>
    </tr>
  );
};

export default ShoppingCart;
