import { DEFAULT_PREFERENCES, usePreferencesStore } from "@/store";
import { useMemo } from "react";

export function usePreferences() {
	const preferences = usePreferencesStore();
	const { theme } = preferences;
	const isDark = theme === "dark";
	const isLight = theme === "light";
	//是否为默认的用户偏好设置
	const isDefault = useMemo(() => {
		return Object.entries(DEFAULT_PREFERENCES).every(([key, value]) => preferences[key as keyof typeof preferences] === value);
	}, [preferences]);
	return { ...preferences, isDefault, isDark, isLight };
}
