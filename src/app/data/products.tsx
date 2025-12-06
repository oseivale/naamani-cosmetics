export const products = [
  {
    id: "1",
    name: "Cleansing Oil for Face",
    price: 15,
    availability: 80,
    category: "face",
    description: `We have made this cleansing oil with organic carrier oils high in essential fatty acids, oleic acids, and
      antioxidants. Oils such as Camellia Seed oil contain tannins, making them feel dry while working as
      effective astringents. Dry oils such as Black Cumin Seed oil easily absorb into the skin, making them
      the favorite choice for massaging onto the skin while removing surface impurities. We have carefully
      selected a list of carrier oils that work synergistically to cleanse your skin by removing impurities on
      the skin surface, while absorbing into the skin to improve hydration.`,
    ingredients: `Aqua, *Butyrospermum Parkii (Shea Butter), *Caprylic/Capric
      Triglyceride, *African Black Soap, Aloe Barbadensis (Aloe Vera) Leaf Juice,
      Glycerin, Aveena sativa (Oat) Kernel Flour, d-alpha tocopherol, Chamomile
      recutita (Chamomile) Oil, Lavendula angostifolia (Lavender) Flower Oil,
      Gluconolactone (and) Sodium Benzoate`,
    directions: `Wet face. |Apply up to two pumps into palms. |Gently rub all
      over face, avoiding eye area. |Rinse with water. |Apply Face Cream. *If applying
      Toner and Face Oil, start with Toner, allow it to dry, apply Face Oil and lastly Face
      Cream`,
    caution: `This product can irritate the eyes. Avoid contact with eyes. Keep out of
      reach of children. Contains essential Oils. If pregnant or lactating, consult your
      health care practitioner before use. Not for internal use. Test on a small area of
      skin for skin sensitivity or allergies.`,
    scents: null,
    variants: [
      {
        scent: null,
        id: "d8cc5c11-77d4-4e55-b931-fa4961778f7e",
        size: "30ml",
        price: 15,
      },
    ],
    variantHeading: `Choose Your Scent`,
    images: [
      "/images/content-pixie-WdJ4WnLxyDs-unsplash.jpg",
      "https://venedorcitrus.myshopify.com/cdn/shop/products/ce535e88-c69c-4e07-8cb3-7f90c3ca7a21_02.jpg?v=1604581404&width=220",
      "https://venedorcitrus.myshopify.com/cdn/shop/products/ce535e88-c69c-4e07-8cb3-7f90c3ca7a21_05.jpg?v=1604581404&width=220",
    ],
  },
  {
    id: "2",
    name: "Body Butter",
    price: 25.0,
    // price: '8-25',
    availability: 80,
    featured: true,
    category: "body",
    categories: ["Body"],
    description: `We formulate our body butter with natural and organic products.
        We manufacture all our products in small batches at a time to ensure we maintain
        freshness. This rich, velvety blend of cocoa butter with Tahitian Vanilla Fragrance
        Oil transforms from an Indulgent cream to oil when massaged into the skin. The
        unique blend of plant- based products is loaded with vitamins, antioxidants and
        essential fatty acids to help protect your skin and keep it hydrated all day long.
        Relax your senses and enjoy the power of potent plant ingredients.`,
    ingredients: `Aqua, Aloe Barbadensis (Aloe Vera) Leaf Juice, *Butyrospermum
        Parkii (Shea Butter), *Caprylic/Capric Triglyceride, *Simmondsia Chinensis (Jojoba)
        Seed Oil, *Theobroma Cacao (Cocoa Butter) Seed Oil, Mangifera Indica (Mango)
        Seed Butter, *Persea Gratissima (Avocado) Oil, Cetearyl Alcohol (and) Polysorbate
        60, Glycerin, Cetyl Alcohol, Gluconolactone (and) Sodium Benzoate, Fragrance
        (Tahitian Vanilla Fragrance Oil), Rosmarinus officinalis (Rosemary) Oil`,
    directions: `Apply directly to skin after shower. |Massage liberally to allow
        absorption into skin. *Can use all over body including hands.`,
    caution: `Contains essential oils or fragrance. Keep out of reach of children. Avoid
        contact with eyes. If pregnant or lactating, consult your health care practitioner
        before use. Not for internal use. Test on a small area of skin for skin sensitivity or
        allergies.`,
    scents: ["Lavender Vanilla", "Lemon Verbena", "Unscented"],
    sizes: [
      {
        size: "2oz",
        price: 8,
      },
      { size: "8oz", price: 25 },
    ],
    variants: [
      {
        id: "843109683205",
        size: "2oz",
        scent: "Lavender Vanilla",
        price: 8,
      },
      {
        id: "246529971852",
        size: "8oz",
        scent: "Lavender Vanilla",
        price: 25,
      },
      {
        id: "113266595655",
        size: "2oz",
        scent: "Lemon Verbena",
        price: 8,
      },
      {
        id: "250777523489",
        size: "8oz",
        scent: "Lemon Verbena",
        price: 25,
      },
      {
        id: "329393260232",
        size: "2oz",
        scent: "Unscented",
        price: 8,
      },
      {
        id: "343436592625",
        size: "8oz",
        scent: "Unscented",
        price: 25,
      },
    ],
    variantHeading: `Choose Your Scent`,
    images: [
      "/images/content-pixie-WdJ4WnLxyDs-unsplash.jpg",
      "https://venedorcitrus.myshopify.com/cdn/shop/products/ce535e88-c69c-4e07-8cb3-7f90c3ca7a21.jpg?v=1604581404",
      "https://venedorcitrus.myshopify.com/cdn/shop/products/ce535e88-c69c-4e07-8cb3-7f90c3ca7a21_02.jpg?v=1604581404&width=220",
      "https://venedorcitrus.myshopify.com/cdn/shop/products/ce535e88-c69c-4e07-8cb3-7f90c3ca7a21_05.jpg?v=1604581404&width=220",
    ],
  },

  {
    id: "3",
    name: "Face Oil",
    price: 25,
    availability: 80,
    category: "face",
    featured: true,
    description: `We formulate our Face Oils to provide valuable nutrients and
        moisture to the skin. Additionally, because they are oil based products, they
        provide the skin with a protective barrier to help fight against free radicals. The
        Face Oil helps to form the lipid barrier of your skin.
        As we age, the skin’s lipids begin to diminish, resulting in skin that is prone to
        dryness. We have carefully selected specialty oils and essential oils that work
        synergistically to keep the lipid barrier strong and healthy.`,
    productSingleSize: `Size: 30ml`,
    ingredients: `Simmondsia Chinensis (Jojoba) Oil, Vaccinium Macrocarpon
        (Cranberry) Seed Oil, Punica Granatum (Pomegranate) Seed Oil, Aleurites
        Moluccanus (Kukui) Nut Oil, Camellia Oleifera (Camellia) Seed Oil, Cannabis Sativa
        (Hemp) Seed Oil, Oenothera Biennis (Evening Primrose) Oil, Rosa canina
        (Rosehip) Seed Oil, Boswellia cartii (Frankincense) Oil, Pelargonium graveolens
        (Geranium) Leaf oil, Lavendula angostifolia (Lavender) Flower Oil, Rosmarinus
        officinalis (Rosemary) Extract`,
    directions: `Apply 4 to 5 drops to face in the evening after cleansing with
        Foaming Facial Cleanser. |If using a refreshing Toner, apply Toner; allow skin to dry
        before applying Face Oil. |Follow with Face Cream. |Can apply in the morning with
        Face Cream for added hydration when needed.`,
    caution: `This product contains essential oils. Keep out of reach of children. Avoid
        contact with eyes. If pregnant or lactating, consult your health care practitioner
        before use. Not for internal use. Test on a small area of skin for skin sensitivity or
        allergies`,
    scents: [],
    variants: [
      {
        scent: null,
        id: "6deaae11-b964-43cc-9bad-ae8dc7e4746f",
        size: "30ml",
        price: 25,
      },
    ],
    // variantHeading: `Choose Your Scent`,
    images: [
      "/images/content-pixie-WdJ4WnLxyDs-unsplash.jpg",
      "https://venedorcitrus.myshopify.com/cdn/shop/products/ce535e88-c69c-4e07-8cb3-7f90c3ca7a21.jpg?v=1604581404",
      "https://venedorcitrus.myshopify.com/cdn/shop/products/ce535e88-c69c-4e07-8cb3-7f90c3ca7a21_02.jpg?v=1604581404&width=220",
      "https://venedorcitrus.myshopify.com/cdn/shop/products/ce535e88-c69c-4e07-8cb3-7f90c3ca7a21_05.jpg?v=1604581404&width=220",
    ],
  },
  {
    id: "4",
    name: "Face Cream for Dry Skin",
    price: 37,
    availability: 80,
    category: "face",
    description: `This formulation is a rich cream, perfect for dry skin to provide
        hydration and protect your skin against winter weather. It is a blend of natural oils
        and butters with essential oils like Frankincense and Roman Chamomile for their
        anti- inflammatory and calming effects.`,
    ingredients: `Aqua, Aloe Barbadensis Leaf Juice, Anthemis Nobilis (Chamomile)
        Flower Water, *Caprylic/Capric Triglyceride, *Butyrospermum Parkii (Shea
        Butter), *Simmondsia Chinensis (Jojoba Oil), Rosa Canina (Rosehip) Fruit Oil, Vitis
        Vinifera (Grape) Seed Oil, Cetearyl Alcohol (and ) Polysorbate 60, Glycerin, Cetyl
        Alcohol, Gluconolactone (and) Sodium Benzoate, Aveena Sativa (Oat) Kernel
        Flour, d-alpha tocopherol, Rosmarinus Officinalis (Rosemary) Extract, Boswellia
        Carterii (Frankincense Essential Oil), Chamomile recutita (Roman Chamomile)
        Essential Oil`,
    directions: `|Apply a pea size amount to face after cleansing with Foaming
        Facial Cleanser. *If you use a refreshing Toner and Face Oil, allow the toner to dry,
        |next apply Face Oil before the Face Cream. *Always ensure Face Cream is the last
        step in your facial skin care routine.`,
    caution: `This product contains essential oils. Keep out of reach of children. Avoid
        contact with eyes. If pregnant or lactating, consult your health care practitioner
        before use. Not for internal use. Test on a small area of skin for skin sensitivity or
        allergies.`,
    scents: null,
    variants: [
      {
        scent: null,
        id: "7566aa3d-b755-4f3f-a6d4-7e77db8ffbc8",
        size: "2oz",
        price: 37,
      },
    ],
    // variantHeading: `Choose Your Scent`,
    images: [
      "/images/content-pixie-WdJ4WnLxyDs-unsplash.jpg",
      "https://venedorcitrus.myshopify.com/cdn/shop/products/ce535e88-c69c-4e07-8cb3-7f90c3ca7a21.jpg?v=1604581404",
      "https://venedorcitrus.myshopify.com/cdn/shop/products/ce535e88-c69c-4e07-8cb3-7f90c3ca7a21_02.jpg?v=1604581404&width=220",
      "https://venedorcitrus.myshopify.com/cdn/shop/products/ce535e88-c69c-4e07-8cb3-7f90c3ca7a21_05.jpg?v=1604581404&width=220",
    ],
  },
  {
    id: "5",
    name: "Face Cream for Combination Skin",
    price: 37,
    availability: 80,
    category: "face",
    featured: true,
    description: `This face cream is a blend of Shea butter with oils that are easily
        absorbed into the epidermal layer of your skin, providing hydration, protection
        and a healthy glow to your skin. Jojoba oil contains natural forms of vitamin E, an
        
        antioxidant that help in the combat against oxidative stress. We have selected
        this oil in our Face Cream formulations as it works with all skin types due to its
        similarities in nature with the oils that our skin normally produces.`,
    ingredients: `Aqua, Aloe Barbadensis Leaf Juice, *Simmondsia Chinensis (Jojoba)
        Oil, *Butyrospermum Parkii (Shea Butter), *Caprylic/Capric Triglycerides, Prunus
        Amygdalus Dulcis (Sweet Almond) Oil, Cetearyl Alcohol (and) Polysorbate 60,
        Cetyl Alcohol, d-alpha tocopherol, Glycerin, Gluconolactone (and) Sodium
        Benzoate, Aveena sativa (Oat) Kernel Flour, Lavendula angostifolia (Lavender)
        Essential Oil, Pelargonium graveolens (Geranium) Flower Oil`,
    directions: `Apply a pea size amount to face after cleansing with Foaming
        Facial Cleanser. |If you use a refreshing Toner and Face Oil, apply Toner and allow
        it to dry, |next apply Face Oil before the Face Cream. *Always ensure Face Cream is
        the last step in your facial skin care routine.`,
    caution: `This product contains essential oils. Keep out of reach of children. Avoid
        contact with eyes. If pregnant or lactating, consult your health care practitioner
        before use. Not for internal use. Test on a small area of skin for skin sensitivity or
        allergies`,
    scents: null,
    variants: [
      {
        scent: null,
        id: "583767f3-fe38-47f9-8ff0-1f6e3bc77fa4",
        size: "2oz",
        price: 37,
      },
    ],
    images: [
      "/images/content-pixie-WdJ4WnLxyDs-unsplash.jpg",
      "https://venedorcitrus.myshopify.com/cdn/shop/products/ce535e88-c69c-4e07-8cb3-7f90c3ca7a21.jpg?v=1604581404",
      "https://venedorcitrus.myshopify.com/cdn/shop/products/ce535e88-c69c-4e07-8cb3-7f90c3ca7a21_02.jpg?v=1604581404&width=220",
      "https://venedorcitrus.myshopify.com/cdn/shop/products/ce535e88-c69c-4e07-8cb3-7f90c3ca7a21_05.jpg?v=1604581404&width=220",
    ],
  },
  {
    id: "6",
    name: "Face Cream for Oily Skin",
    price: 37,
    availability: 80,
    category: "face",
    description: `This face cream is a blend of Shea butter with oils that are easily
        absorbed into the epidermal layer of your skin, providing hydration, protection
        and a healthy glow to your skin. Jojoba oil contains natural forms of vitamin E, an
        
        antioxidant that help in the combat against oxidative stress. We have selected
        this oil in our Face Cream formulations as it works with all skin types due to its
        similarities in nature with the oils that our skin normally produces.`,
    ingredients: `Aqua, Anthemis Nobilis (Chamomile) Flower Water, Aloe Barbadensis
        Leaf Extract, Simmondsia Chinensis (Jojoba) Seed Oil, Cucurbita pepo (Pumpkin)
        Seed Oil, *Cannabis sativa (Hemp) Seed Oil, *Butyrospermum Parkii (Shea Butter),
        Cetearyl Alcohol (and) Polysorbate 60, Glycerin, Cetyl Alcohol, Gluconolactone
        (and) Sodium Benzoate, d-alpha tocopherol, Juniperus communis (Juniper Berry)
        Fruit Oil, Pelargonium graveolens (Geranium) Flower Oil, Rosmarinus officinalis
        Leaf Extract`,
    directions: `Apply a pea size amount to face after cleansing with Foaming
        Facial Cleanser. If you use a refreshing Toner and Face Oil, apply Toner and allow
        
        it to dry, next apply Face Oil before the Face Cream. Always ensure Face Cream is
        the last step in your facial skin care routine.`,
    caution: `This product contains essential oils. Keep out of reach of children. Avoid
        contact with eyes. If pregnant or lactating, consult your health care practitioner
        before use. Not for internal use. Test on a small area of skin for skin sensitivity or
        allergies.`,
    scents: null,
    variants: [
      {
        scent: null,
        id: "150ca785-8095-4d1a-834e-2799d217af5f",
        size: "2oz",
        price: 37,
      },
    ],
    images: [
      "/images/content-pixie-WdJ4WnLxyDs-unsplash.jpg",
      "https://venedorcitrus.myshopify.com/cdn/shop/products/ce535e88-c69c-4e07-8cb3-7f90c3ca7a21.jpg?v=1604581404",
      "https://venedorcitrus.myshopify.com/cdn/shop/products/ce535e88-c69c-4e07-8cb3-7f90c3ca7a21_02.jpg?v=1604581404&width=220",
      "https://venedorcitrus.myshopify.com/cdn/shop/products/ce535e88-c69c-4e07-8cb3-7f90c3ca7a21_05.jpg?v=1604581404&width=220",
    ],
  },
  {
    id: "7",
    name: "Face Serum",
    price: 25,
    availability: 80,
    category: "face",
    description: `We formulate our Face Oils to provide valuable nutrients and moisture to the skin.
        Additionally, because they are oil-based products, they provide the skin with a protective barrier to
        help fight against free radicals. The Face Oil helps to form the lipid barrier of your skin.
        As we age, the skin’s lipids begin to diminish, resulting in skin that is prone to dryness. We have
        carefully selected specialty oils and essential oils that work synergistically to keep the lipid barrier
        strong and healthy.`,
    ingredients: `Anthemis Nobilis, Aloe Barbadensis Leaf Extract (and) Aqua, Rosa damascena, Glycerin,
        Hydrolyzed Oats, Niacinamide, Cucumis (cucumber) sativus extract, Catharanthus Roseus Extract
        
        (and) Propanediol, Yucca Smalliana Leaf Extract (and) Propanediol, Carica Papaya Extract,
        Xanthan gum, Optiphen Plus`,
    directions: `** Need Directions **`,
    caution: `** Need Caution **`,
    scents: null,
    variants: [
      {
        scent: null,
        id: "150ca785-8095-4d1a-834e-2799d216de6f",
        size: "30ml",
        price: 25,
      },
    ],
    variantHeading: ``,
    images: [
      "/images/content-pixie-WdJ4WnLxyDs-unsplash.jpg",
      "https://venedorcitrus.myshopify.com/cdn/shop/products/ce535e88-c69c-4e07-8cb3-7f90c3ca7a21.jpg?v=1604581404",
      "https://venedorcitrus.myshopify.com/cdn/shop/products/ce535e88-c69c-4e07-8cb3-7f90c3ca7a21_02.jpg?v=1604581404&width=220",
      "https://venedorcitrus.myshopify.com/cdn/shop/products/ce535e88-c69c-4e07-8cb3-7f90c3ca7a21_05.jpg?v=1604581404&width=220",
    ],
  },
];

/*

  example updated object:


   {
    id: "2",
    name: "Body Butter",
    price: 25.0,
    // price: '8-25',
    availability: 80,
    featured: true,
    category: "body",
    categories: ["Body"],
    description: `We formulate our body butter with natural and organic products.
        We manufacture all our products in small batches at a time to ensure we maintain
        freshness. This rich, velvety blend of cocoa butter with Tahitian Vanilla Fragrance
        Oil transforms from an Indulgent cream to oil when massaged into the skin. The
        unique blend of plant- based products is loaded with vitamins, antioxidants and
        essential fatty acids to help protect your skin and keep it hydrated all day long.
        Relax your senses and enjoy the power of potent plant ingredients.`,
    ingredients: `Aqua, Aloe Barbadensis (Aloe Vera) Leaf Juice, *Butyrospermum
        Parkii (Shea Butter), *Caprylic/Capric Triglyceride, *Simmondsia Chinensis (Jojoba)
        Seed Oil, *Theobroma Cacao (Cocoa Butter) Seed Oil, Mangifera Indica (Mango)
        Seed Butter, *Persea Gratissima (Avocado) Oil, Cetearyl Alcohol (and) Polysorbate
        60, Glycerin, Cetyl Alcohol, Gluconolactone (and) Sodium Benzoate, Fragrance
        (Tahitian Vanilla Fragrance Oil), Rosmarinus officinalis (Rosemary) Oil`,
    directions: `Apply directly to skin after shower. |Massage liberally to allow
        absorption into skin. *Can use all over body including hands.`,
    caution: `Contains essential oils or fragrance. Keep out of reach of children. Avoid
        contact with eyes. If pregnant or lactating, consult your health care practitioner
        before use. Not for internal use. Test on a small area of skin for skin sensitivity or
        allergies.`,
    scents: ["Lavender Vanilla", "Lemon Verbena", "Unscented"],
    sizes: ["2oz", "8oz"]
    variants: [
        {
          "id": "843109683205",
          "size": "2oz",
          "scent": "Lavender Vanilla",
          "price": 8
        },
        {
          "id": "246529971852",
          "size": "8oz",
          "scent": "Lavender Vanilla",
          "price": 25
        },
        {
          "id": "113266595655",
          "size": "2oz",
          "scent": "Lemon Verbena",
          "price": 8
        },
        {
          "id": "250777523489",
          "size": "8oz",
          "scent": "Lemon Verbena",
          "price": 25
        },
        {
          "id": "329393260232",
          "size": "2oz",
          "scent": "Unscented",
          "price": 8
        },
        {
          "id": "343436592625",
          "size": "8oz",
          "scent": "Unscented",
          "price": 25
        }
    ]
    variantHeading: `Choose Your Scent`,
    images: [
      "https://venedorcitrus.myshopify.com/cdn/shop/products/ce535e88-c69c-4e07-8cb3-7f90c3ca7a21.jpg?v=1604581404",
      "https://venedorcitrus.myshopify.com/cdn/shop/products/ce535e88-c69c-4e07-8cb3-7f90c3ca7a21_02.jpg?v=1604581404&width=220",
      "https://venedorcitrus.myshopify.com/cdn/shop/products/ce535e88-c69c-4e07-8cb3-7f90c3ca7a21_05.jpg?v=1604581404&width=220",
    ],
  },

*/

// We will use the inputs of the user to filter out the correct product variant that matches the user's inputs
// The that matched variant will be the the unique product that we use for the remaining logic
// Existing product should be matched based on thbis id as well to consolidate the cart totals
