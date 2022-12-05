import axios from "axios";

const fetchPosts = async () => {
  try {
    const response = await axios.get(
      "http://catstagram.lofty.codes/api/posts/"
    );
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export default fetchPosts