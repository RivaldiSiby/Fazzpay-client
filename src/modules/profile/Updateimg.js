import axios from "axios";

const Updateimg = async (id, token, data) => {
  try {
    const result = await axios.patch(
      `${process.env.NEXT_PUBLIC_URL}/user/image/${id}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "multipart/form-data",
        },
      }
    );
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default Updateimg;
