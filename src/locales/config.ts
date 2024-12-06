import { initReactI18next } from "react-i18next";
import { getZhLang, getEnLang } from "./utils/helper";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enUS from "antd/locale/en_US";
import zhCN from "antd/locale/zh_CN";

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		debug: true,
		fallbackLng: "zh",
		interpolation: {
			escapeValue: false
		},
		resources: {
			zh: {
				translation: getZhLang()
			},
			en: {
				translation: getEnLang()
			}
		}
	});

export const ANT_DESIGN_LOCALE = {
	zh: zhCN,
	en: enUS
};
export type LanguageType = "zh" | "en";
export default i18n;
