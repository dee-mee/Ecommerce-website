
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  {
    title: "Smart Home",
    href: "/#",
    description: "Advanced home automation and IoT devices for modern living."
  },
  {
    title: "Wearables",
    href: "/#",
    description: "Cutting-edge wearable technology for health and productivity."
  },
  {
    title: "AI Assistants",
    href: "/#",
    description: "Next-generation virtual assistants powered by AI."
  },
  {
    title: "AR/VR",
    href: "/#",
    description: "Immersive augmented and virtual reality experiences."
  },
];

const MainNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // In a real app, this would come from authentication context
  const isLoggedIn = false;
  
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="mr-4 flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden text-xl font-bold sm:inline-block">NEOTRON</span>
          </Link>
          
          <div className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px] grid-cols-2">
                      {categories.map((category) => (
                        <li key={category.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={category.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-base font-medium leading-none">
                                {category.title}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {category.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/about" className={navigationMenuTriggerStyle()}>
                    About
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/contact" className={navigationMenuTriggerStyle()}>
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Link to="/cart" className="mr-1">
            <Button variant="ghost" size="icon" aria-label="Shopping Cart">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </Link>
          
          <div className="hidden md:flex space-x-1">
            {isLoggedIn ? (
              <Button variant="ghost" size="sm" asChild>
                <Link to="/account">
                  <User className="h-4 w-4 mr-1" /> Account
                </Link>
              </Button>
            ) : (
              <>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/login">Login</Link>
                </Button>
                <Button size="sm" asChild>
                  <Link to="/signup">Sign up</Link>
                </Button>
              </>
            )}
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 space-y-3">
            <div className="space-y-1">
              <div className="text-sm font-medium mb-2">Products</div>
              {categories.map((category) => (
                <Link
                  key={category.title}
                  to={category.href}
                  className="block px-2 py-1.5 rounded-md hover:bg-accent"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.title}
                </Link>
              ))}
            </div>
            <div className="space-y-1">
              <Link
                to="/about"
                className="block px-2 py-1.5 rounded-md hover:bg-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-2 py-1.5 rounded-md hover:bg-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
            
            <div className="pt-3 border-t flex flex-col space-y-2">
              {isLoggedIn ? (
                <Button variant="outline" asChild>
                  <Link to="/account" onClick={() => setIsMenuOpen(false)}>
                    <User className="h-4 w-4 mr-1" /> Account
                  </Link>
                </Button>
              ) : (
                <>
                  <Button variant="outline" asChild>
                    <Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
                  </Button>
                  <Button asChild>
                    <Link to="/signup" onClick={() => setIsMenuOpen(false)}>Sign up</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default MainNav;
