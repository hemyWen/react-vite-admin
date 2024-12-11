import { Spin } from "antd";

export default function Login({ tip = "loading" }: { tip?: string }) {
	return <Spin tip={tip} size="large" />;
}
