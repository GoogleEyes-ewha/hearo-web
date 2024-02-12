import Cookies from 'js-cookie';
import axiosInstance from './axios';

export async function getUserSettings() {

const accessToken = Cookies.get("accessToken");
  
    try {
        const response = await axiosInstance.get('/user/custom');
        return response.data;
    } catch (error) {
        throw error;
    }
}