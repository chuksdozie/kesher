import { useQuery, useMutation, useQueryClient} from "@tanstack/react-query"
import { API } from "@/api/api";

const getNames = async () => {
    const response = await API.get('/?path=Sheet1&action=read');
    return response.data;}

const addName = async (name: string) => {
    const response = await API.post(`/?path=Sheet1&action=write&Users=${name}` );}


export default function Sheet() {
    const queryClient = useQueryClient();

    const { data: names , isLoading, error } = useQuery({
        queryKey: ['names'],
        queryFn: getNames,
    });

    const mutation = useMutation({
        mutationFn: addName,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['names'] });
        },
    });

    return {names, isLoading, error, addName: mutation.mutate};
}