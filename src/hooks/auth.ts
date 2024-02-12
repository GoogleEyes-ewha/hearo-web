// useAuth.ts
import { useMutation } from "react-query";
import { login, reissueTokens } from "../api/api";
import Cookies from "js-cookie";

export const useLogin = () => {
  return useMutation(
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
