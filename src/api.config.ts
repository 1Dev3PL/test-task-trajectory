import axios from "axios";

export const instance = axios.create({
  baseURL: "https://test.tspb.su/test-task"
})