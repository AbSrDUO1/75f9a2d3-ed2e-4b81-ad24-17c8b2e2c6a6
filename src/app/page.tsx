"use client"
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navigation/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import FooterLogoEmphasisBackgroundGradient from '@/components/footer/FooterLogoEmphasisBackgroundGradient';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "futuristicAndOutOfBox", colorTemplate: 2, textAnimation: "highlight" }}>
      <NavbarLayoutFloatingOverlay
        logoSrc="/images/logo.svg"
        logoWidth={120}
        logoHeight={40}
        navItems={[{ name: "Hero", id: "hero" }, { name: "About", id: "about" }, { name: "How to Buy", id: "how-to-buy" }, { name: "Tokenomics", id: "tokenomics" }, { name: "Footer", id: "footer" }]}
        buttonText="Start Free Trial"
        onButtonClick={() => { /* click handler */ }}
      />
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <BillboardHero title="Welcome to NebulaFlow" subtitle="Drive your digital success with us!" />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SplitAbout description="NebulaFlow provides the tools you need to turn ideas into reality. Our easy-to-use platform is designed for innovators who are eager to embrace the future of technology." />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          title="How to Buy"
          steps={[
            { title: "Step 1", description: "Create an account on our site", image: "/images/placeholder1.avif", position: "first", isCenter: false },
            { title: "Step 2", description: "Verify your identity", image: "/images/placeholder2.avif", position: "second", isCenter: true },
            { title: "Step 3", description: "Complete your purchase", image: "/images/placeholder3.avif", position: "last", isCenter: false }
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <NumberGridTokenomics
          title="Our Tokenomics"
          description="Explore the fundamental attributes of our token."
          kpiItems={[
            { value: "500M", description: "Total Supply" },
            { value: "200M", description: "Circulating Supply" },
            { value: "100M", description: "Locked Tokens" }
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasisBackgroundGradient
          logoSrc="/images/logo.svg"
          logoAlt="NebulaFlow Logo"
          logoText="NebulaFlow"
          items={[{ label: "Privacy Policy", onClick: () => { /* click handler */ } }, { label: "Terms of Service", onClick: () => { /* click handler */ } }, { label: "Contact Us", onClick: () => { /* click handler */ } }]}
        />
      </div>
    </SiteThemeProvider>
  );
}
