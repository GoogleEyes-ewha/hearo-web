import axios from 'axios';
import { useRecoilState } from 'recoil';
import { authAtom, UserState } from '../recoil/atoms/AuthAtom';
import { getUserInfo } from '../services/AuthServices';


export function useAuth() {
    const [authState, setAuthState] = useRecoilState<UserState>(authAtom);

    // 로그인 
    const login = async (loginId: string, password: string) => {

        try {
            // 로그인 API 호출, 응답에서 토큰 받아오기
            const response = await axios.post('/user/login',{ loginId, password });
            const { accessToken, refreshToken } = response.data.result;

            // 로그인 성공 후, 사용자 정보 가져오기 
            const userInfo = await getUserInfo(accessToken);
            
            const newState: UserState = {
                isAuthenticated: true,
                accessToken,
                refreshToken,
                userInfo,
            };

            // Recoil 상태 업데이트
            setAuthState(newState);
        }
        catch (error) {
            console.error('Login failed', error);
            throw new Error('로그인에 실패하였습니다.');
        }
    };

    // 로그아웃
    const logout = () => {
        
        const initialState: UserState = {
            isAuthenticated: false,
            accessToken: '',
            refreshToken: '',
            userInfo: undefined,
        };

        // Recoil 상태 초기화
        setAuthState(initialState);
        
        // 로그아웃 처리 로직, 예) 쿠키, 로컬 스토리지에서 토큰 제거 
    };

    // 로그인 상태, 액세스 토큰, 사용자 정보 반환
    return {
        ...authState, // javascript 의 스프레드 연산자 (authState 의 모든 속성에 접근 가능하도록 함)
        login, // 나중에 로그인 버튼의 클릭이벤트에 연결 가능 
        logout,
    };
}