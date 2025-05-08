
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart } from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { toast } from "@/components/ui/use-toast";

// Sample featured products data
const featuredProducts = [
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
  }
];

const FeaturedProducts = () => {
  const [wishlist, setWishlist] = useState<number[]>([]);

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

  const addToCart = (product: typeof featuredProducts[0]) => {
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    });
  };

  return (
    <Carousel
      className="w-full"
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {featuredProducts.map((product) => (
          <CarouselItem key={product.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
            <Card className="overflow-hidden h-full">
              <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
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
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{product.category}</p>
                    <h3 className="font-semibold text-lg mt-1 leading-tight">{product.name}</h3>
                  </div>
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
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-end gap-2 mt-4">
        <CarouselPrevious className="relative static transform-none" />
        <CarouselNext className="relative static transform-none" />
      </div>
    </Carousel>
  );
};

export default FeaturedProducts;
