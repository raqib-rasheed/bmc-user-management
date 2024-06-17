import { CreatorType } from "@/components/Creators/TableView";
import axios from "axios";

interface IUpdateCreatorsFormData extends CreatorType {
  id: number;
}

const Authorization = "Bearer " + process.env.REACT_APP_API_KEY;

const BASE_URL = "https://gorest.co.in/public/v2";
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization,
  },
});

async function getCreators() {
  return await axiosInstance.get("/users");
}

async function postCreators(formData: Omit<CreatorType, "id">) {
  return await axiosInstance.post("/users", formData);
}

async function updateCreators(formData: IUpdateCreatorsFormData) {
  return await axiosInstance.put("/users", formData);
}

async function deleteCreators(userId: number) {
  return await axiosInstance.delete(`/users/${userId}`);
}

export { getCreators, postCreators, updateCreators, deleteCreators };
