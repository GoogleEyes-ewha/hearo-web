import axios from "axios";
import Cookies from "js-cookie";

const API_BASE_URL = "https://hearo-server.shop:8080";

export const login = async ({
  loginId,
  password,
}: {
  loginId: string;
  password: string;
}) => {
  const response = await axios.post(`${API_BASE_URL}/user/login`, {
    loginId,
    password,
  });
  return response.data;
};

export const reissueTokens = async () => {
  const accessToken = Cookies.get("accessToken");
  const refreshToken = Cookies.get("refreshToken");
  const response = await axios.post(`${API_BASE_URL}/user/reissue`, {
    accessToken,
    refreshToken,
  });
  return response.data;
};
