
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Filter } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

// Sample products data
const products = [
  {
    id: 1,
    name: "NeuroLink Pro Headset",
    description: "Immersive neural interface with AR capabilities",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    category: "Electronics",
    badge: "New",
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    name: "HoloDesk Smart Surface",
    description: "Interactive holographic workspace",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    category: "Electronics",
    badge: "Trending",
    rating: 4.9,
    reviews: 86,
  },
  {
    id: 3,
    name: "EcoSphere Plant Monitor",
    description: "Smart monitoring for optimal plant growth",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    category: "Home & Garden",
    rating: 4.6,
    reviews: 203,
  },
  {
    id: 4,
    name: "Quantum Watch Series X",
    description: "Advanced health metrics and holographic display",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    category: "Fashion",
    badge: "Limited",
    rating: 4.7,
    reviews: 179,
  },
  {
    id: 5,
    name: "AirPod Max Ultra",
    description: "Noise cancelling with neural audio enhancement",
    price: 599.99,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    category: "Electronics",
    rating: 4.5,
    reviews: 92,
  },
  {
    id: 6,
    name: "SmartDesk Pro",
    description: "Adjustable height desk with built-in smart assistant",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    category: "Furniture",
    rating: 4.3,
    reviews: 58,
  },
  {
    id: 7,
    name: "EcoCharge Power Station",
    description: "Sustainable power generator with solar charging",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158", 
    category: "Electronics",
    badge: "Eco-friendly",
    rating: 4.4,
    reviews: 75,
  },
  {
    id: 8,
    name: "AquaSense Water Purifier",
    description: "Smart water filtration system with mineral control",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7", 
    category: "Home",
    rating: 4.2,
    reviews: 112,
  }
];

const categories = [
  "All",
  "Electronics",
  "Fashion",
  "Home & Garden",
  "Furniture",
];

const ProductGrid = () => {
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const toggleWishlist = (productId: number) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId));
      toast({
        title: "Removed from wishlist",
        description: "Item has been removed from your wishlist",
      });
    } else {
      setWishlist([...wishlist, productId]);
      toast({
        title: "Added to wishlist",
        description: "Item has been added to your wishlist",
      });
    }
  };

  const addToCart = (product: typeof products[0]) => {
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    });
  };

  return (
    <div>
      <div className="flex items-center gap-4 mb-6 overflow-x-auto pb-2 scrollbar-none">
        <div className="flex items-center bg-secondary rounded-md px-3 py-1.5">
          <Filter className="h-4 w-4 mr-2" />
          <span className="text-sm font-medium">Filter:</span>
        </div>
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory(category)}
            className="whitespace-nowrap"
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="group overflow-hidden">
            <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-800">
              <Link to={`/product/${product.id}`}>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
              {product.badge && (
                <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground">
                  {product.badge}
                </Badge>
              )}
              <Button
                variant="ghost"
                size="icon"
                className={`absolute top-2 right-2 bg-background/60 backdrop-blur-sm ${
                  wishlist.includes(product.id) ? "text-red-500" : "text-muted-foreground"
                }`}
                onClick={() => toggleWishlist(product.id)}
              >
                <Heart className="h-5 w-5" fill={wishlist.includes(product.id) ? "currentColor" : "none"} />
              </Button>
            </div>
            <CardContent className="pt-4">
              <div className="flex items-start justify-between mb-1">
                <p className="text-sm text-muted-foreground">{product.category}</p>
                <div className="flex items-center">
                  <span className="text-sm font-medium mr-1">{product.rating}</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="text-yellow-500"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
                </div>
              </div>
              <Link to={`/product/${product.id}`} className="block hover:underline">
                <h3 className="font-semibold text-lg leading-tight">{product.name}</h3>
              </Link>
              <p className="text-muted-foreground text-sm mt-2 line-clamp-2">{product.description}</p>
            </CardContent>
            <CardFooter className="flex items-center justify-between pt-0">
              <div className="font-semibold">${product.price.toFixed(2)}</div>
              <Button size="sm" onClick={() => addToCart(product)}>
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
