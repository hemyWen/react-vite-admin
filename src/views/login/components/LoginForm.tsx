import { Button, Form, Input } from "antd";
import { UserOutlined, LockOutlined, CloseCircleOutlined } from "@ant-design/icons";
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
				<Button onClick={() => {}} icon={<CloseCircleOutlined />}>
					重置
				</Button>
				<Button type="primary" htmlType="submit" loading={loading} icon={<UserOutlined />}>
					确认登录
				</Button>
			</Form.Item>
		</Form>
	);
};
export default LoginForm;
