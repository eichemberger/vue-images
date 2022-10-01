import qs from "qs";
import axios from "axios";

const CLIENT_ID = process.env.VUE_APP_CLIENT_ID;
const ROOT_URL = "https://api.imgur.com";

export default {
  login() {
    console.log(CLIENT_ID);
    const querystring = {
      client_id: CLIENT_ID,
      response_type: "token",
    };
    const url = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`;

    window.location = url;
  },
  fetchImages(token) {
    return axios.get(`${ROOT_URL}/3/account/me/images`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  uploadImages(images, token) {
    const promises = Array.from(images).map((image) => {
      const formData = new FormData();
      formData.append("image", image);

      return axios.post(`${ROOT_URL}/3/image`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    });

    return Promise.all(promises);
  },
};
