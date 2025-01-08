import HeroBanner from "./components/hero";
import FeaturedProducts from "./components/featured-products";
import SectionOne from "./components/section-one";
import SectionTwo from "./components/section-two";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <SectionOne />
      <SectionTwo />
      <FeaturedProducts />
    </div>
  );
}
