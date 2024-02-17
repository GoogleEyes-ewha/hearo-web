import Cookies from 'js-cookie';
import axiosInstance from './axios';

interface IUserSettingType{
    disabilityType: number;
    fontSize: number;
    voiceType: string;
    componentType: string;
}

export async function getUserSettings() {
    const response = await axiosInstance.get('/user/custom');
     return response.data;
}

export const postUserSettings = async (settings : IUserSettingType) => {
    const response = await axiosInstance.post('/user/custom', settings);
    return response.data;
  };
