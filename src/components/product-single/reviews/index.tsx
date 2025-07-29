import type { ProductType } from "@/types";
import Punctuation from "./punctuation";
import ReviewsList from "./reviews-list";

type ReviewsProductType = {
  show: boolean;
  display: boolean;
  product: ProductType;
  cart: ProductType;
  //optional
  reviews?: React.ReactNode;
  punctuation?: ProductType;
  votes?: Number[];
  countOpinions?: React.ReactNode[];
  ReviewsList?: React.ReactNode[];
};

const Reviews = ({ show, product }: ReviewsProductType) => {
  const style = {
    display: show ? "flex" : "none",
  };

  return (
    <section style={style} className="product-single__reviews">
      <Punctuation
        punctuation={product.punctuation.punctuation}
        countOpinions={product.punctuation.countOpinions}
        votes={product.punctuation.votes}
      />
      <ReviewsList reviews={product.reviews} show={false} />
    </section>
  );
};

export default Reviews;

//these files need to change through code API
