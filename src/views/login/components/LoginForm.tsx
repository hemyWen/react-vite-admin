import { Button, Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useTranslation } from "react-i18next";
const LoginForm = () => {
	const { t } = useTranslation();
	const [loading] = useState<boolean>(false);
	return (
		<Form name="basic" labelCol={{ span: 5 }} initialValues={{ remember: true }} size="large" autoComplete="off">
			<Form.Item name="username" rules={[{ required: true, message: t("login.username") }]}>
				<Input placeholder={t("login.username")} prefix={<UserOutlined />} />
			</Form.Item>
			<Form.Item name="password" rules={[{ required: true, message: t("login.passwordRuleMessage") }]}>
				<Input.Password autoComplete="new-password" placeholder={t("login.password")} prefix={<LockOutlined />} />
			</Form.Item>
			<Form.Item className="login-btn">
				<Button className="w-full" color="primary" variant="solid" loading={loading}>
					{t("login.login")}
				</Button>
			</Form.Item>
		</Form>
	);
};
export default LoginForm;
