import { BasicButton } from "@/components/Buttons";
import { useLanguage } from "@/hooks/useLanguage";
import { LanguageType } from "@/locales/config";
import { TranslationOutlined } from "@ant-design/icons";
import { ButtonProps, Dropdown, MenuProps } from "antd";

export default function LanguageButton(props: ButtonProps) {
	const { language, setLanguage } = useLanguage();
	const items: MenuProps["items"] = [
		{
			label: "简体中文",
			key: "zh"
		},
		{
			label: "English",
			key: "en"
		}
	];
	const onClick: MenuProps["onClick"] = ({ key }) => {
		setLanguage(key as LanguageType);
	};
	return (
		<Dropdown
			menu={{
				items,
				onClick,
				selectable: true,
				selectedKeys: [language]
			}}
			trigger={["click"]}
			arrow={false}
			placement="bottom"
		>
			<BasicButton type="text" {...props}>
				<TranslationOutlined />
			</BasicButton>
		</Dropdown>
	);
}
