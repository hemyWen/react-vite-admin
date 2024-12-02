import { HashRouter } from "react-router-dom";
import Router from "./routers";
import { ConfigProvider } from "antd";
function App() {
	return (
		<HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
			<ConfigProvider>
				<Router />
			</ConfigProvider>
		</HashRouter>
	);
}

export default App;
