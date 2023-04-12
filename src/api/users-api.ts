import { UserType } from "../types/types";
import { instance,ResultCodesEnum } from "./api";

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
  }
}