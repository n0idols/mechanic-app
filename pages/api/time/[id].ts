// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(typeof Number(req.query.id));
  if (req.method === "DELETE") {
    try {
      const deleteTime = await prisma.timeSlot.delete({
        where: {
          id: Number(req.query.id),
        },
      });
      return res.status(200).json({ message: "Successfully Deleted." });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
