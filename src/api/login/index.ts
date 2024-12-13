import type { LoginData, LoginResult } from "@/api/login/model";
import { request } from "@/request";
/**
 * 登录
 * @param data - 请求数据
 */
export function fetchLogin(data: LoginData) {
	return request.post<LoginResult>("/login/v2", data);
}
/**
 * 修改密码
 * @param data - 请求数据
 */
export function updatePassword(data: object) {
	return request.post("/update-password", data);
}