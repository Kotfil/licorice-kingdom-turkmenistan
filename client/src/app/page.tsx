import { Header } from "@/components/layout/header/header";
import { Footer } from "@/components/layout/footer/footer";
import { CenteredSection } from "@/components/sections/centered-section/centered-section";

/**
 * Home page: semantic layout with header, two centered sections, footer.
 * Responsive from 320px to 4K.
 */
export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1" role="main">
        <CenteredSection id="section-1" title="First block">
          <p>
            This is the first centered section. Content is constrained and
            readable from small screens up to 4K displays.
          </p>
        </CenteredSection>
        <CenteredSection id="section-2" title="Second block">
          <p>
            This is the second centered section. Same responsive and semantic
            structure for consistency and SEO.
          </p>
        </CenteredSection>
      </main>
      <Footer />
    </>
  );
}
