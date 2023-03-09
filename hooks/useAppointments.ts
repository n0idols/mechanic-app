"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function useAppointments() {
  return useQuery(
    ["appointmentData"],
    () => axios.get("/api/appointment/get"),
    {
      cacheTime: 50000,
    }
  );
}
