import axios from "axios";
// { page = 1, limit = 5 }
export const fetchDoctors = async () => {
// const response = await axios.get(`/api/doctors?page=${page}&limit=${limit}`);
const response = await axios.get("/data/doctors.json"); 

  return response.data;
};
