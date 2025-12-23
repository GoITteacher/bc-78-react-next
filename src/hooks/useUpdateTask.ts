import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTask } from "../services/taskService";
import { Task } from "../types/tasks";

export const useUpdateTask = ()=>{
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ["toggleStatus"],
    mutationFn: (item: Task) => updateTask(item.id, { completed: !item.completed }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getTasks"] });
    },
  });


  return mutation;
}