import { instance,GetItemsType, ResponseType } from "./api";

export const userApi = {
  getUsers(currentPage: number, pageSize: number) {
    return instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}`
    )
      .then(res => {
        return res.data;
      });
  },
  unfollow(id: number) {
    return instance.post<ResponseType>(`follow/${id}`)
      .then(res => {
        return res.data;
      })
  },
  follow(id: number) {
    return instance.delete(`follow/${id}`)
      .then(res => { return res.data }) as Promise<ResponseType>
  }
}