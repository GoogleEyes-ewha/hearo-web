import { atom } from 'recoil';               

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
    default: 'login'
})

export const fontSizeState = atom({
  key: 'fontSizeState',
  default: 16,
});