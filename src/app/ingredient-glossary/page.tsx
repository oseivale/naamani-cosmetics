import Link from "next/link";
import FAQ from "../components/faqs";
import PageBanner from "../components/page-wrapper";
import styles from "./styles.module.css";
import { NaamaniSafety } from "../icons/naamani-safety";

export default function IngredientGlossary() {

  const items = [
    {
      title: "Aloe Vera Gel",
      content: `Aloe Vera gel is a derivative of the leaves of aloe plants. Folks have used the
                gel for thousands of years for healing and softening the skin. Aloe Vera
                contains antioxidants, enzymes, Vitamins A and C and it can help when used in
                cosmetics for acne prone and dry skin types.`,
    },
    {
      title: "Cocoa Butter—Theobroma Cacao",
      content: `Cocoa Seed Butter, also known as Cocoa Butter is the natural, edible fat obtained
                from the roasted seeds of Theobroma Cacao. The butter is extracted during the
                process of making chocolate and cocoa powder. The butter is well known to form
                a protective barrier on the skin’s surface, helping to slow down the loss of
                moisture from the skin. We have selected cocoa butter as one of the key
                ingredients in our body butter formulations due to its natural antioxidant
                properties, helping to reduce rancidity.
                The velvety texture, pleasant fragrance and fantastic emollient properties of
                cocoa butter when combined with other natural ingredients like Shea Butter,
                
                Sweet Almond Oil and Jojoba Oil with a touch of Tahitian Vanilla Oil fragrance,
                makes it very appealing to the senses.`,
    },
    {
      title: "Evening Primrose Oil",
      content: `Evening Primrose Oil is made from the seeds of a plant native to North America.
                The plant has healing benefits that may be due to its gamma-linolenic acid (GLA)
                content. GLA is an omega fatty acid found in plant oils. The GLA in Evening
                Primrose may improve acne prone skin by reducing skin inflammation and the
                number of skin cells that cause lesions.
                We include EPO in our formulations for oily skin to help smooth the skin and
                improve elasticity, moisture and firmness.`,
    },
    {
      title: "Grapeseed Oil",
      content: `Grapeseed oil is a vegetable oil derived from the seeds of grapes and a byproduct
                of winemaking. The oil has high amounts of polyunsaturated fats, mainly omega -
                6 and vitamin E, promoting it as healthy for the skin.
                
                Grapeseed oil is lightweight and is non comedogenic, and is rich in oleic and
                linoleic essential fatty acids, making it suitable for most skin types including
                sensitive and acne prone.
                We use cold-pressed grapeseed oil due to its more active potential, helping to
                keep its antioxidant, anti-inflammatory and antimicrobial properties intact. We
                include grapeseed oil in our formulation as it helps to improve skin’s elasticity and
                softness.`,
    },
    {
      title: "Jojoba Oil",
      content: `Jojoba oil is produced from the seed of the Simmondsia Chinensis jojoba plant, a
                shrub that is native to southern Arizona southern California and northwestern
                Mexico. People also refer to jojoba oil as jojoba wax. Visually, it appears to be a
                mobile oil, but as a wax, it is composed of long-chain fatty acids, alcohols and only
                a minute fraction of triglyceride esters.
                Jojoba oil is known to contain natural oils that are comparable to the natural
                sebum produced by human skin. When used in skin care formulation, jojoba oil
                works to keep the skin from losing moisture by providing a protective seal to the
                skin surface.`,
    },
    {
      title: "Kukui Nut Oil",
      content: `Kukui nut tree is the official state tree of Hawaii. This tree is known elsewhere as
                candlenut tree. Historians consider the kukui nut tree in Hawaii as one of a
                number of “canoe” plants. The story is that the Polynesians brought such seeds
                with them in canoes when they first came to Hawaii. The tree holds much
                symbolism for Hawaiians. The kukui nut represents protection, peace,
                enlightenment and light.
                The kukui nut produces kukui nut oil, which is cold pressed from the kernels of
                the tree. This light oil is used today in all high quality skin preparations due to its ability to penetrate quickly into the skin to keep it moisturized. It is ideal for
                application on skin distressed by dryness and other similar conditions.
                Due to its essential fatty acids, vitamins and antioxidant contents, we incorporate
                Kukui nut oil in our Face Oil and Lip Balm formulations to help soothe dry skin.`,
    },
    {
      title: "Mango Butter",
      content: `Mango butter is extracted from the kernels of the mango tree. Mango butter is a
                rich source of antioxidants, emollients, Vitamins A and E, providing its
                moisturizing properties and believed to be useful in helping reduce the
                appearance of fine lines and wrinkles. The butter possesses high oxidative ability
                thereby supporting in skin cell regeneration.
                We include Mango Butter in our Whipped Body Butters due to its ideal emollient
                properties for seasonal temperature changes, helping the skin to restore its lipid
                structure after exposure to external elements like the cold, sun and wind.`,
    },
    {
      title: "Pomegranate Oil",
      content: `Pomegranate has been hyped as a superfood in recent years due to its reputation
                as a fruit that can lower inflammation and improve overall health. Its benefits has
                to do with polyphenols, the powerful antioxidant –containing nutrient found in
                other plants such as berries and green tea.
                Antioxidants such as Vitamin C found in pomegranate may work to reduce cellular
                damage in the body. These nutrients provide skin benefits by fighting bacteria and
                fungus in the skin.
                Pomegranate oil has a rich source of the unique polyunsaturated acid known as
                punicic acid that makes it a popular choice in quality facial products.
                We formulate our Face Oil with the right amount of Pomegranate Seed Oil due to
                its known benefits to the skin.`,
    },
    {
      title: "Rosehip (Rosa Canina) Seed Oil",
      content: `Rosehip seed oil comes from the Rosa Canina rose bush, primarily grown in Chile.
                The fruit and seeds of the Rosehip plant yields the oil through cold pressing. It is
                loaded with skin nourishing vitamins A and C, leaving the skin glowing and
                vibrant. The presence of Vitamin E, an antioxidant, may also contributes to the
                oil’s anti-inflammatory properties. It is rich with many fatty acids including
                linolenic and linoleic acids. Fatty acids can help to keep cell walls strong in order
                
                to retain moisture. The fatty acids in rosehip oil makes it an excellent option for
                hydrating dry, itchy skin.
                The skin easily absorbs the oil, allowing it to penetrate deep into the skin’s layers.
                It can help to reduce the signs of sun damage, fine lines and wrinkles. People with
                acne prone skin may use Rosehip oil to cleanse and nourish their skin due to its
                moderately high content of linoleic acid and a comedogenic rating of one, making
                it a very low likelihood of clogging your pores.
                We create our skin care products with rosehip oil, harnessing the benefits of the
                properties contained in the oil to improve the skin’s overall appearance.`,
    },
    {
      title: "Sea Buckthorn (Hippophae rhamnoides)",
      content: `Sea Buckthorn oil is best known for its omega 7 content. The oil has an almost
                perfect balance of linoleic acid (omega 6), oleic acid (omega 9), and other
                important Essential Fatty Acids like omega 3. It is a rich source of Vitamins A, B1,
                B2, K, C, E, carotenes, flavonoids and other microelements.
                The pulp of the berries of Sea buckthorn plant is cold pressed to produce the
                deep orange-reddish brown oil.
                Due to the rich content of all four essential fatty acids and flavonoids, we use sea
                buckthorn oil in our Face Oil formulation to benefit from its antioxidant properties
                in promoting healthy looking skin.`,
    },
    {
      title: "Shea Butter (Butyrospermum Parkii)",
      content: `Shea Butter is a fat extracted from the nut of the African Shea tree. It is ivory in
                color when raw; can have a yellowish appearance when dyed with palm oil. In
                Ghana where I come from, we use Shea butter in cooking recipes as well as
                cosmetic formulations to improve our hair and skin. Globally, Shea butter has
                gained popularity as it is widely used in cosmetics as a moisturizer, salve or lotion.
                It has high content of oleic acid and penetrates rapidly into the skin. It is an
                excellent emollient for dry skin. Its rich buttery consistency, soothing and
                moisturizing properties makes it ideal in the use of our body butters.
                At Naamani, we believe in natural beauty and incorporate Shea butter as a key
                ingredient in our formulations due to its versatility as a natural beauty ingredient.`,
    },
    {
      title: "Sweet Almond Butter (Prunus Amygdalus Dulcis)",
      content: `Sweet almond is a plant that produces edible kernels (nuts). Sweet Almond oil is
                  produced by the cold pressing the kernels of the Prunus Amygdalus. The oil is an
                  emollient used widely in cosmetics.
                  It contains Vitamins A, which has the ability to stimulate the production of new
                  skin cells and smooth fine lines and Vitamin E, the antioxidant that may help
                  prevent cell damage. It also contains Omega- 3 fatty acid, the nutrients may help
                  prevent premature aging and protect against sun damage.
                  Due to its emollient properties, sweet almond oil has the potential to improve
                  both complexion, skin tone, and improve dry skin.`,
    },
  ];

  return (
    <div>
      <PageBanner
        title={"Naamani Ingredient Glossary"}
        backgroundImage={"/images/naamani-shop-bg-img.avif"}
      >
        <div className={styles.faqs}>
          <div className={styles.infoWrapper}>
            <h1 className={styles.safetyHeader}>
              The full list of ingredients for every product is included in our
              label.
            </h1>
            <div className={styles.safetyCardWrapper}>
              <div className={styles.safetyIcon}>
                <NaamaniSafety />
              </div>
              <div className={styles.safetyText}>
                <h2>
                  {" "}
                  As a maker of personal care products, we take responsibility
                  in ensuring that your safety is our priority.{" "}
                </h2>
              </div>
            </div>

            <p>
              We have therefore included information on the key ingredients we
              use to formulate our cosmetics.
            </p>
            <strong>
              Below, you will find information about the raw materials we use
              and some of their benefits.
            </strong>
          </div>
        </div>
        <div className={styles.faqWrapper}>
          <FAQ items={items} />
          <div className={styles.questionWrapper}>
            <p className={styles.askText}>Questions about our products?</p>
            <Link href={"/contact"} className={styles.questionsText}>
              {" "}
              Feel free to reach out!
            </Link>
          </div>
        </div>
      </PageBanner>
    </div>
  );
}
