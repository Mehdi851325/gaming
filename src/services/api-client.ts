import axios, { AxiosRequestConfig } from "axios";

export interface FetchData<T> {
  count: number;
  next: string | null;
  results: T[];
}
const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "08678cc2283e4d228f4992faaeb6e1f2",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchData<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}


export default APIClient;