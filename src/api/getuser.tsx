import { useFetch } from "@/utils/fetch";
const GetUserApi = (params: any, token: any) =>
  useFetch<any>("GET", "user/info", params, token);
export default GetUserApi;
