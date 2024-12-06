import { create } from "zustand";
import { persist } from "zustand/middleware";
import { TOKEN } from "@/constants/config";
import { LanguageType } from "@/locales/config";
//主题类型
export type ThemeType = "light" | "dark";
interface PreferencesState {
	theme: ThemeType;
	language: LanguageType;
}
//默认偏好设置
export const DEFAULT_PREFERENCES = {
	theme: "light",
	language: "zh"
} satisfies PreferencesState;

//偏好设置操作接口
interface PreferencesAction {
	changeSiteTheme: (theme: ThemeType) => void;
	changeLanguage: (language: LanguageType) => void;
}

//偏好设置状态管理
export const usePreferencesStore = create<PreferencesState & PreferencesAction>()(
	persist(
		set => ({
			...DEFAULT_PREFERENCES,
			changeSiteTheme: theme => set(() => ({ theme })),
			changeLanguage: language => {
				set(() => ({ language }));
			}
		}),
		{ name: TOKEN + "_" + "preferences" }
	)
);
