import axios from "axios";

const Updatepassword = async (id, token, data) => {
  try {
    const result = await axios.patch(
      `${process.env.NEXT_PUBLIC_URL}/user/password/${id}`,
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

export default Updatepassword;
