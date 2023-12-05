import { useFetch } from "@/utils/fetch";
const GetHistoryApi = (params: any, token: any) =>
  useFetch<any>("GET", "track/history", params, token);
export default GetHistoryApi;
