import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../services/taskService";

export const useGetTasks = (query:string) =>{
  const { data } = useQuery({
    queryKey: ["getTasks", query],
    queryFn: () => getTasks(query),
  });
  return data || []
}