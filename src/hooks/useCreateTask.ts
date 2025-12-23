import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTask } from "../services/taskService";

export const useCreateTask = ()=>{

  const queryClint = useQueryClient();

  const createMutation = useMutation({
    mutationKey: ["createTask"],
    mutationFn: (obj: { text: string }) => createTask(obj),
    onSuccess: () => {
      queryClint.invalidateQueries({ queryKey: ["getTasks"] });
    },
  });

  return createMutation.mutate
}