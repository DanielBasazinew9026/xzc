import { Product } from '../types';

export const HERO_IMAGE = '/src/assets/images/ahab_hero_editorial_1790496991182.jpg';
export const TRADITIONAL_IMG = '/src/assets/images/ahab_traditional_collection_1790497012581.jpg';
export const WOMENS_IMG = '/src/assets/images/ahab_womens_collection_1790497025144.jpg';
export const MENS_IMG = '/src/assets/images/ahab_mens_modern_habesha_1790497037040.jpg';

export const PRODUCTS: Product[] = [
  {
    id: 'ahab-001',
    name: 'The Queen Saba Royal Kemis',
    amharicName: 'ንግሥት ሳባ ሐበሻ ቀሚስ',
    slug: 'queen-saba-royal-kemis',
    category: 'traditional',
    subcategory: 'Bridal & Formal Kemis',
    priceUSD: 480,
    priceETB: 64800,
    originalPriceUSD: 550,
    originalPriceETB: 74250,
    rating: 4.9,
    reviewCount: 38,
    images: [
      TRADITIONAL_IMG,
      HERO_IMAGE,
      WOMENS_IMG
    ],
    description: 'An iconic tribute to historic Abyssinian royalty. Hand-spun from lightweight, breathable double-ply Ethiopian cotton (Shemma) and bordered with an artisanal multi-tone gold and burgundy Tibeb pattern woven meticulously on a traditional pit loom over 45 hours.',
    story: 'Conceived in our Addis Ababa studio, this garment embodies the ceremonial grandeur of Ethiopian celebrations while honoring modern wearable ease. Designed to drape effortlessly on any silhouette.',
    fabricDetails: '100% Ethiopian hand-spun cotton (Shemma), metallic gold thread (Tibeb), naturally dyed burgundy cotton yarn.',
    careInstructions: 'Dry clean only. Gentle steaming on reverse side. Store flat in organic cotton garment bag.',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'Custom Fit'],
    colors: [
      { name: 'Pure Shemma White & Gold', hex: '#FAF7F0' },
      { name: 'Warm Cream & Bronze', hex: '#F0E7D8' },
      { name: 'Burgundy Crimson Weave', hex: '#631B21' },
    ],
    inStock: true,
    isBestSeller: true,
    isNewArrival: false,
    tags: ['Traditional', 'Bridal', 'Gold Tibeb', 'Handwoven'],
    measurementsGuide: {
      bustOrChest: '86 - 104 cm (Adjustable interior ribbon)',
      waist: '68 - 88 cm',
      hips: 'Free flowing flare (up to 125 cm)',
      length: '145 cm floor-length'
    },
    reviews: [
      {
        id: 'rev-1',
        author: 'Selamawit T.',
        location: 'Addis Ababa (Bole)',
        rating: 5,
        date: 'March 2026',
        title: 'Breathtaking quality for my Melse ceremony',
        comment: 'The texture of the Shemma is so buttery and soft, completely unlike machine-made commercial dresses. The gold embroidery sparkles under warm room lights without feeling heavy. AHAB is in a league of its own.',
        verifiedPurchase: true
      },
      {
        id: 'rev-2',
        author: 'Hanan K.',
        location: 'London, UK',
        rating: 5,
        date: 'February 2026',
        title: 'Arrived in London within 4 days. Masterpiece.',
        comment: 'DHL delivery was swift and the packaging was pure luxury. Fitting was precise. I wore it to an Ethiopian diaspora diplomatic gala and received non-stop compliments.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'ahab-002',
    name: 'Addis Modern Linen Trench & Palazzo Set',
    amharicName: 'ዘመናዊ አዲስ አበባ የሊነን ልብስ',
    slug: 'addis-modern-linen-trench',
    category: 'women',
    subcategory: 'Contemporary Tailoring',
    priceUSD: 360,
    priceETB: 48600,
    rating: 4.8,
    reviewCount: 29,
    images: [
      WOMENS_IMG,
      HERO_IMAGE,
      TRADITIONAL_IMG
    ],
    description: 'Sculptural elegance tailored from heavyweight unbleached desert linen. Features clean architectural lapels, drop shoulders, a minimalist horn-button closure, and subtle geometric Tibeb micro-accents along the inner cuffs and back storm flap.',
    story: 'Inspired by the vibrant, cosmopolitan pulse of contemporary Addis Ababa. A piece that moves seamlessly from executive boardroom discussions to evening art gallery openings in Kazanchis.',
    fabricDetails: '100% Organic unbleached linen with certified Egyptian long-staple cotton lining; custom gold-washed metallic thread accents.',
    careInstructions: 'Professional dry clean recommended. Can be hand-washed cold with mild pH-neutral detergent.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Warm Desert Sand', hex: '#DBC9B0' },
      { name: 'Deep Espresso Chocolate', hex: '#2A0D08' },
      { name: 'Earthy Olive', hex: '#4A4E39' },
    ],
    inStock: true,
    isBestSeller: true,
    isNewArrival: true,
    tags: ['Modern', 'Tailoring', 'Linen', 'Contemporary Luxury'],
    measurementsGuide: {
      bustOrChest: '88 - 102 cm',
      waist: '70 - 86 cm',
      length: '120 cm mid-calf coat / 108 cm trouser'
    },
    reviews: [
      {
        id: 'rev-3',
        author: 'Bethelhem M.',
        location: 'Washington, DC',
        rating: 5,
        date: 'January 2026',
        title: 'Architectural, quiet luxury at its finest',
        comment: 'The drape and tailoring on this set rival The Row and Loro Piana. The subtle Tibeb inner lining is our secret heritage touch that only the wearer knows. Sublime craftsmanship.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'ahab-003',
    name: 'The Emperor Habesha Mandarin Shirt',
    amharicName: 'ንጉሣዊ ዘመናዊ ሸሚዝ',
    slug: 'emperor-habesha-mandarin-shirt',
    category: 'men',
    subcategory: 'Menswear Couture',
    priceUSD: 240,
    priceETB: 32400,
    rating: 5.0,
    reviewCount: 44,
    images: [
      MENS_IMG,
      HERO_IMAGE,
      TRADITIONAL_IMG
    ],
    description: 'A contemporary evolution of traditional Ethiopian menswear. Cut from breathable raw ecru linen with a structured mandarin collar, hidden horn placket, and custom geometric gold Tibeb embroidery along the placket and cuffs.',
    story: 'Honoring the dignified silhouette worn by Ethiopian leaders and statesmen through the decades, refined for global modern lifestyles.',
    fabricDetails: '100% Breathable Ethiopian linen blend with woven silk-touch Tibeb borders.',
    careInstructions: 'Machine wash delicate cycle in cold water. Hang dry in shade. Warm iron.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Natural Ecru Linen', hex: '#EDE6DA' },
      { name: 'Midnight Charcoal', hex: '#1E1D1F' },
      { name: 'Warm Terracotta', hex: '#8C4D3B' }
    ],
    inStock: true,
    isBestSeller: true,
    isNewArrival: false,
    tags: ['Menswear', 'Habesha Shirt', 'Mandarin Collar', 'Linen'],
    measurementsGuide: {
      bustOrChest: '96 - 118 cm',
      shoulder: '44 - 52 cm',
      length: '78 cm straight hem'
    },
    reviews: [
      {
        id: 'rev-4',
        author: 'Dawit G.',
        location: 'Addis Ababa (Kazanchis)',
        rating: 5,
        date: 'March 2026',
        title: 'Perfect fit and incredible collar finish',
        comment: 'I wore this to a close friend’s wedding and ended up ordering two more for business trips. The collar stands crisp without being stiff.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'ahab-004',
    name: 'The Entoto Silk Wrap Gown',
    amharicName: 'እንጦጦ ሐር የጋላ ቀሚስ',
    slug: 'entoto-silk-wrap-gown',
    category: 'women',
    subcategory: 'Evening & Gala',
    priceUSD: 440,
    priceETB: 59400,
    originalPriceUSD: 500,
    originalPriceETB: 67500,
    rating: 4.9,
    reviewCount: 22,
    images: [
      HERO_IMAGE,
      WOMENS_IMG,
      TRADITIONAL_IMG
    ],
    description: 'An ethereal floor-grazing wrap gown crafted from heavyweight mulberry silk charmeuse in our signature warm champagne hue. Accented with hand-applied gold leaf motifs and an adjustable sash that accentuates the waistline.',
    story: 'Named after the tranquil eucalyptus hills of Mount Entoto overlooking Addis Ababa, capturing the crisp golden breeze of twilight in the capital.',
    fabricDetails: '100% Pure Mulberry Silk with subtle hand-stitched border details.',
    careInstructions: 'Specialist dry clean only. Steam with low temperature.',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Warm Champagne Gold', hex: '#E5D3B3' },
      { name: 'Deep Chocolate', hex: '#2A0D08' },
      { name: 'Rose Clay', hex: '#C28B78' }
    ],
    inStock: true,
    isBestSeller: false,
    isNewArrival: true,
    tags: ['Evening Gown', 'Mulberry Silk', 'Gala', 'Modern Couture'],
    measurementsGuide: {
      bustOrChest: '82 - 98 cm',
      waist: '64 - 82 cm (wrap adjustable)',
      hips: 'Free wrap silhouette',
      length: '150 cm'
    },
    reviews: [
      {
        id: 'rev-5',
        author: 'Lydia W.',
        location: 'Dubai, UAE',
        rating: 5,
        date: 'February 2026',
        title: 'Pure poetry in motion',
        comment: 'The silk has an extraordinary weight and fluid movement. Felt like royalty wearing this in Dubai.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'ahab-005',
    name: 'The Axum Ceremonial Zuria',
    amharicName: 'የአክሱም ባህላዊ ዙሪያ',
    slug: 'axum-ceremonial-zuria',
    category: 'traditional',
    subcategory: 'Heritage Zuria',
    priceUSD: 520,
    priceETB: 70200,
    rating: 5.0,
    reviewCount: 19,
    images: [
      TRADITIONAL_IMG,
      HERO_IMAGE,
      WOMENS_IMG
    ],
    description: 'A masterwork of Ethiopian cultural preservation. Composed of three cascading tiers of triple-spun Shemma cotton with intricate black-and-gold Lalibela cross geometric borders. Includes a matching gossamer Netela shawl.',
    story: 'Created in collaboration with master weavers from Chencha and Shiro Meda whose families have passed down loom techniques for seven generations.',
    fabricDetails: '100% Organic Ethiopian handspun cotton, woven with golden lurex filament and botanical dye accents.',
    careInstructions: 'Dry clean only. Air outside in shaded breeze.',
    sizes: ['S', 'M', 'L', 'Custom Fit'],
    colors: [
      { name: 'Traditional Off-White', hex: '#F9F6F0' },
      { name: 'Golden Sand', hex: '#DFCBB5' }
    ],
    inStock: true,
    isBestSeller: true,
    isNewArrival: false,
    tags: ['Traditional', 'Zuria', 'Netela Included', 'Master Weaver'],
    measurementsGuide: {
      bustOrChest: '88 - 105 cm',
      waist: '70 - 90 cm',
      length: '148 cm with 220 cm matching Netela'
    },
    reviews: [
      {
        id: 'rev-6',
        author: 'Makeda H.',
        location: 'Atlanta, USA',
        rating: 5,
        date: 'January 2026',
        title: 'Authenticity you can feel',
        comment: 'Finding genuine handloom quality outside Ethiopia used to be impossible. AHAB delivered something so authentic it brought tears to my grandmother’s eyes.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'ahab-006',
    name: 'The Ras Desta Embroidered Linen Safari Jacket',
    amharicName: 'ራስ ደስታ ሳፋሪ ጃኬት',
    slug: 'ras-desta-safari-jacket',
    category: 'men',
    subcategory: 'Menswear Couture',
    priceUSD: 290,
    priceETB: 39150,
    rating: 4.8,
    reviewCount: 16,
    images: [
      MENS_IMG,
      WOMENS_IMG,
      HERO_IMAGE
    ],
    description: 'A tailored safari jacket featuring four bellows pockets, horn buttons, a structured belt closure, and understated tonal embroidery inspired by vintage 1940s Addis Ababa tailoring traditions.',
    story: 'A tribute to the distinguished military-tailored uniforms of the mid-20th century Ethiopian gentry, translated into a modern luxury travel essential.',
    fabricDetails: '100% Belgian-Ethiopian woven flax linen, unlined for optimal breathability in warm climates.',
    careInstructions: 'Dry clean or cold hand wash. Hang on shaped wooden hanger.',
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Deep Khaki Sand', hex: '#B8A58D' },
      { name: 'Rich Tobacco Brown', hex: '#3B1F17' },
      { name: 'Obsidian Black', hex: '#1C1B1A' }
    ],
    inStock: true,
    isBestSeller: false,
    isNewArrival: true,
    tags: ['Menswear', 'Safari Jacket', 'Outerwear', 'Tailoring'],
    measurementsGuide: {
      bustOrChest: '102 - 120 cm',
      shoulder: '46 - 54 cm',
      length: '76 cm'
    },
    reviews: [
      {
        id: 'rev-7',
        author: 'Eyob B.',
        location: 'Nairobi, Kenya',
        rating: 5,
        date: 'March 2026',
        title: 'Remarkable fit and breathability',
        comment: 'Traveled across East Africa in this jacket. Holds its structure remarkably well and looks tailored yet effortless.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'ahab-007',
    name: 'The Little Prince Habesha Two-Piece Set',
    amharicName: 'የህጻናት ንጉሣዊ ልብስ',
    slug: 'little-prince-habesha-set',
    category: 'kids',
    subcategory: 'Children Ceremonial',
    priceUSD: 140,
    priceETB: 18900,
    rating: 4.9,
    reviewCount: 31,
    images: [
      MENS_IMG,
      TRADITIONAL_IMG,
      HERO_IMAGE
    ],
    description: 'A tailored children’s ceremonial set featuring a soft mandarin collar shirt and matching tailored trousers with delicate gold Tibeb cuffs. Designed with ultra-soft unbleached cotton that remains gentle on children’s sensitive skin.',
    story: 'Because heritage begins with our youngest generations. Handcrafted with the exact same artisan devotion as our adult couture collections.',
    fabricDetails: '100% Extra-soft combed Ethiopian cotton with non-scratchy metallic filament accents.',
    careInstructions: 'Gentle machine wash cold. Iron on medium heat.',
    sizes: ['2-3 YRS', '4-5 YRS', '6-7 YRS', '8-9 YRS', '10-12 YRS'],
    colors: [
      { name: 'Ivory Cream & Gold', hex: '#F7F3EB' },
      { name: 'Desert Sand', hex: '#DBC9B0' }
    ],
    inStock: true,
    isBestSeller: false,
    isNewArrival: false,
    tags: ['Kids', 'Ceremonial', 'Boys Habesha', 'Gentle Cotton'],
    measurementsGuide: {
      bustOrChest: '58 - 74 cm depending on age',
      length: 'Scaled for height 92 cm - 146 cm'
    },
    reviews: [
      {
        id: 'rev-8',
        author: 'Frehiwot A.',
        location: 'Addis Ababa (CMC)',
        rating: 5,
        date: 'January 2026',
        title: 'My son looked so handsome on Epiphany (Timket)',
        comment: 'Softest fabric! He was comfortable all day playing and marching in the procession without feeling itchy.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'ahab-008',
    name: 'The Princess Saba Mini Zuria Dress',
    amharicName: 'የህጻናት ሚኒ ዙሪያ',
    slug: 'princess-saba-mini-zuria',
    category: 'kids',
    subcategory: 'Children Ceremonial',
    priceUSD: 160,
    priceETB: 21600,
    rating: 5.0,
    reviewCount: 25,
    images: [
      TRADITIONAL_IMG,
      HERO_IMAGE,
      WOMENS_IMG
    ],
    description: 'A lightweight ruffled Habesha dress for young girls with miniature gold and rose-colored woven Tibeb borders and a mini matching soft Netela shawl.',
    story: 'Passing down our grandmothers’ textile artistry to our daughters with comfort, elegance, and whimsical charm.',
    fabricDetails: '100% Organic featherweight Shemma cotton with baby-safe dyed cotton threads.',
    careInstructions: 'Hand wash cold or gentle machine wash in laundry bag.',
    sizes: ['2-3 YRS', '4-5 YRS', '6-7 YRS', '8-9 YRS', '10-12 YRS'],
    colors: [
      { name: 'Pure White & Rose Gold', hex: '#FCFAF7' },
      { name: 'Cream & Bronze', hex: '#F0E6D6' }
    ],
    inStock: true,
    isBestSeller: false,
    isNewArrival: true,
    tags: ['Kids', 'Girls Kemis', 'Mini Zuria', 'Ceremony'],
    measurementsGuide: {
      bustOrChest: '56 - 72 cm',
      length: '65 - 105 cm'
    },
    reviews: [
      {
        id: 'rev-9',
        author: 'Bethlehem T.',
        location: 'Toronto, Canada',
        rating: 5,
        date: 'February 2026',
        title: 'Adorable and exceptional quality',
        comment: 'My daughter loved the matching little scarf! She twirled in it the whole day.',
        verifiedPurchase: true
      }
    ]
  }
];

export const CATEGORIES_METADATA = [
  {
    id: 'traditional',
    title: 'Traditional Collection',
    amharic: 'የባህል ልብሶች',
    subtitle: 'Masterpiece Shemma & Royal Kemis',
    image: TRADITIONAL_IMG,
    itemCount: '12 Curated Silhouettes',
  },
  {
    id: 'women',
    title: "Women's Collection",
    amharic: 'የሴቶች ዘመናዊ ልብሶች',
    subtitle: 'Contemporary Silhouettes & Modern Tailoring',
    image: WOMENS_IMG,
    itemCount: '18 Signature Pieces',
  },
  {
    id: 'men',
    title: "Men's Collection",
    amharic: 'የወንዶች ልብሶች',
    subtitle: 'Refined Habesha Shirts & Structured Jackets',
    image: MENS_IMG,
    itemCount: '14 Tailored Essentials',
  },
  {
    id: 'kids',
    title: 'Kids Collection',
    amharic: 'የህጻናት ልብሶች',
    subtitle: 'Gentle Pure Cotton for Little Royalty',
    image: TRADITIONAL_IMG,
    itemCount: '8 Handcrafted Sets',
  },
  {
    id: 'custom',
    title: 'Custom Designs',
    amharic: 'ልዩ የትዕዛዝ ልብስ',
    subtitle: 'Bespoke Atelier Commissions & Bridal',
    image: HERO_IMAGE,
    itemCount: 'One-of-a-Kind Creations',
  }
];

export const LOOKBOOK_STORIES = [
  {
    id: 'chapter-1',
    edition: 'Monograph No. 01',
    title: 'Heritage in Motion',
    location: 'Bole & Kazanchis, Addis Ababa',
    photographer: 'Atelier AHAB Studios',
    image: HERO_IMAGE,
    quote: 'We do not simply preserve traditional Ethiopian weaving; we give it wings to walk the modern world.',
    featuredItems: ['The Queen Saba Royal Kemis', 'Addis Modern Linen Trench']
  },
  {
    id: 'chapter-2',
    edition: 'Monograph No. 02',
    title: 'The Golden Weft',
    location: 'Mount Entoto Terraces',
    photographer: 'Atelier AHAB Studios',
    image: TRADITIONAL_IMG,
    quote: 'Every golden strand in our Tibeb represents a prayer woven by our artisans into the fabric of everyday life.',
    featuredItems: ['The Axum Ceremonial Zuria', 'The Entoto Silk Wrap Gown']
  },
  {
    id: 'chapter-3',
    edition: 'Monograph No. 03',
    title: 'Quiet Dignity: The Modern Ethiopian Man',
    location: 'National Theatre District',
    photographer: 'Atelier AHAB Studios',
    image: MENS_IMG,
    quote: 'Tailoring that speaks with subtle conviction—clean lines, natural fibers, and timeless heritage.',
    featuredItems: ['The Emperor Habesha Mandarin Shirt', 'The Ras Desta Safari Jacket']
  }
];

export const TESTIMONIALS = [
  {
    id: 'test-1',
    author: 'Hermela Aseffa',
    role: 'Architect & Creative Director',
    location: 'Addis Ababa',
    image: WOMENS_IMG,
    review: 'AHAB transformed how I view Ethiopian fashion. It is minimalist yet so deeply rooted in our culture. The fabrics feel alive and breathe beautifully in our high-altitude sun.',
    garment: 'Addis Modern Linen Set'
  },
  {
    id: 'test-2',
    author: 'Dr. Yonas Mengistu',
    role: 'Diplomatic Envoy',
    location: 'Geneva / Addis Ababa',
    image: MENS_IMG,
    review: 'The craftsmanship of the Emperor shirt is extraordinary. The mandarin collar holds sharp structure throughout 14-hour flights, and the subtle gold embroidery always commands respect.',
    garment: 'The Emperor Habesha Shirt'
  },
  {
    id: 'test-3',
    author: 'Samrawit & Thomas',
    role: 'Newlyweds',
    location: 'Washington DC & Addis Ababa',
    image: TRADITIONAL_IMG,
    review: 'Our custom wedding ensemble took our guests’ breath away. The AHAB atelier team communicated over WhatsApp with sketches, fabric swatches, and sizing adjustments every step of the way.',
    garment: 'Bespoke Melse Bridal Commission'
  }
];
