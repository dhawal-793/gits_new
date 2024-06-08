import axios from "axios";

const BASE_URL = import.meta.env.VITE_HOST;

export const fetchMdx = async (url) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/${url}`);
    console.log({ response });
    return response.data;
  } catch (error) {
    console.log(error.response);
    if (error.response.status == 404) {
      return "404";
    } else {
      return "500";
    }
  }
};