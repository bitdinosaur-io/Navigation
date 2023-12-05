type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

interface ApiResponse<T> {
  data: T | null;
  status: number;
}

async function fetchData<T>(
  url: string,
  method: HttpMethod,
  data?: any,
  token?: any
): Promise<ApiResponse<T>> {
  // const tokenn = token
  const options: any = {
    method,
    headers: {
      "Content-Type": "application/json",
      // Connection: "keep-alive",
      // Accept: "*/*",
      // "x-api-key": token,
      // "Access-Control-Allow-Origin": "*",
      // "Access-Control-Allow-Credentials": "true",
      // "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
      // "Access-Control-Allow-Headers": "X-Api-Key",
    },
  };

  if (token) {
    options.headers["x-api-key"] = token;
  }

  if (data && (method === "POST" || method === "PUT")) {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(url, options);

  const responseData: ApiResponse<T> = {
    data: null,
    status: response.status,
  };

  if (response.ok) {
    responseData.data = await response.json();
  }

  if (!response.ok) {
    responseData.data = await response.json();
  }

  return responseData;
}

export function useFetch<T>(
  method: HttpMethod,
  path: string,
  data?: any,
  token?: string
): Promise<ApiResponse<T>> {
  const baseUrl = "https://api.watcher.tools/v1/";
  // let baseUrl =
  //   process.env.NODE_ENV === "development"
  //     ? "http://192.168.195.71:72"
  //     : "https://api.watcher.tools/v1/";

  const url = `${baseUrl}${path}`;

  return fetchData<T>(url, method, data, token);
}
