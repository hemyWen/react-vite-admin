import { HashRouter } from "react-router-dom";
import Router from "./routers";
import { ConfigProvider } from "antd";
import { useState } from "react";
function App() {
	const [colorPrimary] = useState<string>("#00b96b");

	return (
		<HashRouter>
			<ConfigProvider
				theme={{
					token: {
						colorPrimary
					},
					cssVar: {
						key: "hm"
					}
				}}
			>
				<Router />
			</ConfigProvider>
		</HashRouter>
	);
}

export default App;
