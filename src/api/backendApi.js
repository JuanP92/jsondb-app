import axios from "axios";

const URL = "http://localhost:3030/";

const instance = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "json-aplication",
  },
});

export const ApiGet = async (ruta, body) => {
  return new Promise((resp, reject) => {
    instance
      .get(ruta, {
        params: body,
      })
      .then((res) => {
        resp(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
