import axios from "axios";

const API_BASE_URL = "https://hearo-server.shop:8080";

// 검색 결과를 가져오는 함수 
export const getCategoryItems = async (categoryId: number) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/item/category/${encodeURIComponent(categoryId)}`);
        console.log(response.data); 
        return response.data;
    }
    catch (error) {
        console.error("검색 결과를 가져오는데 실패했습니다.", error);
        throw error;
    }
};

