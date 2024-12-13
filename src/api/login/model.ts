// 接口传入数据
export interface LoginData {
	username: string;
	password: string;
}

// 接口返回数据
export interface LoginResult {
	token: string;
	refreshToken: string;
}
