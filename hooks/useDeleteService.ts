import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export default function useDeleteService() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => axios.delete(`/api/service/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["serviceData"] });
    },
  });
}
