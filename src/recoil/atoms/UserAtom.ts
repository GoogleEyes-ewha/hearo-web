import { atom } from 'recoil';
import { Product } from '../../types';

/*recoil 전역관리 변수.
이렇게 변수를 설정해놓고, 다른 파일에서 얘를 통해서 
ex) color = red로 설정하는 게 아니라
color = colors.background 
이런 식으로 사용하면 유저의 설정값에 따라 다른 테마 적용 가능.
/assets/styles/styles.ts 참고.
Login.tsx 참고.*/ 

// 사용자 설정 상태 
export const userPreferenceState = atom({
    key: 'userPreferenceState',
    default:{
        itemPerPage: 6,
    },
});

// 시각장애인 유형 상태
export const colorBlindModeState = atom<string>({
  key: 'colorBlindModeState',
  default: 'type1', 
});


// 관심 상품 상태
export const favoriteState = atom<Product[]>({
  key: 'favoriteState',
  default: [],
})

