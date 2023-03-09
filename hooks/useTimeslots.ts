"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function useTimeslots() {
  return useQuery(["timeslotData"], () => axios.get("/api/time/get"));
}
