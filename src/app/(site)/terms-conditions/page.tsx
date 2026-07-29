import { permanentRedirect } from "next/navigation";

export default function LegacyTermsConditionsPage() {
  permanentRedirect("/terms");
}
