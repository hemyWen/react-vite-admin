import { useEffect } from "react";

import { SunOutlined, MoonOutlined } from "@ant-design/icons";
import { usePerferencesStore } from "@/store";

export default function Theme() {
	const theme = usePerferencesStore(state => state.theme);
	const changeSiteTheme = usePerferencesStore(state => state.changeSiteTheme);
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
