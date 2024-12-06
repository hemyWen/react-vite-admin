import { Button, ButtonProps } from "antd";
import type { ReactNode } from "react";
interface BasicButtonProps extends ButtonProps {
	children?: ReactNode;
}

export default function BasicButton(props: BasicButtonProps) {
	const { children } = props;
	const params: Partial<ButtonProps> = { ...props };
	return (
		<Button type="primary" {...params}>
			{children}
		</Button>
	);
}
