import axios from 'axios';
import { UserInfo } from '../types';

// 더 분리가 필요 

export async function getUserInfo(accessToken: string): Promise<UserInfo> {

    try {  // accesstoken 보낼 때 엔드포인트 어떻게 할지 생각해야함 
        const response = await axios.get('/user/ -------- ',{
            headers: {
                'Authorization' : `${accessToken}`,
            },
        });

        // 백엔드에서 이렇게 응답을 보내줘야함 
        // userPreference -> 지금 api 명세에 있음 
        const userInfo: UserInfo = {
            id: response.data.id,
            name: response.data.name,
        };

        return userInfo;
    }
    catch (error) {
        throw new Error('사용자 정보를 가져오는데 실패하였습니다.');
    }
}


