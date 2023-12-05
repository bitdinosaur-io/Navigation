import { useFetch } from "@/utils/fetch";
const SignUpApi = (params: any) => useFetch<any>("POST", "user/new", params);
export default SignUpApi;
