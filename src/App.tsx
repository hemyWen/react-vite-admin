import { HashRouter } from "react-router-dom";
import Router from "@/routers";
import { ConfigProvider, theme } from "antd";

import { usePreferences } from "@/hooks/usePreferences";

import { ANT_DESIGN_LOCALE } from "./locales/config";
function App() {
	const { isLight, language } = usePreferences();
	const getAntdLocale = () => {
		return ANT_DESIGN_LOCALE[language];
	};

	return (
		<HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
			<ConfigProvider
				locale={getAntdLocale()}
				theme={{ cssVar: { key: "hm" }, algorithm: isLight ? theme.defaultAlgorithm : theme.darkAlgorithm }}
			>
				<Router />
			</ConfigProvider>
		</HashRouter>
	);
}

export default App;
