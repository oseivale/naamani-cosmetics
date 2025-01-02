import Image from "next/image";
import styles from "./page.module.css";
import HeroBanner from "./components/hero";
import FeaturedProducts from "./components/featured-products";
import SectionOne from "./components/section-one";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <SectionOne />
      <FeaturedProducts />
      {/* <h1>HOME Page</h1>
      <h2>Naamani Cosmetics</h2>
      <p>Lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, modi saepe placeat itaque animi in unde libero molestiae ut est sunt ullam voluptatibus distinctio nisi mollitia quos ipsa dolorum. Sed.</p> */}
    </div>
  );
}
