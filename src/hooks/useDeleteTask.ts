import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTask } from "../services/taskService";

export const useDeleteTask = ()=>{
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ["deleteTask"],
    mutationFn: (itemId:string) => deleteTask(itemId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getTasks"] });
    },
  });

  return mutation
}