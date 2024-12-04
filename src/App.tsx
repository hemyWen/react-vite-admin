import { HashRouter } from "react-router-dom";
import Router from "./routers";
import { ConfigProvider, theme } from "antd";
import { usePerferencesStore } from "./store";
function App() {
	const themeType = usePerferencesStore(state => state.theme);
	return (
		<HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
			<ConfigProvider
				theme={{ cssVar: { key: "hm" }, algorithm: themeType === "light" ? theme.defaultAlgorithm : theme.darkAlgorithm }}
			>
				<Router />
			</ConfigProvider>
		</HashRouter>
	);
}

export default App;
