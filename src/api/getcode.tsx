import { useFetch } from "@/utils/fetch";
const GetCodeApi = (params: any) =>
  useFetch<any>("POST", "user/send_code", params);
export default GetCodeApi;
