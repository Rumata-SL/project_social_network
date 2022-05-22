import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "b9e08a93-b00f-482f-8894-14513f23830f"
    }
})

export const usersApi = {
    getUsers(currentPage: number = 1, pageSize: number = 6) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    setFollow(id: number) {

        return instance.post(`follow/${id}`, {},).then(response => {
            if (response.data.resultCode === 0) {
                return response
            }
        })
    },
    setUnFollow(id: number) {
        return instance.delete(`follow/${id}`,).then(response => {
            if (response.data.resultCode === 0) {
                return response
            }
        })
    },
    setProfile(id: string) {
        return instance.get(`profile/` + id)
            .then(response => response.data)
    }
}




