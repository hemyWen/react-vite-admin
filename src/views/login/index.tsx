import LoginForm from "./components/LoginForm";
import Theme from "@/layout/header/components/Theme";
const Login = () => {
	return (
		<>
			<div className="relative w-screen h-dvh bg-gray-100 dark:bg-gray-900 center hm">
				<header className="absolute right-6 top-6 center">
					<Theme />
				</header>
				<div className="size-80 px-6 rounded-lg bg-white dark:bg-black">
					<div className="w-full h-12 py-14 text-3xl font-bold center text-color-text-base">hm-admin</div>
					<LoginForm />
				</div>
			</div>
		</>
	);
};
export default Login;
