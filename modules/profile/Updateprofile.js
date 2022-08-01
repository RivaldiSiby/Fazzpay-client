import axios from "axios";

const Updateprofile = async (id, token, data) => {
  try {
    const result = await axios.patch(
      `${process.env.NEXT_PUBLIC_URL}/user/profile/${id}`,
      data,
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

export default Updateprofile;
