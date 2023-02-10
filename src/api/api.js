import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: { 'API-KEY': '38219c4f-948f-4b48-99d7-ad1ca264529e' },
  
})


export const userApi = {
  getUsers (currentPage,pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`
    )
      .then(responce => {
        return responce.data;
      });
  },
  follow(id) {
    return instance.delete(`follow/${id}`)
      .then(responce => {
        return responce.data;
      });
  },
  unfollow(id) {
    return instance.post(`follow/${id}`)
      .then(responce => {
        return responce.data;
    })
  },
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  }
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  }
}



        