import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, ShoppingCart, ChevronDown, Heart } from "lucide-react";
import FeaturedProducts from "@/components/FeaturedProducts";
import ProductGrid from "@/components/ProductGrid";
import HeroCarousel from "@/components/HeroCarousel";

const Index = () => {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b">
        <div className="container mx-auto flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-primary to-blue-500 text-transparent bg-clip-text">
              NEOTRON
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">Home</Link>
              <div className="relative group">
                <button className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary">
                  Categories <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute left-0 top-full hidden group-hover:block w-48 bg-background border rounded-md shadow-lg p-2 z-10">
                  <Link to="/category/electronics" className="block px-2 py-1 text-sm hover:bg-accent rounded-sm">Electronics</Link>
                  <Link to="/category/fashion" className="block px-2 py-1 text-sm hover:bg-accent rounded-sm">Fashion</Link>
                  <Link to="/category/home" className="block px-2 py-1 text-sm hover:bg-accent rounded-sm">Home & Garden</Link>
                  <Link to="/category/sports" className="block px-2 py-1 text-sm hover:bg-accent rounded-sm">Sports & Outdoors</Link>
                </div>
              </div>
              <Link to="/new-arrivals" className="text-sm font-medium transition-colors hover:text-primary">New Arrivals</Link>
              <Link to="/deals" className="text-sm font-medium transition-colors hover:text-primary">Deals</Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:flex items-center">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Search products..." 
                className="w-full md:w-64 pl-8" 
              />
            </div>
            <Link to="/wishlist">
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="sm" className="hidden md:inline-flex">
                Sign in
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero section */}
        <section className="relative">
          <div className="bg-gradient-to-r from-black via-gray-900 to-black text-white overflow-hidden">
            {/* Add animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-grid-white/5" style={{ 
                backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.1) 1px, transparent 1px)", 
                backgroundSize: "40px 40px",
                animation: "moveBackground 20s linear infinite"
              }} />
            </div>
            <div className="container mx-auto py-16 md:py-20 px-4 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="animate-fade-in">
                  <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30 uppercase tracking-wider">
                    Next Generation
                  </Badge>
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    The Future of <br /><span className="bg-gradient-to-r from-primary to-blue-500 text-transparent bg-clip-text">Shopping</span>
                  </h1>
                  <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-md">
                    Explore cutting-edge products with an immersive shopping experience designed for tomorrow's world
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:translate-y-[-2px]">
                      Shop Now
                    </Button>
                    <Button size="lg" variant="outline" className="border-white/30 hover:border-white transition-all duration-300 transform hover:translate-y-[-2px]">
                      Explore Collection
                    </Button>
                  </div>
                </div>
                <div className="hidden md:block relative z-10">
                  <HeroCarousel />
                </div>
              </div>
            </div>
            
            {/* Add animated wave divider */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 transform">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-12 w-full" fill="currentColor">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-background"></path>
              </svg>
            </div>
          </div>
        </section>

        {/* Categories section */}
        <section className="py-16 bg-gradient-to-b from-background to-gray-50 dark:from-background dark:to-gray-900/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {["Electronics", "Fashion", "Home & Garden", "Sports"].map((category) => (
                <Card key={category} className="group overflow-hidden">
                  <CardContent className="p-0">
                    <div className="h-40 bg-gray-100 dark:bg-gray-800 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="text-xl font-medium group-hover:text-white transition-colors z-10">{category}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured products section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Featured Products</h2>
              <Button variant="outline">View All</Button>
            </div>
            <FeaturedProducts />
          </div>
        </section>

        {/* Product grid section */}
        <section className="py-16 bg-gradient-to-b from-background to-gray-50 dark:from-background dark:to-gray-900/20">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">New Arrivals</h2>
              <Button variant="outline">View All</Button>
            </div>
            <ProductGrid />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="container mx-auto py-12 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">NEOTRON</h3>
              <p className="mb-4">Your futuristic shopping destination for cutting-edge products and innovations.</p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </Button>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/products" className="hover:text-white transition-colors">Products</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                <li><Link to="/shipping" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
                <li><Link to="/warranty" className="hover:text-white transition-colors">Warranty</Link></li>
                <li><Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
              <p className="mb-4">Subscribe to receive updates on new products and special promotions.</p>
              <form className="flex">
                <Input type="email" placeholder="Your email" className="rounded-r-none" />
                <Button type="submit" className="rounded-l-none">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} NEOTRON. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
