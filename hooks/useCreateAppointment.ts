import { useMutation, useQueryClient } from "@tanstack/react-query";

import axios from "axios";

export default function useCreateAppointment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (values) => axios.post("/api/appointment/create", values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["appointmentData"] });
    },
  });
}
