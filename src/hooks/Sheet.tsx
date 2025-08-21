import { useQuery, useMutation, useQueryClient} from "@tanstack/react-query"
import { API } from "@/api/api";

const getNames = async () => {
    const response = await API.get('/');
    return response.data;}

const addName = async (name: string) => {
    const response = await API.post('/', name );}


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