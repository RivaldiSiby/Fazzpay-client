import axios from "axios";
const Gethistory = async (token, limit = 1, page = 1, filter = "WEEK") => {
  try {
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_URL}/transaction/history?page=${page}&limit=${limit}&filter=${filter}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default Gethistory;
