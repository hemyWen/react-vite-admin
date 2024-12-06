import { LanguageType } from "@/locales/config";
import { usePreferencesStore } from "@/store";
import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";

export function useLanguage() {
	const { i18n } = useTranslation();
	const { changeLanguage } = usePreferencesStore();
	const handleChangeLanguage = useCallback(
		async (locale: LanguageType) => {
			changeLanguage(locale);
			await i18n.changeLanguage(locale);
		},
		[changeLanguage, i18n]
	);
	return useMemo(
		() => ({
			setLanguage: handleChangeLanguage,
			language: i18n.language as LanguageType
		}),
		[handleChangeLanguage, i18n.language]
	);
}
