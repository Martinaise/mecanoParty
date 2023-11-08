import axios from "axios";

// import { getAccessTokenFromLocalStorage } from "../userService/localStorage";

const getToken = () => {
  const accessToken = localStorage.getItem("accessToken");
  return accessToken ? JSON.parse(accessToken).token : null;
};

const getAuthorizationHeader = () => `Bearer ${getToken()}`;

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:5002/api/",
  timeout: 10000, // Augmentation du timeout
});

axiosInstance.interceptors.request.use(
  (config) => {
    if (!config.headers) {
      config.headers = {};
    }
    config.headers["Accept"] = "application/json";
    const authorizationHeader = getAuthorizationHeader();
    if (authorizationHeader) {
      config.headers["Authorization"] = authorizationHeader;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;

//les fonctions qui permettent de faire les appels api

// CRUD SERVICE
export const getAllServices = async () => {
  const data = await axios.get("http://127.0.0.1:5002/api/service/");
  return data;
};

// CRUD VEHICULE OCCASION

export const getAllVehicules = async () => {
  const data = await axios.get("http://127.0.0.1:5002/api/vehicule/");
  return data;
};
export const getOneVehicule = async (id) => {
  const data = await axios.get(`http://127.0.0.1:5002/api/vehicule/${id}`);
  return data;
};

//Horaire d'ouverture

export const getAllHoraires = async () => {
  const data = await axios.get(`http://127.0.0.1:5002/api/horaireOuverture/`);
  return data;
};

//CRUD AVIS
export const getAllAvis = async () => {
  const data = await axios.get(`http://127.0.0.1:5002/api/avis/`);
  return data;
};

export const login = async (user) => {
  console.log("mon utilisateur", user);
  const response = await axios.post(`http://127.0.0.1:5002/api/user/login`, {
    ...user,
  });
  console.log("ma reponse", response);
  return response;
};

//CRUD USER
export const CreateEmploye = async (employe) => {
  const data = await axiosInstance.post(`admin/register`, {
    ...employe,
  });
  console.log("creer employé", data);
  return data;
};
