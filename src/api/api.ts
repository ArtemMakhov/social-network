import axios from 'axios';
import { ProfileType, UserType } from '../types/types';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: { 'API-KEY': '38219c4f-948f-4b48-99d7-ad1ca264529e' },
  
})

export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
}

export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10
}

type UsersResponseType = {
  items: Array<UserType>
  totalCount: number
  error: string | null
}
type UnfollowResponseType = {
  resultCode: ResultCodesEnum
  messages: Array<string>
  data: any
}

export  const userApi = {
  getUsers (currentPage: number,pageSize: number) {
    return instance.get<UsersResponseType>(`users?page=${currentPage}&count=${pageSize}`
    )
      .then(res => {
        return res.data;
      });
  },
   follow(id: number) {
    return instance.delete(`follow/${id}`)
      .then(res => {
        return res.data;
      });
  },
  unfollow(id: number) {
    return instance.post<UnfollowResponseType>(`follow/${id}`)
      .then(res => {
        return res.data;
    })
  },
  getProfile(userId: number ) {
    console.warn('Obsolete method. Please profileAPI object');
    return profileAPI.getProfile(userId);
  }
}



export const profileAPI = {
  getProfile(userId: number) {
    return instance.get<ProfileType>(`profile/${userId}`);
  },
  getStatus(userId: number) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status: string) {
    return instance.put(`profile/status`, { status: status });
  },
  savePhoto(photoFile: any) {
    const formData = new FormData();
    formData.append('image', photoFile)
    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
    })
  },
  saveProfile(profile: ProfileType) {
    return instance.put(`profile`, profile);
  },
};



type MeResponseType = {
  data: {
    id: number
    email: string
    login: string
  }
  resultCode: ResultCodesEnum
  messages: Array<string>
}
type LoginResponseType = {
  data: {
    userId: number
  }
  resultCode: ResultCodesEnum | ResultCodeForCaptcha
  messages: Array<string>
}

export const authAPI = {
  me() {
    return instance.get<MeResponseType>(`auth/me`).then(res => res.data);
  },
  login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
    return instance.post<LoginResponseType>('auth/login', { email, password, rememberMe, captcha })
      .then(res => res.data);
  },
  logout() {
    return instance.delete('auth/login').then(res => res.data);
  }
};

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`).then(res => res.data);
  },
};


        