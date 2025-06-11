import axiosInstance from "../utils/axiosInstance";

const baseURL = import.meta.env.BASE_URL + "/users";

const authApi = class {
  async createUser() {
    return (await axiosInstance.post(baseURL)).data;
  }
};

export default new authApi();
