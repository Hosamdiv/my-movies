import { AxiosRequestConfig } from "axios";
import { useQuery } from "react-query";
import { axiosApi } from "../config/axios.config";

interface IAuthenticatedQuey {
  queryKey: string[];
  url: string;
  config?: AxiosRequestConfig;
}
const useAuthenticatedQuey = ({
  queryKey,
  url,
  config,
}: IAuthenticatedQuey) => {
  return useQuery({
    queryKey,
    queryFn: async () => {
      const { data } = await axiosApi.get(url, config);
      return data;
    },
  });
};

export default useAuthenticatedQuey;
