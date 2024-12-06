/*
 * @Date: 2024-12-02 17:26:54
 * @LastEditTime: 2024-12-06 15:36:18
 * @Description:切换主题组件
 */

import { useEffect } from "react";
import { SunOutlined, MoonOutlined } from "@ant-design/icons";
import { usePreferencesStore } from "@/store";

export default function ThemeButton() {
	const theme = usePreferencesStore(state => state.theme);
	const changeSiteTheme = usePreferencesStore(state => state.changeSiteTheme);
	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [theme]);
	return (
		<>
			{theme === "light" && <SunOutlined className="text-gray-600" onClick={() => changeSiteTheme("dark")} />}
			{theme === "dark" && <MoonOutlined className="text-gray-600" onClick={() => changeSiteTheme("light")} />}
		</>
	);
}
