// useAuth.ts
import { useMutation } from "react-query";
import { login, reissueTokens, signup } from "../api/auth";
import Cookies from "js-cookie";

interface ApiTokenResponse {
  code: number;
  inSuccess: boolean;
  message: string;
  result?: {
    accessToken: string;
    refreshToken: string;
  };
}

export const useLogin = () => {
  return useMutation<ApiTokenResponse, Error, {loginId: string; password: string}>(
    ({ loginId, password }: { loginId: string; password: string }) =>
      login({ loginId, password }),
    {
      onSuccess: (data) => {
        if (data.inSuccess && data.result) {
          Cookies.set("accessToken", data.result.accessToken, {
            secure: true,
            sameSite: "Strict",
          });
          Cookies.set("refreshToken", data.result.refreshToken, {
            secure: true,
            sameSite: "Strict",
          });
        }
      },
    }
  );
};

export const useReissueTokens = () => {
  return useMutation(reissueTokens, {
    onSuccess: (data) => {
      if (data.inSuccess && data.result) {
        Cookies.set("accessToken", data.result.accessToken, {
          secure: true,
          sameSite: "Strict",
        });
        Cookies.set("refreshToken", data.result.refreshToken, {
          secure: true,
          sameSite: "Strict",
        });
      }
    },
  });
};

export const useSignup = () => {
  return useMutation<ApiTokenResponse, Error, {username: string; loginId: string; password: string}>(
    ({ username, loginId, password }: { username: string; loginId: string; password: string }) => signup({ username, loginId, password }),
    {
      onSuccess: (data) => {
        console.log("Signup successful", data);
      },
      onError: (error) => {
        // 회원가입 실패 시의 로직
        console.error("Signup failed", error);
        // 여기에 필요한 로직 추가
      },
    }
  );
};