import { axiosRequest } from "./axios/axios";

export const dataProvider = {
  getList: async (resource: string) => {
    try {
      const response = await axiosRequest.get(resource);
      console.log(response);
      console.log(resource, "resource");
      return { data: response.data.items, total: response.data.totalItems };
    } catch (e) {
      console.error(e);
    }
  },
  getOne: async (resource: string, params: any) => {
    try {
      const response = await axiosRequest.get(`${resource}/${params.id}`);
      console.log(response.data.images);
      return { data: response.data };
    } catch (e) {
      console.error(e);
    }
  },
  create: async (resource: string, params: any) => {
    try {
      const response = await axiosRequest.post(`${resource}/create`, params);
      console.log(params, "params create");
      console.log(response, "response create");
    } catch (e) {
      console.error(e);
      console.log(params, "params create");
    }
  },
  delete: async (resource: string, params: any) => {
    try {
      const response = await axiosRequest.delete(`${resource}/${params.id}`);
      console.log("delete-response", response);
    } catch (e) {
      console.error(e);
    }
  },
  update: async (resource: string, params: any) => {
    try {
      const response = await axiosRequest.put(`${resource}/${params.id}`);
      console.log("params update:", params);
    } catch (e) {
      console.error("в update ошибка:", e);
    }
  },
};
