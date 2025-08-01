import { some } from "lodash";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import type { RootState } from "@/store";
import { toggleFavProduct } from "@/store/reducers/user";
import type { ProductTypeList } from "@/types";
import { Children } from "react";

const ProductItem = ({
  discount,
  images,
  id,
  name,
  price,
  currentPrice,
  children,
}: ProductTypeList & { children?: React.ReactNode }) => {
  const dispatch = useDispatch();
  const { favProducts } = useSelector((state: RootState) => state.user);

  const isFavourite = some(favProducts, (productId) => productId === id);

/*************  ✨ Windsurf Command 🌟  *************/
  interface ProductItemProps {
    discount: number;
    images: string[];
    id: string;
    name: string;
    price: number;
    currentPrice: number;
  }

  const toggleFav = () => {
  const toggleFav = ({children}:any) => {
    dispatch(
      toggleFavProduct({
        id,
      })
    );
  };
/*******  17724216-7e77-4b61-97d6-9ae782e6dc0e  *******/

  return (
    <div className="product-item">
      <div className="product__image">
      {Children.map(children, (child) => {
        return child;
      })}
        <button
          type="button"
          onClick={toggleFav}
          className={`btn-heart ${isFavourite ? "btn-heart--active" : ""}`}
        >
          <i className="icon-heart" />
        </button>

        <Link href={`/product/${id}`}>
          <img src={images ? images[0] : ""} alt="product" />
          {discount && <span className="product__discount">{discount}%</span>}
        </Link>
      </div>
      <div className="product__description">
        <h3>{name}</h3>
        <div
          className={`product__price ${discount ? "product__price--discount" : ""}`}
        >
          <h4>${currentPrice}</h4>

          {discount && <span>${price}</span>}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
