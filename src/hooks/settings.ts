import { useMutation, useQuery } from 'react-query';
import { getUserInfo, getUserSettings, postUserSettings } from '../api/settings';
import { fontSizeState, isLogin, isSettingModalOpen, userNameState } from '../recoil/recoil';
import { useRecoilState } from 'recoil';
import Cookies from 'js-cookie';

interface IUserSettingType {
  disabilityType: number;
  fontSize: number;
  voiceType: string;
  componentType: string;
}

export const useGetUserInfo = () => {
  const [username, setUsername] = useRecoilState(userNameState);
  const [loginState, setLoginState] = useRecoilState(isLogin);

  return useQuery('userInfo', getUserInfo, {
    enabled: !!Cookies.get('accessToken'), // accessToken 쿠키가 있는 경우에만 쿼리 실행
    onSuccess: (data) => {
      const { code, inSuccess, result } = data;
      if (code === 1000 && inSuccess && result) {
        setUsername(result.username); // Recoil 상태 업데이트
        setLoginState('login');
      }
    },
    onError: (error) => {
      console.error('Error fetching user info: ', error);
    }
  });
};

export const useGetUserSettings = () => {
  const [, setIsOpen] = useRecoilState(isSettingModalOpen);
  return useQuery('userSettings', getUserSettings, {
    onSuccess: (data) => {
      if (data.code === 1000 && data.inSuccess) {
        if (data.result) {
          setIsOpen(false);
        } else {
          // 설정이 비어있으면 모달 열기
          setIsOpen(true);
        }
      }
    },
    onError: (error: any) => {
      if (error.response && error.response.status === 401) {
        // 401 에러 발생 시 모달 열기
        setIsOpen(true);
      } else {
        // 그 외의 경우에는 모달 닫기
        setIsOpen(false);
      }
    }
  });
};

export const usePostUserSettings = () => {
  return useMutation((settings: IUserSettingType) => postUserSettings(settings), {
    onSuccess: (data) => {
      // Check if the response code is 1000
      if (data.code === 1000) {
        // Handle successful update
        console.log('Settings updated successfully:', data);
      } else {
        console.error('Error updating settings: Unexpected response code', data);
      }
    },
    onError: (error) => {
      // Handle error condition
      console.error('Error updating settings:', error);
    },
  });
};