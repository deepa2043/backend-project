import axios from "axios";

const API = "http://localhost:8080/users";

export const getUsers = async (search, status, startDate, endDate) => {
  let url = `${API}?`;
  if (search) url += `search=${encodeURIComponent(search)}&`;
  if (status) url += `status=${encodeURIComponent(status)}&`;
  if (startDate) url += `start=${encodeURIComponent(startDate)}&`;
  if (endDate) url += `end=${encodeURIComponent(endDate)}&`;

  try {
    const res = await axios.get(url);
    return res.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};