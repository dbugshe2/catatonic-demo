import axios from "axios";

let API = process.env.REACT_APP_CAT_API_URL + "/images";

const images = axios.create({
  baseURL: API,
});

images.defaults.headers.post["Content-Type"] = "application/json";
images.defaults.headers["Access-Control-Allow-Origin"] = "*";

images.interceptors.request.use(
  (config) => {
    const apiKey = process.env.REACT_APP_CAT_API_KEY;
    if (apiKey) {
      config.headers["x-api-key"] = apiKey;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default images;
