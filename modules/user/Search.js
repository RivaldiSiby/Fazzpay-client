import axios from "axios";

const Search = async (search, token) => {
  try {
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_URL}/user?page=1&limit=4&search=${search}&sort=firstName ASC`,
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

export default Search;
