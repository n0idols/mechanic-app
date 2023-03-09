"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function useServices() {
  return useQuery(["serviceData"], () => axios.get("/api/service/get"), {
    cacheTime: 5000,
  });
}
