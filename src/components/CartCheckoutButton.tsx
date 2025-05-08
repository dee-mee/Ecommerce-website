
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface CartCheckoutButtonProps {
  isCartEmpty: boolean;
}

const CartCheckoutButton = ({ isCartEmpty }: CartCheckoutButtonProps) => {
  return (
    <Button 
      className="w-full" 
      size="lg"
      disabled={isCartEmpty}
      asChild
    >
      <Link to={isCartEmpty ? "#" : "/checkout"}>
        Checkout <ChevronRight className="ml-2" size={16} />
      </Link>
    </Button>
  );
};

export default CartCheckoutButton;
