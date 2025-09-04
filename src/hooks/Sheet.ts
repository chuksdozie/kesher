import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { API } from "@/api/api";

const getNames = async () => {
  const response = await API.get("/exec?path=Sheet1&action=read");
  return response.data;
};

const addName = (name: string) => {
  return API.get(`/exec?path=Sheet1&action=write&Users=${name}`);
};

export function useSheet() {
  const queryClient = useQueryClient();

  const {
    data: users,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["names"],
    queryFn: getNames,
  });
  // const { data: users , isLoading, error } = useQuery({
  //     queryKey: ['names'],
  //     queryFn: getNames,
  // });

  const mutation = useMutation({
    mutationFn: addName,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["names"] });
    },
  });

  return {
    names: users?.data || [],
    isLoading: mutation.isPending,
    error: mutation.error,
    addName: mutation.mutate,
  };
}
