import { permanentRedirect } from "next/navigation";

export default function CompanyServicesRedirectPage() {
  permanentRedirect("/services");
}
