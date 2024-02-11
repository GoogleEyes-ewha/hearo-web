import { atom } from 'recoil';
import { UserState } from '../../types'; 

// 인증 상태 
export const authAtom = atom<UserState>({
    key: 'authAtom',
    default: {
        isAuthenticated: false,
        accessToken: '',
        refreshToken: '',
        userInfo: undefined,
    },
});



