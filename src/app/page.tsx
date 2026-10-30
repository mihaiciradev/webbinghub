import { permanentRedirect } from "next/navigation";
import { defaultLocale } from "@/i18n/config";

// Root → redirect to default locale
export default function RootPage() {
  permanentRedirect(`/${defaultLocale}`);
}
