import { Navigate, useRoutes } from "react-router-dom";
import { RouteObject } from "./interface";
import Login from "@/views/login";
import Error404 from "@/views/error/404";
export const rootRouter: RouteObject[] = [
	{
		path: "/",
		element: <Navigate to="/login" />
	},
	{
		path: "/login",
		element: <Login />,
		meta: {
			requiresAuth: false,
			title: "登录",
			key: "login"
		}
	},
	{
		path: "/404",
		element: <Error404 />,
		meta: {
			requiresAuth: false,
			title: "404页面",
			key: "404"
		}
	},
	{
		path: "*",
		element: <Navigate to="/404" />
	}
];
const Router = () => {
	const routes = useRoutes(rootRouter);
	return routes;
};
export default Router;
