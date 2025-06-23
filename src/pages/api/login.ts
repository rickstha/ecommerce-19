import type { NextApiRequest, NextApiResponse } from "next";

// fake login
export default (req: NextApiRequest, res: NextApiResponse) => {
  const request = req.body;
  const { email } = request;
  const { password } = request;

  if (email === "rickxtha@gmail.com" && password === "SwastikaRick") {
    res.status(200).json({ status: true });
  } else {
    res.status(401).json({ status: false });
  }
};
