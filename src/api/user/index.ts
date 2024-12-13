import { request } from "@/request";
import { UserInfoType } from "./types";
/**
 * 获取用户信息
 * @param data - 请求数据
 */
export function fetchUserInfo() {
	return request.get<UserInfoType>("/user/info");
}
