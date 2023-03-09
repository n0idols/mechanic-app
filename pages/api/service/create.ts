// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../../prisma/client";

type serviceProps = {
  title: string;
  length: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const service: serviceProps = req.body;

  if (req.method === "POST") {
    try {
      const data = await prisma.service.create({
        data: {
          title: service.title,
        },
      });
      res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ message: "Error creating a new service" });
    }
  }
}
