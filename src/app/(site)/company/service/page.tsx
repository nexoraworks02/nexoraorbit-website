import { permanentRedirect } from "next/navigation";

export default function CompanyServiceRedirectPage() {
  permanentRedirect("/services");
}
