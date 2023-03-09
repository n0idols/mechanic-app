import { useMutation, useQueryClient } from "@tanstack/react-query";

import axios from "axios";

export default function useCreateService() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (values) => axios.post("/api/service/create", values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["serviceData"] });
    },
  });
}
