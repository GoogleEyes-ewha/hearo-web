import { atom } from 'recoil';
import { UserState } from '../../types'; 

/*
응답 형식
{
	"code": 1000,
  "inSuccess" : 1,
	"message": "요청에 성공하였습니다.",
	"result": {
			"accessToken": "",
			"refreshToken": ""
	}
}
*/

export const authAtom = atom<UserState>({
    key: 'authAtom',
    default: {
        isAuthenticated: false,
        accessToken: '',
        refreshToken: '',
        userInfo: undefined,
    },
});


