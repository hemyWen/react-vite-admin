import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { TokenType } from "@/api/user/types";
import { TOKEN } from "@/config/config";

const initialState = {
	token: "",
	refreshToken: ""
};

type TokenState = TokenType;
interface tokenAction {
	setToken: (Payload: TokenType) => void;
	clearToken: () => void;
}
export const useTokenStore = create<TokenState & tokenAction>()(
	persist(
		set => ({
			...initialState,
			setToken: loginPayload => {
				return set({
					...loginPayload
				});
			},
			clearToken: () => {
				return set({
					...initialState
				});
			}
		}),
		{ name: TOKEN + "_" + "access-token" }
	)
);
