import axios from "axios";
import {savePhoto} from "../Redux/reducers/ProfileReducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "4230ac11-a8d8-4cef-b716-b88af9bc0510"
    }
})

export const usersApi = {
    getUsers(currentPage: number = 1, pageSize: number = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    setFollow(id: number) {
        return instance.post(`follow/${id}`, {},)
    },
    setUnFollow(id: number) {
        return instance.delete(`follow/${id}`,)
    },
    getProfile(id: string) {
        return profileApi.getProfile(id)
    }
}

export const profileApi = {
    getProfile(id: string) {
        return instance.get(`profile/${id}`)
    },
    getStatus(id: string) {
        return instance.get(`profile/status/${id}`)

    },
    upDateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
    },
    savePhoto(photoFile: string) {
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    },
}

export const authApi = {
    getMe() {
        return instance.get(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}



