import axios from 'axios';
import { UserInfo, Product } from '../types';


export async function getUserInfo(accessToken: string): Promise<{userInfo:UserInfo; wishList:Product[]}> {

    try {  
        
        // 사용자 정보 요청
        const userInfoResponse = axios.get('/user/info', {
            headers: {
                'Authorization' : `${accessToken}`,
            },
        });

        // 찜 목록 요청
        const wishListResponse = axios.get('/wish/item', {
            headers: {
                'Authorization' : `${accessToken}`,
            },
        });

        // 병렬로 요청
        const [userInfoData, wishListData] = await Promise.all([userInfoResponse,wishListResponse]);
        
        // 사용자 정보
        const userInfo: UserInfo = {
            id: userInfoData.data.id,
            name: userInfoData.data.name,
        };

        // 찜 목록
        const wishList: Product[] = wishListData.data.result.wishList;

        return {
            userInfo,
            wishList,
        };
    }
    catch (error) {
        throw new Error('사용자 정보를 가져오는데 실패하였습니다.');
    }
}


