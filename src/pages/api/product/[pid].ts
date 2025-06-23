import type { NextApiRequest, NextApiResponse } from "next";

// dont use this data. This is dummy page. Use from main Product page.
import products from "@/utils/data/products";



export default (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { pid },
  } = req;

  const product = products.find((x) => x.id === pid);
  res.status(200).json(product);
};
