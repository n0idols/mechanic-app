// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "DELETE") {
    console.log(req.query);
    try {
      const deleteAppointment = await prisma.appointment.delete({
        where: {
          id: Number(req.query.id),
        },
      });
      return res.status(200).json({ message: "Successfully Deleted." });
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  //   if (req.method === "PATCH") {
  //     try {
  //       const updatedAppointment = await prisma.service.updateMany({
  //         where: {
  //           id: Number(req.query.id),
  //         },
  //         data: {
  //           title: req.body.title,
  //         },
  //       });
  //       return res.status(200).json({ message: "Successfuly Updated." });
  //     } catch (error) {
  //       return res.status(500).json(error);
  //     }
  //   }
}
