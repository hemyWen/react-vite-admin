import "./index.css";
const Login = () => {
	return (
		<>
			{["首页", "学习TailwindCSS", "TailwindCSS的设计哲学", "最佳实践"].map(item => {
				return <div className="menu">{item}</div>;
			})}
		</>
	);
};
export default Login;
