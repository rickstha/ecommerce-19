//done
import type { NextApiRequest, NextApiResponse } from "next";

// 
export default (req: NextApiRequest, res: NextApiResponse) => {
  const request = req.body;
  const { email } = request;
  const { password } = request;
  //id and password is just for dummy use
  if (email === "rickxtha@gmail.com" && password === "RickStha99") {
    res.status(200).json({ status: true });
  } else {
    res.status(401).json({ status: false });
  }
};
