import axios from "axios";
import Cookies from "js-cookie";

export const login = async ({
  loginId,
  password,
}: {
  loginId: string;
  password: string;
}) => {
  const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/user/login`, {
    loginId,
    password,
  });
  return response.data;
};

export const reissueTokens = async () => {
  const accessToken = Cookies.get("accessToken");
  const refreshToken = Cookies.get("refreshToken");
  const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/user/reissue`, {
    accessToken,
    refreshToken,
  });
  return response.data;
};


// API 모듈에 signup 함수 추가
export const signup = async ({
  username,
  loginId,
  password,
}: {
  username: string;
  loginId: string;
  password: string;
}) => {
  const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/user/signup`, {
    username,
    loginId,
    password,
  });
  return response.data;
};
