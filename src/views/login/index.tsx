import LoginForm from "./components/LoginForm";
const Login = () => {
	return (
		<>
			<div className="w-screen h-dvh bg-gray-100 center">
				<div className="size-80 px-6 bg-white rounded-lg">
					<div className="w-full h-12 py-14 text-3xl font-bold center text-blue-500">hm-admin</div>
					<LoginForm />
				</div>
			</div>
		</>
	);
};
export default Login;
