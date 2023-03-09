// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import prisma from "@/prisma/client";

type timeProps = {
  slot: string;
  length: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const time: timeProps = req.body;

  if (req.method === "POST") {
    try {
      //   console.log(time.title);
      const data = await prisma.timeSlot.create({
        data: {
          slot: time.slot,
        },
      });
      res.status(200).json(data);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error creating a new time slot" });
    }
  }
}
