import { useUserStore } from "@/store/user";
import { rememberRoute } from "@/utils";
/**
 * 跳转到登录页面
 *
 * @returns 无返回值
 */
export function goLogin() {
	// 重置用户状态
	useUserStore.getState().reset();
	// 跳转到登录页面，并带上需要记住的路由信息
	window.location.href = `${import.meta.env.BASE_URL}login${rememberRoute()}`;
}
