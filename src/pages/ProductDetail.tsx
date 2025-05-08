
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Heart, ShoppingCart, Star, Truck, Package, CreditCard } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

// Sample product data
const products = [
  {
    id: "1",
    name: "NeuroLink Pro Headset",
    description: "Experience the future of digital interaction with the NeuroLink Pro Headset. This cutting-edge neural interface combines augmented reality with direct neural feedback, providing an immersive experience unlike any other. Perfect for gaming, professional work, or exploring virtual environments.",
    price: 499.99,
    images: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
    ],
    category: "Electronics",
    badge: "New",
    rating: 4.8,
    reviews: 124,
    specs: [
      "Neural interface with 128 sensors",
      "Wireless connectivity with 20hr battery life",
      "Built-in AR display with 4K resolution",
      "Advanced haptic feedback system",
      "Voice and gesture control",
      "Compatible with all major platforms"
    ]
  },
  {
    id: "2",
    name: "HoloDesk Smart Surface",
    description: "Transform any space into an interactive workstation with the HoloDesk Smart Surface. This revolutionary device projects a customizable holographic interface onto any flat surface, enabling touchless control and collaboration. Ideal for designers, educators, and tech enthusiasts.",
    price: 1299.99,
    images: [
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    ],
    category: "Electronics",
    badge: "Trending",
    rating: 4.9,
    reviews: 86,
    specs: [
      "4K holographic projection",
      "Multi-touch and gesture recognition",
      "3D object manipulation",
      "Cloud integration for seamless file access",
      "Collaborative multi-user support",
      "AI-powered voice assistant"
    ]
  }
];

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [inWishlist, setInWishlist] = useState(false);
  
  // Find the product with matching id
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <p className="mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${quantity} ${quantity > 1 ? "items" : "item"} added to your cart`,
    });
  };

  const toggleWishlist = () => {
    setInWishlist(!inWishlist);
    toast({
      title: inWishlist ? "Removed from wishlist" : "Added to wishlist",
      description: `${product.name} has been ${inWishlist ? "removed from" : "added to"} your wishlist`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center text-sm text-muted-foreground mb-8">
        <Link to="/" className="hover:text-primary">Home</Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <Link to={`/category/${product.category}`} className="hover:text-primary">{product.category}</Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <span className="text-foreground font-medium truncate">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
            <img 
              src={product.images[selectedImage]} 
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex gap-4 overflow-auto pb-2">
            {product.images.map((image, index) => (
              <button 
                key={index}
                className={`relative w-20 h-20 rounded-md overflow-hidden border-2 ${
                  selectedImage === index ? "border-primary" : "border-transparent"
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <img 
                  src={image} 
                  alt={`Product view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="mb-6">
            {product.badge && (
              <Badge className="mb-2 bg-primary/20 text-primary hover:bg-primary/30">
                {product.badge}
              </Badge>
            )}
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <Star 
                    key={index}
                    className="h-5 w-5" 
                    fill={index < Math.floor(product.rating) ? "currentColor" : "none"}
                    color={index < Math.floor(product.rating) ? "#FFD700" : "#D1D5DB"}
                  />
                ))}
                <span className="ml-2 text-sm font-medium">{product.rating} ({product.reviews} reviews)</span>
              </div>
            </div>
            
            <div className="text-2xl font-bold mb-4">${product.price.toFixed(2)}</div>
            
            <p className="text-muted-foreground mb-6">{product.description}</p>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Key Specifications:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {product.specs.map((spec, index) => (
                    <li key={index} className="text-muted-foreground">{spec}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Quantity:</h3>
                <div className="flex items-center">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    -
                  </Button>
                  <span className="mx-4 w-8 text-center">{quantity}</span>
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="flex-1" 
                  size="lg"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={toggleWishlist}
                  className={inWishlist ? "text-red-500" : ""}
                >
                  <Heart 
                    className="mr-2 h-5 w-5" 
                    fill={inWishlist ? "currentColor" : "none"} 
                  /> 
                  {inWishlist ? "In Wishlist" : "Add to Wishlist"}
                </Button>
              </div>
            </div>
          </div>
          
          {/* Product Perks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <Card>
              <CardContent className="flex items-center gap-3 p-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Truck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Free Shipping</h3>
                  <p className="text-xs text-muted-foreground">On orders over $100</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center gap-3 p-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Package className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Easy Returns</h3>
                  <p className="text-xs text-muted-foreground">30 day return policy</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center gap-3 p-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <CreditCard className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Secure Payment</h3>
                  <p className="text-xs text-muted-foreground">Encrypted transactions</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
