import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export default function useDeleteAppointment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => axios.delete(`/api/appointment/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["appointmentData"] });
    },
  });
}
