import { Button, Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useState } from "react";
const LoginForm = () => {
	const [loading] = useState<boolean>(false);
	return (
		<Form name="basic" labelCol={{ span: 5 }} initialValues={{ remember: true }} size="large" autoComplete="off">
			<Form.Item name="username" rules={[{ required: true, message: "请输入用户名" }]}>
				<Input placeholder="用户名：admin / user" prefix={<UserOutlined />} />
			</Form.Item>
			<Form.Item name="password" rules={[{ required: true, message: "请输入密码" }]}>
				<Input.Password autoComplete="new-password" placeholder="密码：123456" prefix={<LockOutlined />} />
			</Form.Item>
			<Form.Item className="login-btn">
				<Button className="w-full" color="primary" variant="solid" loading={loading}>
					确认登录
				</Button>
			</Form.Item>
		</Form>
	);
};
export default LoginForm;
