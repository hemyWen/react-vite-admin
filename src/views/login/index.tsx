import LanguageButton from "@/layout/header/components/LanguageButton";
import LoginForm from "./components/LoginForm";
import ThemeButton from "@/layout/header/components/ThemeButton";
const Login = () => {
	return (
		<>
			<div className="relative w-screen h-dvh bg-gray-100 dark:bg-gray-900 center hm">
				<header className="absolute right-6 top-6 center">
					<ThemeButton />
					<LanguageButton />
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
