import { useFetch } from "@/utils/fetch";
const AddMonitor = (params: any) =>
  useFetch<any>("POST", "task/add_track", params);
export default AddMonitor;
