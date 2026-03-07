import { useLanguage } from "@/store/use-language";
import { translations } from "@/config/i18n";

export function useTranslation() {
    const { language } = useLanguage();
    return translations[language];
}
