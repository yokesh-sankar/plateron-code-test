import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.sample.com:8440",
});

export const saveData = async (values) => {
  try {
    const response = await instance.post("/register", values);
    console.log("Success");
    console.log(response);
  } catch {
    console.log("Error");
  }
};
