import styles from "./styles.module.css";
import PageBanner from "../components/page-wrapper";
import { CrueltyFree } from "../icons/naamani-cruelty-free";
import { GlutenFree } from "../icons/naamani-gluten-free";
import { ParabenFree } from "../icons/naamai--paraben-free";
import { NaturalResources } from "../icons/natural-resources";
import { NaamaniCanada } from "../icons/naamani-canada";
import { NaamaniEarth } from "../icons/naamani-earth";

export default function About() {
  // const rows = [
  //   {
  //     image: "/images/row1.jpg",
  //     content: (
  //       <p>
  //         I believe that our body is a sacred gift from nature. The human skin
  //         is the largest organ of our body and I think that if we nourish our
  //         skin with the powerful ingredients from plant sources, not only do we
  //         maintain our natural beauty; we in turn preserve the earth for our
  //         future generations.
  //       </p>
  //     ),
  //     cta: "Learn More",
  //   },
  //   {
  //     image: "/images/row2.jpg",
  //     content: (
  //       <p>
  //         With this vision, comes the creation of Naamani Artisan Cosmetics,
  //         focusing on the use of raw materials and ethically sourced essential
  //         oils derived from organic sources.
  //       </p>
  //     ),
  //     cta: "Explore Now",
  //     reverse: true,
  //   },
  //   {
  //     image: "/images/row3.jpg",
  //     content: (
  //       <p>
  //         We strive to purchase all our raw materials from reputable Canadian
  //         Companies who also believe in sourcing their products directly from
  //         the local communities that produce these raw materials. Doing so
  //         ensures a strong and healthy Canadian economy for small businesses;
  //         supports the local communities from which we receive these raw and
  //         organic materials while enabling us to use natural resources in a
  //         responsible manner.
  //       </p>
  //     ),
  //     cta: "Shop Now",
  //   },
  //   // {
  //   //   image: "/images/row3.jpg",
  //   //   content: (
  //   //     <p>
  //   //       Our goal is to create natural products for skin care with love and
  //   //       passion, focusing on making small batches at a time to ensure your
  //   //       full satisfaction with every product you receive. Our product line
  //   //       includes:  Revitalizing Foaming Cleansers  Rejuvenating Face Oil 
  //   //       Nourishing Face Cream for dry, combination and oily skin types 
  //   //       Calming Eye Cream  Moisturizing Body Butters with a variety of
  //   //       natural fragrance oils and essential oils to appeal to your senses 
  //   //       Refreshing Lip Balms
  //   //     </p>
  //   //   ),
  //   //   cta: "Shop Now",
  //   //   reverse: true,
  //   // },
  // ];

  return (
    <div>
      <PageBanner
        title={"About"}
        customBGStyles={{bgPosition: 'center 75%'}}
        backgroundImage={"/images/maddi-bazzocco-UKGGgWb6_0g-unsplash.jpg"}
      >
        <div className={styles.headerContainer}>
          <h1 className={styles.mainHeader}>Our Belief</h1>
          <h2 className={styles.subheader}>
            {" "}
            Your body is a sacred gift from nature.
          </h2>
          <p>
            The human skin is the largest organ of our body and I think that if
            we nourish our skin with the powerful ingredients from plant
            sources, not only do we maintain our natural beauty; we in turn
            preserve the earth for our future generations. With this vision,
            comes the creation of Naamani Artisan Cosmetics.
          </p>
        </div>
        {/* <h1>Why Naamani?</h1> */}
        <div className={styles.iconCardWrapper}>
          <div className={styles.iconCard}>
            <div className={styles.iconBackground}>
              <CrueltyFree />
            </div>

            <h1 className={styles.iconCardHeader}>Cruelty-free</h1>
            <p className={styles.cardText}>
              Ethically sourced essential oils derived from organic sources.
            </p>
          </div>
          <div className={styles.iconCard}>
            <div className={styles.iconBackground}>
              <ParabenFree />
            </div>

            <h1 className={styles.iconCardHeader}>Paraben-free</h1>
            <p className={styles.cardText}>
              We focus on the use of natural, raw materials. There are no
              parabens in any of our products.
            </p>
          </div>
          <div className={styles.iconCard}>
            <div className={styles.iconBackground}>
              <GlutenFree />
            </div>

            <h1 className={styles.iconCardHeader}>Gluten-free</h1>
            <p className={styles.cardText}>
              Our products are gluten-free,
              ensuring a gentle and safe experience for all skin types.
            </p>
          </div>
        </div>
        <div className={styles.bioWrapper}>
          <h1 className={styles.bioHeader}>Allow me to introduce myself...</h1>
          {/* <h2 className={styles.subheader}>
            {" "}
            Your body is a sacred gift from nature.
          </h2> */}
          <p>
            My name is Doris. I was born and raised in Ghana, West Africa and
            migrated to Canada in 1992. Where I grew up, almost every house had
            a garden in our backyard. Being so close to a variety of plants and
            nature, we were accustomed to picking up an avocado from a tree or
            opening a cocoa pod to enjoy the delicious taste of the cocoa pulp
            right from the source.
          </p>
        </div>

        <div className={styles.bioWrapper}>
          <h1 className={styles.bioHeader}>
            In much the same way, our personal care routines were just as
            simple.
          </h1>
          {/* <h2 className={styles.subheader}>
            {" "}
            Your body is a sacred gift from nature.
          </h2> */}
          <p>
            {" "}
            We were able to maintain our natural beauty with the use of raw,
            organically sourced African Black Soap, Shea Butter and Cocoa Butter
            due to their abundance and easy accessibility. These simple skin
            care routines continue to promote healthy, glowing skin while
            sustaining our natural resources.
          </p>
        </div>

        <div>
          <div className={styles.highlightsWrapper}>
            <div className={styles.highlightCard}>
              <NaamaniCanada />
              <h2>Local</h2>
            </div>
            <div className={styles.highlightCard}>
              <NaturalResources />
              <h2>Natural</h2>
            </div>
            <div className={styles.highlightCard}>
              <NaamaniEarth />
              <h2>Conscious</h2>
            </div>
          </div>
          <div className={styles.bioWrapper}>
            <h1 className={styles.bioHeader}>Our Goal</h1>
            <h2 className={styles.subheader}>
              We strive to purchase all our raw materials from reputable
              Canadian Companies who also believe in sourcing their products
              directly from the local communities that produce these raw
              materials.
            </h2>

            <p>
              {" "}
              Doing so ensures a strong and healthy Canadian economy for small
              businesses; supports the local communities from which we receive
              these raw and organic materials while enabling us to use natural
              resources in a responsible manner.
            </p>
          </div>
        </div>
       
        {/* <p>
          My name is Doris. I was born and raised in Ghana, West Africa and
          migrated to Canada in 1992. Where I grew up, almost every house had a
          garden in our backyard. Being so close to a variety of plants and
          nature, we were accustomed to picking up an avocado from a tree or
          opening a cocoa pod to enjoy the delicious taste of the cocoa pulp
          right from the source. In much the same way, our personal care
          routines were just as simple. We were able to maintain our natural
          beauty with the use of raw, organically sourced African Black Soap,
          Shea Butter and Cocoa Butter due to their abundance and easy
          accessibility. These simple skin care routines continue to promote
          healthy, glowing skin while sustaining our natural resources.
        </p> */}
        {/* <div>
          <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>About Us</h1>
          {rows.map((row, index) => (
            <AlternatingRow
              key={index}
              // image={row.image}
              image={
                "https://venedorcitrus.myshopify.com/cdn/shop/products/ce535e88-c69c-4e07-8cb3-7f90c3ca7a21_05.jpg?v=1604581404&width=220"
              }
              image="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              content={row.content}
              cta={row.cta}
              reverse={row.reverse}
            />
          ))}
        </div> */}
        {/* <p>
          The full list of our ingredients for every product is included in our
          label. As a maker of personal care products, we take responsibility in
          ensuring that your safety is our priority. We have therefore included
          information on the key ingredients we use to formulate our cosmetics.
          Below, you will find information about the raw materials we use and
          some of their benefits.
        </p> */}
      </PageBanner>
    </div>
  );
}
