import { permanentRedirect } from "next/navigation";

export default function LegacyOfferPage() {
  permanentRedirect("/services");
}
