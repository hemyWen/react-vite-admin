import { Button, Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import type { FormProps } from "antd";
import { LoginData } from "@/api/login/model";
import { useUserStore } from "@/store/user";
import { useTokenStore } from "@/store/token";
import { useNavigate, useSearchParams } from "react-router-dom";
import { fetchLogin } from "@/api/login";

const LoginForm = () => {
	const { t } = useTranslation();
	const [loading, setLoading] = useState<boolean>(false);
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();
	const getUserInfo = useUserStore(state => state.getUserInfo);
	const handleFinish: FormProps["onFinish"] = async (values: LoginData) => {
		setLoading(true);
		try {
			const { data } = await fetchLogin(values);
			useTokenStore(state => state.setToken(data));
			const promises = [];
			promises.push(getUserInfo());
			const results = await Promise.allSettled(promises);
			const hasError = results.some(result => result.status === "rejected");
			if (hasError) {
				navigate("/500");
			} else {
				const redirect = searchParams.get("redirect");
				if (redirect) {
					navigate(`/${redirect.slice(1)}`);
				} else {
					navigate("/");
				}
			}
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
