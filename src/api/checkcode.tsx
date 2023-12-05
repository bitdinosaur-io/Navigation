import { useFetch } from "@/utils/fetch";
const CheckCodeApi = (params: any) =>
  useFetch<any>("POST", "user/check_code", params);
export default CheckCodeApi;
