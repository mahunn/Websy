import { LanguageProvider } from "@/components/providers/language-provider";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteBackground } from "@/components/layout/site-background";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <SiteBackground />
      <SiteHeader />
      <main className="relative min-h-screen pt-24">{children}</main>
      <SiteFooter />
    </LanguageProvider>
  );
}
