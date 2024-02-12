import { useQuery } from 'react-query';
import { getUserSettings } from '../api/settings';
import { fontSizeState, isSettingModalOpen } from '../recoil/recoil';
import { useRecoilState } from 'recoil';

export const useUserSettings = () => {
  const [, setFontSize] = useRecoilState(fontSizeState);
  const [, setIsOpen] = useRecoilState(isSettingModalOpen);
  useQuery('userSettings', getUserSettings, {
    onSuccess: (data) => {
      if (data.code === 1000 && data.inSuccess) {
        if (data.result) {
          // 사용자 설정 적용
          setFontSize(data.result.fontSize);
        } else {
          // 설정이 비어있으면 모달 열기
          setIsOpen(true);
        }
      }
    },
    onError: (error) => {
      console.error("Error fetching user settings:", error);
      setIsOpen(true); // 오류 발생 시 모달 열기
    }
  });
};