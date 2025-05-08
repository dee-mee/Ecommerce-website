
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const OrderConfirmation = () => {
  // Generate a random order number
  const orderNumber = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="container mx-auto px-4 py-16 text-center max-w-2xl">
      <div className="mb-8 flex justify-center">
        <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
          <Check className="h-12 w-12 text-primary" />
        </div>
      </div>
      
      <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
      <p className="text-muted-foreground mb-8">
        Thank you for your purchase. We've received your order and are preparing it for shipment.
      </p>
      
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground">Order Number</p>
              <p className="font-bold text-xl">#NEO-{orderNumber}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Estimated Delivery</p>
                <p className="font-medium">May 12 - May 15</p>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground mb-1">Shipping Method</p>
                <p className="font-medium">Express Delivery</p>
              </div>
            </div>
            
            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground mb-1">Delivery Address</p>
              <p className="font-medium">123 Future Street</p>
              <p className="font-medium">Neo City, Earth 10001</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="space-y-4">
        <Button asChild size="lg">
          <Link to="/">Continue Shopping</Link>
        </Button>
        
        <div className="text-muted-foreground text-sm">
          Questions about your order? <Link to="/contact" className="text-primary underline">Contact our support team</Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
