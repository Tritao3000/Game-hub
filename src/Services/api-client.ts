import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "395735af8a3245afa1f4c04880dbfdba",
  },
});
