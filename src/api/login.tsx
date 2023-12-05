import { useFetch } from "@/utils/fetch";
const LoginApi = (params: any) => useFetch<any>("POST", "user/login", params);
export default LoginApi;
