import axios from "axios";

const KEY = "AIzaSyCogpnEhBlv3lD-8mATGLZFAkkUD_eqvPg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
