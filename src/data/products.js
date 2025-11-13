export const products = [
  {
    id: 1,
    name: "Pao Bio Notebook",
    description: "Premium lined notebook with club logo",
    price: 5,
    currency: "USD",
    image: "/assets/images/notebook.jpg",
    category: "stationery",
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: "Club Pen Set",
    description: "Set of 3 high-quality pens with Pao Bio branding",
    price: 8,
    currency: "USD",
    image: "/assets/images/pen-set.jpg",
    category: "stationery",
    inStock: true,
    featured: false
  },
  {
    id: 3,
    name: "Sticker Pack",
    description: "Collection of 10 bio-themed stickers",
    price: 3,
    currency: "USD",
    image: "/assets/images/stickers.jpg",
    category: "stationery",
    inStock: true,
    featured: false
  },
  {
    id: 4,
    name: "Pao Bio T-Shirt",
    description: "Comfortable cotton t-shirt with club logo",
    price: 20,
    currency: "USD",
    image: "/assets/images/tshirt.jpg",
    category: "apparel",
    inStock: true,
    featured: true
  },
  {
    id: 5,
    name: "Lab Coat",
    description: "Professional lab coat with embroidered logo",
    price: 35,
    currency: "USD",
    image: "/assets/images/lab-coat.jpg",
    category: "apparel",
    inStock: true,
    featured: false
  },
  {
    id: 6,
    name: "Tote Bag",
    description: "Eco-friendly canvas tote bag",
    price: 12,
    currency: "USD",
    image: "/assets/images/tote-bag.jpg",
    category: "accessories",
    inStock: true,
    featured: false
  },
  {
    id: 7,
    name: "Water Bottle",
    description: "Insulated stainless steel water bottle",
    price: 15,
    currency: "USD",
    image: "/assets/images/water-bottle.jpg",
    category: "accessories",
    inStock: true,
    featured: true
  },
  {
    id: 8,
    name: "Pin Set",
    description: "Set of 5 collectible enamel pins",
    price: 10,
    currency: "USD",
    image: "/assets/images/pins.jpg",
    category: "accessories",
    inStock: true,
    featured: false
  },
  {
    id: 9,
    name: "Lab Safety Goggles",
    description: "Professional safety goggles with UV protection",
    price: 18,
    currency: "USD",
    image: "/assets/images/goggles.jpg",
    category: "lab-supplies",
    inStock: true,
    featured: false
  },
  {
    id: 10,
    name: "Study Guide Bundle",
    description: "Biology study guides and reference materials",
    price: 25,
    currency: "USD",
    image: "/assets/images/study-guide.jpg",
    category: "educational",
    inStock: true,
    featured: true
  }
];

export const categories = [
  { id: "all", name: "All Products" },
  { id: "stationery", name: "Stationery" },
  { id: "apparel", name: "Apparel" },
  { id: "accessories", name: "Accessories" },
  { id: "lab-supplies", name: "Lab Supplies" },
  { id: "educational", name: "Educational" }
];

export const getProductById = (id) => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category) => {
  if (category === "all") return products;
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};