import axios from "axios";

const getContacts = async () => {
  const response = await axios.get(`https://randomuser.me/api/?results=500`);

  return response.data.results;
};

export default getContacts;
