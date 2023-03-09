import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      console.log(req.body.serviceId);
      try {
        const data = await prisma.appointment.create({
          data: {
            date: req.body.date,
            timeSlotId: Number(req.body.timeSlotId),
            serviceId: Number(req.body.serviceId),
          },
        });
        res.status(200).json(data);
      } catch (error) {
        return res
          .status(500)
          .json({ message: "Error creating a new appointment" });
      }
    }
  } catch (error) {
    return res.status(500).json(error.message);
  }
}
