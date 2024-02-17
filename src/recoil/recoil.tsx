import { atom } from 'recoil';
import { WishItem } from '../types';                 

export const colorBlindModeState = atom<string>({
    key: 'colorBlindModeState',
    default: 'type1', 
});

export const isModalOpen = atom({
  key: 'isModalOpen',
  default: false,
});

export const isSettingModalOpen = atom({
  key: 'isSettingModalOpen',
  default: true,
});

export const isLogin = atom<string>({
    key: 'isLogin',
    default: 'login', // default 값 조정 필요 
})

export const fontSizeState = atom({
  key: 'fontSizeState',
  default: 16,
});

export const userSettingsState = atom({
  key: 'userSettingsState',
  default: {
    disabilityType: -1,
    fontSize: 16,
    voiceType: '',
    componentType: '',
  },
});

export const stepState = atom({
  key: 'stepState',
  default: 1, // 첫 번째 페이지부터 시작
});

export const searchState = atom<string>({
  key: 'searchState',
  default: '',
})

export const wishListState = atom<WishItem[]>({
  key: 'wishListState',
  default: [],
});