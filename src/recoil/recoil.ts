import { atom } from 'recoil';


/*recoil 전역관리 변수.
이렇게 변수를 설정해놓고, 다른 파일에서 얘를 통해서 
ex) color = red로 설정하는 게 아니라
color = colors.background 
이런 식으로 사용하면 유저의 설정값에 따라 다른 테마 적용 가능.
/assets/styles/styles.ts 참고.
Login.tsx 참고.*/ 

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