import { Button, Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import type { FormProps } from "antd";
import { LoginData } from "../model";
import { login } from "@/api/login";
const LoginForm = () => {
	const { t } = useTranslation();
	const [loading, setLoading] = useState<boolean>(false);
	const handleFinish: FormProps["onFinish"] = async (values: LoginData) => {
		try {
			const { code, data } = await login(values);
			console.log(code, data);
		} finally {
			setLoading(false);
		}
	};
	return (
		<Form
			name="login_form"
			labelCol={{ span: 5 }}
			size="large"
			autoComplete="on"
			onFinish={handleFinish}
			initialValues={{
				username: "admin",
				password: "admin123456"
			}}
		>
			<Form.Item name="username" rules={[{ required: true, message: t("login.username") }]}>
				<Input placeholder={t("login.username")} prefix={<UserOutlined />} />
			</Form.Item>
			<Form.Item name="password" rules={[{ required: true, message: t("login.passwordRuleMessage") }]}>
				<Input.Password autoComplete="new-password" placeholder={t("login.password")} prefix={<LockOutlined />} />
			</Form.Item>
			<Form.Item className="login-btn">
				<Button className="w-full" htmlType="submit" color="primary" variant="solid" loading={loading}>
					{t("login.login")}
				</Button>
			</Form.Item>
		</Form>
	);
};
export default LoginForm;
