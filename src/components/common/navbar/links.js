const links = [
  {
    item: "men",
    url: "men",
    categories: [
      {
        title: "topwear",
        url: "men-topwear",
        subCategories: [
          {
            item: "t-shirts",
            url: "men-t-shirts",
          },
          {
            item: "casual shirts",
            url: "men-casual-shirts",
          },
          {
            item: "formal shirts",
            url: "men-formal-shirts",
          },
          {
            item: "sweatshirts",
            url: "men-sweatshirts",
          },
          {
            item: "sweaters",
            url: "men-sweaters",
          },
          {
            item: "jackets",
            url: "men-jackets",
          },
          {
            item: "blazers & coats",
            url: "men-blazers-coats",
          },
          {
            item: "suits",
            url: "men-suits",
          },
          {
            item: "rain jackets",
            url: "men-rain-jackets",
          },
        ],
      },
      {
        title: "indian & festive wear",
        url: "men-ethnic-wear",
        subCategories: [
          {
            item: "kurtas & kurta sets",
            url: "men-kurtas",
          },
          {
            item: "sherwanis",
            url: "sherwanis",
          },
          {
            item: "nehru jackets",
            url: "nehru-jackets",
          },
          {
            item: "dhotis",
            url: "dhotis",
          },
        ],
      },
      {
        title: "bottomwear",
        url: "men-bottomwear",
        subCategories: [
          {
            item: "jeans",
            url: "men-jeans",
          },
          {
            item: "casual trousers",
            url: "men-casual-trousers",
          },
          {
            item: "formal trousers",
            url: "men-formal-trousers",
          },
          {
            item: "shorts",
            url: "men-shorts",
          },
          {
            item: "track pants & joggers",
            url: "men-track-pants",
          },
        ],
      },
      {
        title: "innerwear & sleepwear",
        url: "men-innerwear",
        subCategories: [
          {
            item: "Briefs & Trunks",
            url: "men-briefs-trunks",
          },
          {
            item: "boxers",
            url: "men-boxers",
          },
          {
            item: "vests",
            url: "men-vests",
          },
          {
            item: "sleepwear & loungewear",
            url: "men-sleepwear",
          },
          {
            item: "thermals",
            url: "men-thermals",
          },
        ],
      },
      {
        title: "plus size",
        url: "men-plus-size",
      },
      {
        title: "footwear",
        url: "men-footwear",
        subCategories: [
          {
            item: "casual shoes",
            url: "men-casual-shoes",
          },
          {
            item: "sports shoes",
            url: "men-sports-shoes",
          },
          {
            item: "formal shoes",
            url: "men-formal-shoes",
          },
          {
            item: "sneakers",
            url: "men-sneakers",
          },
          {
            item: "sandals & floaters",
            url: "men-sandals-floaters",
          },
          {
            item: "flip flops",
            url: "men-flip-flops",
          },
          {
            item: "socks",
            url: "men-socks",
          },
        ],
      },
      {
        title: "personal care & grooming",
        url: "men-personal-care",
      },
      {
        title: "sunglasses & frames",
        url: "men-sunglasses",
      },
      {
        title: "watches",
        url: "men-watches",
      },
      {
        title: "sports & active wear",
        url: "men-sports-active-wear",
        subCategories: [
          {
            item: "sports shoes",
            url: "men-sports-shoes",
          },
          {
            item: "sports sandals",
            url: "men-sports-sandals",
          },
          {
            item: "active t-shirts",
            url: "men-active-t-shirts",
          },
          {
            item: "track pants & shorts",
            url: "men-track-pants-shorts",
          },
          {
            item: "tracksuits",
            url: "men-tracksuits",
          },
          {
            item: "jackets & sweatshirts",
            url: "men-jackets-sweatshirts",
          },
          {
            item: "sports accessories",
            url: "men-sports-accessories",
          },
          {
            item: "swimwear",
            url: "men-swimwear",
          },
        ],
      },
      {
        title: "gadgets",
        url: "gadgets",
        subCategories: [
          {
            item: "smart wearables",
            url: "smart-wearables",
          },
          {
            item: "fitness gadgets",
            url: "fitness-gadgets",
          },
          {
            item: "headphones",
            url: "headphones",
          },
          {
            item: "speakers",
            url: "speakers",
          },
        ],
      },
      {
        title: "fashion accessories",
        url: "men-accessories",
        subCategories: [
          {
            item: "wallets",
            url: "men-wallets",
          },
          {
            item: "belts",
            url: "men-belts",
          },
          {
            item: "perfumes",
            url: "perfumes",
          },
          {
            item: "trimmers",
            url: "trimmers",
          },
          {
            item: "deodorants",
            url: "deodorants",
          },
          {
            item: "ties, cufflinks & pocket squares",
            url: "men-ties-cufflinks",
          },
          {
            item: "accessory gift sets",
            url: "men-accessory-gift",
          },
          {
            item: "caps & hats",
            url: "men-caps-hats",
          },
          {
            item: "mufflers, scarves & gloves",
            url: "men-mufflers-gloves",
          },
          {
            item: "phone cases",
            url: "phone-cases",
          },
          {
            item: "rings & wristwear",
            url: "men-rings-wristwear",
          },
          {
            item: "helmets",
            url: "men-helmets",
          },
        ],
      },
      {
        title: "bags & backpacks",
        url: "men-bags-backpacks",
      },
      {
        title: "luggages & trolleys",
        url: "luggages-trolleys",
      },
    ],
  },
  {
    item: "women",
    url: "women",
    categories: [
      {
        title: "indian & fusion wear",
        url: "women-fusion-wear",
        subCategories: [
          {
            item: "kurtas & suits",
            url: "women-kurtas-suits",
          },
          {
            item: "kurtis, tunics & tops",
            url: "kurtis-tunics-tops",
          },
          {
            item: "sarees",
            url: "sarees",
          },
          {
            item: "ethic wear",
            url: "women-ethic-wear",
          },
          {
            item: "leggings, salwars & churidars",
            url: "leggings-salwars-churidars",
          },
          {
            item: "skirts & palazzos",
            url: "skirts-palazzos",
          },
          {
            item: "dress & materials",
            url: "dress-materials",
          },
          {
            item: "lehenga cholis",
            url: "lehenga-cholis",
          },
          {
            item: "dupattas & shawls",
            url: "dupattas-shawls",
          },
          {
            item: "jackets",
            url: "women-jackets",
          },
        ],
      },
      {
        title: "belts, scarves & more",
        url: "women-belts-more",
      },
      {
        title: "watches & wearables",
        url: "women-watches-wearables",
      },
      {
        title: "western wear",
        url: "women-western-wear",
        subCategories: [
          {
            item: "dresses",
            url: "dresses",
          },
          {
            item: "top",
            url: "top",
          },
          {
            item: "tshirts",
            url: "women-tshirts",
          },
          {
            item: "jeans",
            url: "women-jeans",
          },
          {
            item: "trousers & capris",
            url: "women-trousers-capris",
          },
          {
            item: "shorts & skirts",
            url: "women-shorts-skirts",
          },
          {
            item: "co-ords",
            url: "co-ords",
          },
          {
            item: "playsuits",
            url: "women-playsuits",
          },
          {
            item: "jumpsuits",
            url: "women-jumpsuits",
          },
          {
            item: "shrugs",
            url: "women-shrugs",
          },
          {
            item: "sweaters & sweatshirts",
            url: "women-sweaters-sweatshirts",
          },
          {
            item: "jackets & coats",
            url: "women-jackets-coats",
          },
          {
            item: "blazers & waistcoats",
            url: "women-blazers-waistcoats",
          },
        ],
      },
      {
        title: "plus size",
        url: "women-plus-size",
      },
      {
        title: "maternity",
        url: "women-maternity",
      },
      {
        title: "sunglasses & frames",
        url: "women-sunglasses-frames",
      },
      {
        title: "footwear",
        url: "women-footwear",
        subCategories: [
          {
            item: "flats",
            url: "women-flats",
          },
          {
            item: "casual shoes",
            url: "women-casual-shoes",
          },
          {
            item: "heels",
            url: "heels",
          },
          {
            item: "boots",
            url: "women-boots",
          },
          {
            item: "sports shoes & floaters",
            url: "women-sports-shoes-floaters",
          },
        ],
      },
      {
        title: "sports & active wear",
        url: "women-sports-active-wear",
        subCategories: [
          {
            item: "clothing",
            url: "women-clothing",
          },
          {
            item: "footwear",
            url: "women-footwear",
          },
          {
            item: "sports accessories",
            url: "women-accessories",
          },
          {
            item: "sports equipment",
            url: "women-sports-equipment",
          },
        ],
      },
      {
        title: "lingerie & sleepwear",
        url: "women-sleepwear",
        subCategories: [
          {
            item: "bra",
            url: "bra",
          },
          {
            item: "briefs",
            url: "women-briefs",
          },
          {
            item: "shapewear",
            url: "women-shapewear",
          },
          {
            item: "sleepwear & loungewear",
            url: "women-sleepwear-loungewear",
          },
          {
            item: "swimwear",
            url: "women-swimwear",
          },
          {
            item: "camisoles & thermals",
            url: "women-camisoles-thermals",
          },
        ],
      },
      {
        title: "beauty & personal care",
        url: "women-personal-care",
        subCategories: [
          {
            item: "makeup",
            url: "makeup",
          },
          {
            item: "skincare",
            url: "women-skincare",
          },
          {
            item: "premium beauty",
            url: "women-premium-beauty",
          },
          {
            item: "lipsticks",
            url: "lipsticks",
          },
        ],
      },
      {
        title: "gadgets",
        url: "women-gadgets",
        subCategories: [
          {
            item: "smart wearables",
            url: "women-smart-wearables",
          },
          {
            item: "fitness gadgets",
            url: "women-fitness-gadgets",
          },
          {
            item: "headphones",
            url: "headphones",
          },
          {
            item: "speakers",
            url: "speakers",
          },
        ],
      },
      {
        title: "jewellery",
        url: "jewellery",
        subCategories: [
          {
            item: "fashion jewellery",
            url: "fashion-jewellery",
          },
          {
            item: "fine jewellery",
            url: "fine-jewellery",
          },
          {
            item: "earrings",
            url: "earrings",
          },
        ],
      },
      {
        title: "backpacks",
        url: "women-backpacks",
      },
      {
        title: "handbags, bags & wallets",
        url: "handbags-bags",
      },
      {
        title: "luggages & trolleys",
        url: "luggages-trolleys",
      },
    ],
  },
  {
    item: "kids",
    url: "kids",
    categories: [
      {
        title: "indian & fusion wear",
        url: "women-fusion-wear",
        subCategories: [
          {
            item: "kurtas & suits",
            url: "women-kurtas-suits",
          },
          {
            item: "kurtis, tunics & tops",
            url: "kurtis-tunics-tops",
          },
          {
            item: "sarees",
            url: "sarees",
          },
          {
            item: "ethic wear",
            url: "women-ethic-wear",
          },
          {
            item: "leggings, salwars & churidars",
            url: "leggings-salwars-churidars",
          },
          {
            item: "skirts & palazzos",
            url: "skirts-palazzos",
          },
          {
            item: "dress & materials",
            url: "dress-materials",
          },
          {
            item: "lehenga cholis",
            url: "lehenga-cholis",
          },
          {
            item: "dupattas & shawls",
            url: "dupattas-shawls",
          },
          {
            item: "jackets",
            url: "women-jackets",
          },
        ],
      },
      {
        title: "belts, scarves & more",
        url: "women-belts-more",
      },
      {
        title: "watches & wearables",
        url: "women-watches-wearables",
      },
      {
        title: "western wear",
        url: "women-western-wear",
        subCategories: [
          {
            item: "dresses",
            url: "dresses",
          },
          {
            item: "top",
            url: "top",
          },
          {
            item: "tshirts",
            url: "women-tshirts",
          },
          {
            item: "jeans",
            url: "women-jeans",
          },
          {
            item: "trousers & capris",
            url: "women-trousers-capris",
          },
          {
            item: "shorts & skirts",
            url: "women-shorts-skirts",
          },
          {
            item: "co-ords",
            url: "co-ords",
          },
          {
            item: "playsuits",
            url: "women-playsuits",
          },
          {
            item: "jumpsuits",
            url: "women-jumpsuits",
          },
          {
            item: "shrugs",
            url: "women-shrugs",
          },
          {
            item: "sweaters & sweatshirts",
            url: "women-sweaters-sweatshirts",
          },
          {
            item: "jackets & coats",
            url: "women-jackets-coats",
          },
          {
            item: "blazers & waistcoats",
            url: "women-blazers-waistcoats",
          },
        ],
      },
      {
        title: "plus size",
        url: "women-plus-size",
      },
      {
        title: "maternity",
        url: "women-maternity",
      },
      {
        title: "sunglasses & frames",
        url: "women-sunglasses-frames",
      },
      {
        title: "footwear",
        url: "women-footwear",
        subCategories: [
          {
            item: "flats",
            url: "women-flats",
          },
          {
            item: "casual shoes",
            url: "women-casual-shoes",
          },
          {
            item: "heels",
            url: "heels",
          },
          {
            item: "boots",
            url: "women-boots",
          },
          {
            item: "sports shoes & floaters",
            url: "women-sports-shoes-floaters",
          },
        ],
      },
      {
        title: "sports & active wear",
        url: "women-sports-active-wear",
        subCategories: [
          {
            item: "clothing",
            url: "women-clothing",
          },
          {
            item: "footwear",
            url: "women-footwear",
          },
          {
            item: "sports accessories",
            url: "women-accessories",
          },
          {
            item: "sports equipment",
            url: "women-sports-equipment",
          },
        ],
      },
      {
        title: "lingerie & sleepwear",
        url: "women-sleepwear",
        subCategories: [
          {
            item: "bra",
            url: "bra",
          },
          {
            item: "briefs",
            url: "women-briefs",
          },
          {
            item: "shapewear",
            url: "women-shapewear",
          },
          {
            item: "sleepwear & loungewear",
            url: "women-sleepwear-loungewear",
          },
          {
            item: "swimwear",
            url: "women-swimwear",
          },
          {
            item: "camisoles & thermals",
            url: "women-camisoles-thermals",
          },
        ],
      },
      {
        title: "beauty & personal care",
        url: "women-personal-care",
        subCategories: [
          {
            item: "makeup",
            url: "makeup",
          },
          {
            item: "skincare",
            url: "women-skincare",
          },
          {
            item: "premium beauty",
            url: "women-premium-beauty",
          },
          {
            item: "lipsticks",
            url: "lipsticks",
          },
        ],
      },
      {
        title: "gadgets",
        url: "women-gadgets",
        subCategories: [
          {
            item: "smart wearables",
            url: "women-smart-wearables",
          },
          {
            item: "fitness gadgets",
            url: "women-fitness-gadgets",
          },
          {
            item: "headphones",
            url: "headphones",
          },
          {
            item: "speakers",
            url: "speakers",
          },
        ],
      },
      {
        title: "jewellery",
        url: "jewellery",
        subCategories: [
          {
            item: "fashion jewellery",
            url: "fashion-jewellery",
          },
          {
            item: "fine jewellery",
            url: "fine-jewellery",
          },
          {
            item: "earrings",
            url: "earrings",
          },
        ],
      },
      {
        title: "backpacks",
        url: "women-backpacks",
      },
      {
        title: "handbags, bags & wallets",
        url: "handbags-bags",
      },
      {
        title: "luggages & trolleys",
        url: "luggages-trolleys",
      },
    ],
  },
  {
    item: "home",
    url: "home",
    categories: [
      {
        title: "indian & fusion wear",
        url: "women-fusion-wear",
        subCategories: [
          {
            item: "kurtas & suits",
            url: "women-kurtas-suits",
          },
          {
            item: "kurtis, tunics & tops",
            url: "kurtis-tunics-tops",
          },
          {
            item: "sarees",
            url: "sarees",
          },
          {
            item: "ethic wear",
            url: "women-ethic-wear",
          },
          {
            item: "leggings, salwars & churidars",
            url: "leggings-salwars-churidars",
          },
          {
            item: "skirts & palazzos",
            url: "skirts-palazzos",
          },
          {
            item: "dress & materials",
            url: "dress-materials",
          },
          {
            item: "lehenga cholis",
            url: "lehenga-cholis",
          },
          {
            item: "dupattas & shawls",
            url: "dupattas-shawls",
          },
          {
            item: "jackets",
            url: "women-jackets",
          },
        ],
      },
      {
        title: "belts, scarves & more",
        url: "women-belts-more",
      },
      {
        title: "watches & wearables",
        url: "women-watches-wearables",
      },
      {
        title: "western wear",
        url: "women-western-wear",
        subCategories: [
          {
            item: "dresses",
            url: "dresses",
          },
          {
            item: "top",
            url: "top",
          },
          {
            item: "tshirts",
            url: "women-tshirts",
          },
          {
            item: "jeans",
            url: "women-jeans",
          },
          {
            item: "trousers & capris",
            url: "women-trousers-capris",
          },
          {
            item: "shorts & skirts",
            url: "women-shorts-skirts",
          },
          {
            item: "co-ords",
            url: "co-ords",
          },
          {
            item: "playsuits",
            url: "women-playsuits",
          },
          {
            item: "jumpsuits",
            url: "women-jumpsuits",
          },
          {
            item: "shrugs",
            url: "women-shrugs",
          },
          {
            item: "sweaters & sweatshirts",
            url: "women-sweaters-sweatshirts",
          },
          {
            item: "jackets & coats",
            url: "women-jackets-coats",
          },
          {
            item: "blazers & waistcoats",
            url: "women-blazers-waistcoats",
          },
        ],
      },
      {
        title: "plus size",
        url: "women-plus-size",
      },
      {
        title: "maternity",
        url: "women-maternity",
      },
      {
        title: "sunglasses & frames",
        url: "women-sunglasses-frames",
      },
      {
        title: "footwear",
        url: "women-footwear",
        subCategories: [
          {
            item: "flats",
            url: "women-flats",
          },
          {
            item: "casual shoes",
            url: "women-casual-shoes",
          },
          {
            item: "heels",
            url: "heels",
          },
          {
            item: "boots",
            url: "women-boots",
          },
          {
            item: "sports shoes & floaters",
            url: "women-sports-shoes-floaters",
          },
        ],
      },
      {
        title: "sports & active wear",
        url: "women-sports-active-wear",
        subCategories: [
          {
            item: "clothing",
            url: "women-clothing",
          },
          {
            item: "footwear",
            url: "women-footwear",
          },
          {
            item: "sports accessories",
            url: "women-accessories",
          },
          {
            item: "sports equipment",
            url: "women-sports-equipment",
          },
        ],
      },
      {
        title: "lingerie & sleepwear",
        url: "women-sleepwear",
        subCategories: [
          {
            item: "bra",
            url: "bra",
          },
          {
            item: "briefs",
            url: "women-briefs",
          },
          {
            item: "shapewear",
            url: "women-shapewear",
          },
          {
            item: "sleepwear & loungewear",
            url: "women-sleepwear-loungewear",
          },
          {
            item: "swimwear",
            url: "women-swimwear",
          },
          {
            item: "camisoles & thermals",
            url: "women-camisoles-thermals",
          },
        ],
      },
      {
        title: "beauty & personal care",
        url: "women-personal-care",
        subCategories: [
          {
            item: "makeup",
            url: "makeup",
          },
          {
            item: "skincare",
            url: "women-skincare",
          },
          {
            item: "premium beauty",
            url: "women-premium-beauty",
          },
          {
            item: "lipsticks",
            url: "lipsticks",
          },
        ],
      },
      {
        title: "gadgets",
        url: "women-gadgets",
        subCategories: [
          {
            item: "smart wearables",
            url: "women-smart-wearables",
          },
          {
            item: "fitness gadgets",
            url: "women-fitness-gadgets",
          },
          {
            item: "headphones",
            url: "headphones",
          },
          {
            item: "speakers",
            url: "speakers",
          },
        ],
      },
      {
        title: "jewellery",
        url: "jewellery",
        subCategories: [
          {
            item: "fashion jewellery",
            url: "fashion-jewellery",
          },
          {
            item: "fine jewellery",
            url: "fine-jewellery",
          },
          {
            item: "earrings",
            url: "earrings",
          },
        ],
      },
      {
        title: "backpacks",
        url: "women-backpacks",
      },
      {
        title: "handbags, bags & wallets",
        url: "handbags-bags",
      },
      {
        title: "luggages & trolleys",
        url: "luggages-trolleys",
      },
    ],
  },
  {
    item: "beauty",
    url: "beauty",
    categories: [
      {
        title: "indian & fusion wear",
        url: "women-fusion-wear",
        subCategories: [
          {
            item: "kurtas & suits",
            url: "women-kurtas-suits",
          },
          {
            item: "kurtis, tunics & tops",
            url: "kurtis-tunics-tops",
          },
          {
            item: "sarees",
            url: "sarees",
          },
          {
            item: "ethic wear",
            url: "women-ethic-wear",
          },
          {
            item: "leggings, salwars & churidars",
            url: "leggings-salwars-churidars",
          },
          {
            item: "skirts & palazzos",
            url: "skirts-palazzos",
          },
          {
            item: "dress & materials",
            url: "dress-materials",
          },
          {
            item: "lehenga cholis",
            url: "lehenga-cholis",
          },
          {
            item: "dupattas & shawls",
            url: "dupattas-shawls",
          },
          {
            item: "jackets",
            url: "women-jackets",
          },
        ],
      },
      {
        title: "belts, scarves & more",
        url: "women-belts-more",
      },
      {
        title: "watches & wearables",
        url: "women-watches-wearables",
      },
      {
        title: "western wear",
        url: "women-western-wear",
        subCategories: [
          {
            item: "dresses",
            url: "dresses",
          },
          {
            item: "top",
            url: "top",
          },
          {
            item: "tshirts",
            url: "women-tshirts",
          },
          {
            item: "jeans",
            url: "women-jeans",
          },
          {
            item: "trousers & capris",
            url: "women-trousers-capris",
          },
          {
            item: "shorts & skirts",
            url: "women-shorts-skirts",
          },
          {
            item: "co-ords",
            url: "co-ords",
          },
          {
            item: "playsuits",
            url: "women-playsuits",
          },
          {
            item: "jumpsuits",
            url: "women-jumpsuits",
          },
          {
            item: "shrugs",
            url: "women-shrugs",
          },
          {
            item: "sweaters & sweatshirts",
            url: "women-sweaters-sweatshirts",
          },
          {
            item: "jackets & coats",
            url: "women-jackets-coats",
          },
          {
            item: "blazers & waistcoats",
            url: "women-blazers-waistcoats",
          },
        ],
      },
      {
        title: "plus size",
        url: "women-plus-size",
      },
      {
        title: "maternity",
        url: "women-maternity",
      },
      {
        title: "sunglasses & frames",
        url: "women-sunglasses-frames",
      },
      {
        title: "footwear",
        url: "women-footwear",
        subCategories: [
          {
            item: "flats",
            url: "women-flats",
          },
          {
            item: "casual shoes",
            url: "women-casual-shoes",
          },
          {
            item: "heels",
            url: "heels",
          },
          {
            item: "boots",
            url: "women-boots",
          },
          {
            item: "sports shoes & floaters",
            url: "women-sports-shoes-floaters",
          },
        ],
      },
      {
        title: "sports & active wear",
        url: "women-sports-active-wear",
        subCategories: [
          {
            item: "clothing",
            url: "women-clothing",
          },
          {
            item: "footwear",
            url: "women-footwear",
          },
          {
            item: "sports accessories",
            url: "women-accessories",
          },
          {
            item: "sports equipment",
            url: "women-sports-equipment",
          },
        ],
      },
      {
        title: "lingerie & sleepwear",
        url: "women-sleepwear",
        subCategories: [
          {
            item: "bra",
            url: "bra",
          },
          {
            item: "briefs",
            url: "women-briefs",
          },
          {
            item: "shapewear",
            url: "women-shapewear",
          },
          {
            item: "sleepwear & loungewear",
            url: "women-sleepwear-loungewear",
          },
          {
            item: "swimwear",
            url: "women-swimwear",
          },
          {
            item: "camisoles & thermals",
            url: "women-camisoles-thermals",
          },
        ],
      },
      {
        title: "beauty & personal care",
        url: "women-personal-care",
        subCategories: [
          {
            item: "makeup",
            url: "makeup",
          },
          {
            item: "skincare",
            url: "women-skincare",
          },
          {
            item: "premium beauty",
            url: "women-premium-beauty",
          },
          {
            item: "lipsticks",
            url: "lipsticks",
          },
        ],
      },
      {
        title: "gadgets",
        url: "women-gadgets",
        subCategories: [
          {
            item: "smart wearables",
            url: "women-smart-wearables",
          },
          {
            item: "fitness gadgets",
            url: "women-fitness-gadgets",
          },
          {
            item: "headphones",
            url: "headphones",
          },
          {
            item: "speakers",
            url: "speakers",
          },
        ],
      },
      {
        title: "jewellery",
        url: "jewellery",
        subCategories: [
          {
            item: "fashion jewellery",
            url: "fashion-jewellery",
          },
          {
            item: "fine jewellery",
            url: "fine-jewellery",
          },
          {
            item: "earrings",
            url: "earrings",
          },
        ],
      },
      {
        title: "backpacks",
        url: "women-backpacks",
      },
      {
        title: "handbags, bags & wallets",
        url: "handbags-bags",
      },
      {
        title: "luggages & trolleys",
        url: "luggages-trolleys",
      },
    ],
  },
];

export default links;
