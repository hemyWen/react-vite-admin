import { create } from "zustand";
import { persist } from "zustand/middleware";
import { TOKEN } from "@/constants/config";
//主题类型
export type ThemeType = "light" | "dark";

interface PreferencesState {
	theme: ThemeType;
}
//默认偏好设置
export const DEFAULT_PERFERENCES = {
	theme: "light"
} satisfies PreferencesState;

//偏好设置操作接口
interface PerferencesAction {
	changeSiteTheme: (theme: ThemeType) => void;
}

//偏好设置状态管理
export const usePerferencesStore = create<PreferencesState & PerferencesAction>()(
	persist(
		set => ({
			theme: "light",
			changeSiteTheme: theme => set(() => ({ theme }))
		}),
		{ name: TOKEN + "_" + "preferences" }
	)
);
