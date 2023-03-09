import { useMutation, useQueryClient } from "@tanstack/react-query";

import axios from "axios";

export default function useEditService() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (values) => axios.patch(`/api/service/${values.id}`, values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["serviceData"] });
    },
  });
}
