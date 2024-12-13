import type { UserInfoType } from "@/api/user/types";
import { fetchUserInfo } from "@/api/user";
import { create } from "zustand";

const initialState = {
	userId: "",
	avatar: "",
	username: "",
	email: "",
	phoneNumber: "",
	description: "",
	roles: []
};

type UserState = UserInfoType;
interface UserActions {
	getUserInfo: () => Promise<UserInfoType>;
	reset: () => void;
}
export const useUserStore = create<UserState & UserActions>()(set => ({
	...initialState,
	getUserInfo: async () => {
		const res = await fetchUserInfo();
		set({ ...res.data });
		return res.data;
	},
	reset: () => {
		return set({ ...initialState });
	}
}));
