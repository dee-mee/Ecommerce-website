
import { useState, useEffect, useCallback } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

const images = [
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  "https://images.unsplash.com/photo-1518770660439-4636190af475",
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1"
];

const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const [plugin] = useState(() => 
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  useEffect(() => {
    if (!api) return;
    
    const onSelect = () => {
      setActiveIndex(api.selectedScrollSnap());
    };
    
    api.on("select", onSelect);
    // Initial call to set the active index
    onSelect();
    
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="relative w-full overflow-hidden rounded-xl">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin]}
        className="w-full"
        setApi={setApi}
      >
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src={src} 
                  alt={`Futuristic product ${index + 1}`}
                  className={cn(
                    "w-full h-[350px] object-cover transition-all duration-700",
                    "transform hover:scale-105"
                  )}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <div className="absolute z-10 flex justify-center w-full bottom-4">
          <div className="flex gap-2">
            {images.map((_, index) => (
              <div 
                key={index}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  activeIndex === index ? "w-6 bg-primary" : "w-2 bg-white/50"
                )}
              />
            ))}
          </div>
        </div>

        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white border-none" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white border-none" />
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
