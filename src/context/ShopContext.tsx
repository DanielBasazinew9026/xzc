import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Product,
  CartItem,
  ProductColor,
  Currency,
  Category,
  Order,
  CustomDesignRequest,
  UserProfile
} from '../types';
import { PRODUCTS } from '../data/products';

interface ShopContextType {
  // Navigation & Views
  activeTab: string;
  setActiveTab: (tab: string) => void;
  selectedCategory: Category;
  setSelectedCategory: (cat: Category) => void;
  selectedProduct: Product | null;
  openProduct: (product: Product) => void;
  closeProduct: () => void;

  // Modals & Drawers
  quickViewProduct: Product | null;
  setQuickViewProduct: (product: Product | null) => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isWishlistOpen: boolean;
  setIsWishlistOpen: (open: boolean) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  isSizeGuideOpen: boolean;
  setIsSizeGuideOpen: (open: boolean) => void;
  isAccountOpen: boolean;
  setIsAccountOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;

  // Currency
  currency: Currency;
  setCurrency: (c: Currency) => void;
  formatPrice: (priceUSD: number, priceETB?: number) => string;

  // Cart
  cart: CartItem[];
  addToCart: (product: Product, size: string, color: ProductColor, quantity?: number) => void;
  updateCartQuantity: (itemId: string, quantity: number) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
  cartSubtotalUSD: number;
  cartSubtotalETB: number;
  promoCode: string;
  discountPercent: number;
  applyPromoCode: (code: string) => boolean;

  // Wishlist
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;

  // Bespoke Custom Requests
  customRequests: CustomDesignRequest[];
  submitCustomDesign: (req: Omit<CustomDesignRequest, 'id' | 'createdAt' | 'status'>) => string;

  // Orders & Checkout
  orders: Order[];
  placeOrder: (shipping: any, paymentMethod: string) => Order;

  // User & Toast
  user: UserProfile | null;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTabState] = useState<string>('home');
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const [currency, setCurrency] = useState<Currency>('USD');
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Initialize cart and wishlist from localStorage
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('ahab_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('ahab_wishlist');
      return saved ? JSON.parse(saved) : ['ahab-001', 'ahab-003'];
    } catch {
      return ['ahab-001', 'ahab-003'];
    }
  });

  const [customRequests, setCustomRequests] = useState<CustomDesignRequest[]>(() => {
    try {
      const saved = localStorage.getItem('ahab_custom_requests');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [orders, setOrders] = useState<Order[]>(() => {
    try {
      const saved = localStorage.getItem('ahab_orders');
      if (saved) return JSON.parse(saved);
      // Default demo order to showcase luxury order tracking
      return [
        {
          id: 'ord-001',
          orderNumber: 'AHAB-2026-8941',
          date: '18 March 2026',
          items: [
            {
              name: 'The Queen Saba Royal Kemis',
              size: 'M',
              color: 'Pure Shemma White & Gold',
              quantity: 1,
              price: 480,
              currency: 'USD',
              image: PRODUCTS[0].images[0]
            }
          ],
          subtotal: 480,
          shipping: 0,
          discount: 0,
          total: 480,
          currency: 'USD',
          status: 'In Production',
          shippingAddress: {
            fullName: 'Hermela Aseffa',
            phone: '+251 91 123 4567',
            address: 'Camise St, Villa 14',
            subCityOrCity: 'Bole, Addis Ababa',
            country: 'Ethiopia'
          },
          paymentMethod: 'Chapa (Telebirr Direct)'
        }
      ];
    } catch {
      return [];
    }
  });

  const [user] = useState<UserProfile>({
    id: 'usr-ahab-01',
    name: 'Hermela Aseffa',
    email: 'hermela@ahabclothing.com',
    phone: '+251 91 123 4567',
    city: 'Addis Ababa',
    country: 'Ethiopia',
    orders: [],
    customRequests: []
  });

  // Save to local storage on change
  useEffect(() => {
    try {
      localStorage.setItem('ahab_cart', JSON.stringify(cart));
    } catch (e) {
      console.warn('Storage error', e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('ahab_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.warn('Storage error', e);
    }
  }, [wishlist]);

  useEffect(() => {
    try {
      localStorage.setItem('ahab_custom_requests', JSON.stringify(customRequests));
    } catch (e) {
      console.warn('Storage error', e);
    }
  }, [customRequests]);

  useEffect(() => {
    try {
      localStorage.setItem('ahab_orders', JSON.stringify(orders));
    } catch (e) {
      console.warn('Storage error', e);
    }
  }, [orders]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((curr) => (curr === msg ? null : curr));
    }, 3200);
  };

  const setActiveTab = (tab: string) => {
    setActiveTabState(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openProduct = (product: Product) => {
    setSelectedProduct(product);
    setActiveTabState('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeProduct = () => {
    setSelectedProduct(null);
  };

  const formatPrice = (priceUSD: number, priceETB?: number): string => {
    if (currency === 'ETB') {
      const etbVal = priceETB || Math.round(priceUSD * 135);
      return `${etbVal.toLocaleString()} ETB`;
    }
    return `$${priceUSD.toLocaleString()}`;
  };

  const addToCart = (
    product: Product,
    size: string,
    color: ProductColor,
    quantity: number = 1
  ) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedSize === size &&
          item.selectedColor.name === color.name
      );

      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity
        };
        return next;
      }

      const newItem: CartItem = {
        id: `${product.id}-${size}-${color.name}-${Date.now()}`,
        product,
        selectedSize: size,
        selectedColor: color,
        quantity
      };
      return [newItem, ...prev];
    });

    showToast(`Added ${product.name} (${size}) to your Bag`);
    setIsCartOpen(true);
  };

  const updateCartQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, quantity } : item))
    );
  };

  const removeFromCart = (itemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== itemId));
    showToast('Item removed from bag');
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast('Removed from Wishlist');
        return prev.filter((id) => id !== productId);
      } else {
        showToast('Saved to your Wishlist');
        return [...prev, productId];
      }
    });
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  const applyPromoCode = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'AHABLOVE' || clean === 'ADDIS2026' || clean === 'WELCOME10') {
      setPromoCode(clean);
      setDiscountPercent(15);
      showToast('15% luxury courtesy applied!');
      return true;
    }
    showToast('Invalid or expired courtesy code');
    return false;
  };

  const cartSubtotalUSD = cart.reduce(
    (sum, item) => sum + item.product.priceUSD * item.quantity,
    0
  );
  const cartSubtotalETB = cart.reduce(
    (sum, item) => sum + (item.product.priceETB || item.product.priceUSD * 135) * item.quantity,
    0
  );

  const submitCustomDesign = (
    req: Omit<CustomDesignRequest, 'id' | 'createdAt' | 'status'>
  ): string => {
    const newId = `AHAB-BESPOKE-${Math.floor(1000 + Math.random() * 9000)}`;
    const newRequest: CustomDesignRequest = {
      ...req,
      id: newId,
      createdAt: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      }),
      status: 'Received'
    };

    setCustomRequests((prev) => [newRequest, ...prev]);
    showToast(`Bespoke commission request ${newId} confirmed`);
    return newId;
  };

  const placeOrder = (shipping: any, paymentMethod: string): Order => {
    const orderNum = `AHAB-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const orderItems = cart.map((item) => ({
      name: item.product.name,
      size: item.selectedSize,
      color: item.selectedColor.name,
      quantity: item.quantity,
      price: currency === 'USD' ? item.product.priceUSD : (item.product.priceETB || item.product.priceUSD * 135),
      currency,
      image: item.product.images[0]
    }));

    const rawSubtotal = currency === 'USD' ? cartSubtotalUSD : cartSubtotalETB;
    const discountAmount = Math.round(rawSubtotal * (discountPercent / 100));
    const shippingFee = 0; // Free delivery courtesy in Addis Ababa & premium tier

    const newOrder: Order = {
      id: `ord-${Date.now()}`,
      orderNumber: orderNum,
      date: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      }),
      items: orderItems,
      subtotal: rawSubtotal,
      shipping: shippingFee,
      discount: discountAmount,
      total: rawSubtotal - discountAmount + shippingFee,
      currency,
      status: 'In Production',
      shippingAddress: {
        fullName: shipping.fullName || 'Guest Client',
        phone: shipping.phone || '+251 91 123 4567',
        address: shipping.address || 'Bole Medhanialem',
        subCityOrCity: shipping.city || 'Addis Ababa',
        country: shipping.country || 'Ethiopia'
      },
      paymentMethod
    };

    setOrders((prev) => [newOrder, ...prev]);
    clearCart();
    showToast(`Order ${orderNum} confirmed with gratitude!`);
    return newOrder;
  };

  return (
    <ShopContext.Provider
      value={{
        activeTab,
        setActiveTab,
        selectedCategory,
        setSelectedCategory,
        selectedProduct,
        openProduct,
        closeProduct,
        quickViewProduct,
        setQuickViewProduct,
        isCartOpen,
        setIsCartOpen,
        isWishlistOpen,
        setIsWishlistOpen,
        isSearchOpen,
        setIsSearchOpen,
        isSizeGuideOpen,
        setIsSizeGuideOpen,
        isAccountOpen,
        setIsAccountOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        currency,
        setCurrency,
        formatPrice,
        cart,
        addToCart,
        updateCartQuantity,
        removeFromCart,
        clearCart,
        cartSubtotalUSD,
        cartSubtotalETB,
        promoCode,
        discountPercent,
        applyPromoCode,
        wishlist,
        toggleWishlist,
        isInWishlist,
        customRequests,
        submitCustomDesign,
        orders,
        placeOrder,
        user,
        toastMessage,
        showToast
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};
