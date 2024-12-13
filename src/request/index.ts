// import { message } from "@/utils/message";
import { message } from "antd";
import axios from "axios";
import AxiosRequest from "./request";
import { useTokenStore } from "@/store/token";
import { useUserStore } from "@/store/user";

/**
 * 创建请求
 * @param url - 链接地址
 * @param tokenKey - 存token的key值
 */
function creteRequest(url: string) {
	return new AxiosRequest({
		baseURL: url,
		timeout: 20 * 1000,
		interceptors: {
			// 接口请求拦截
			requestInterceptors(res) {
				// 获取本地token
				const { token } = useTokenStore.getState();
				if (res?.headers && token) {
					res.headers.Authorization = `Bearer ${token}`;
				}
				return res;
			},
			// 请求拦截超时
			requestInterceptorsCatch(err) {
				message.error("请求超时！");
				return err;
			},
			// 接口响应拦截
			responseInterceptors(res) {
				const { data } = res;
				// 权限不足
				if (data?.code === 401) {
					message.error("权限不足，请重新登录！");
					// 重置用户状态
					useUserStore.getState().reset();
					window.location.href = "/login";
					return res;
				}

				// 错误处理
				if (data?.code !== 200) {
					console.log("----------");
					message.error(data.message || "服务器错误");
					return Promise.reject(res);
				}

				return res;
			},
			responseInterceptorsCatch(err) {
				// 取消重复请求则不报错
				if (axios.isCancel(err)) {
					err.data = err.data || {};
					return err;
				}

				message.error("服务器错误！");
				return err;
			}
		}
	});
}

/**
 * 异常处理
 * @param error - 错误信息
 * @param content - 自定义内容
 */
// const handleError = (error: string, content?: string) => {
// 	console.error("错误信息:", error);
// 	message.error({
// 		content: content || error || "服务器错误",
// 		key: "error"
// 	});
// };

export { creteRequest };
export type * from "./types";

// 生成环境所用的接口
const prefixUrl = import.meta.env.VITE_BASE_URL as string;
const baseURL = prefixUrl + "/api";

// 请求配置
export const request = creteRequest(baseURL);

// 创建多个请求
// export const newRequest = creteRequest('/test', TOKEN);

/**
 * 取消请求
 * @param url - 链接
 */
export const cancelRequest = (url: string | string[]) => {
	return request.cancelRequest(url);
};

/** 取消全部请求 */
export const cancelAllRequest = () => {
	return request.cancelAllRequest();
};
