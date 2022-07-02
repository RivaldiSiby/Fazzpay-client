import axios from "axios";

const Getuser = async (id, token) => {
  try {
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_URL}/user/profile/${id}`,
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

export default Getuser;
