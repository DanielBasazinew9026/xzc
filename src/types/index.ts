export type Category = 'all' | 'traditional' | 'women' | 'men' | 'kids' | 'custom';

export type Currency = 'USD' | 'ETB';

export interface ProductColor {
  name: string;
  hex: string;
}

export interface MeasurementsGuide {
  bustOrChest?: string;
  waist?: string;
  hips?: string;
  length?: string;
  shoulder?: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verifiedPurchase: boolean;
}

export interface Product {
  id: string;
  name: string;
  amharicName?: string;
  slug: string;
  category: 'traditional' | 'women' | 'men' | 'kids' | 'custom';
  subcategory: string;
  priceUSD: number;
  priceETB: number;
  originalPriceUSD?: number;
  originalPriceETB?: number;
  rating: number;
  reviewCount: number;
  images: string[];
  description: string;
  story: string;
  fabricDetails: string;
  careInstructions: string;
  sizes: string[];
  colors: ProductColor[];
  inStock: boolean;
  isNewArrival?: boolean;
  isBestSeller?: boolean;
  isLimitedEdition?: boolean;
  tags: string[];
  measurementsGuide: MeasurementsGuide;
  reviews: Review[];
}

export interface CartItem {
  id: string; // unique item instance id
  product: Product;
  selectedSize: string;
  selectedColor: ProductColor;
  quantity: number;
}

export interface WishlistItem {
  productId: string;
  addedAt: string;
}

export interface CustomDesignRequest {
  id: string;
  name: string;
  phone: string;
  email: string;
  occasion: string;
  clothingType: string;
  preferredColor: string;
  budgetRange: string;
  inspirationImageName?: string;
  measurements: {
    bustChest: string;
    waist: string;
    hips: string;
    height: string;
    shoulder: string;
    dressLength: string;
  };
  notes: string;
  createdAt: string;
  status: 'Received' | 'Under Review' | 'Atelier Consultation' | 'In Crafting';
}

export interface OrderItem {
  name: string;
  size: string;
  color: string;
  quantity: number;
  price: number;
  currency: Currency;
  image: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  date: string;
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  discount: number;
  total: number;
  currency: Currency;
  status: 'Processing' | 'In Production' | 'Dispatched' | 'Delivered';
  shippingAddress: {
    fullName: string;
    phone: string;
    address: string;
    subCityOrCity: string;
    country: string;
  };
  paymentMethod: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  orders: Order[];
  customRequests: CustomDesignRequest[];
}
