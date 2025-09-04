import { Button } from "./ui/button";
import { ArrowRight, Award, Globe, Truck } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1659344705865-6090227d3549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZW55YW4lMjB0ZWElMjBwbGFudGF0aW9uJTIwZ3JlZW58ZW58MXx8fHwxNzU2Mjc5OTI5fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Kenyan tea plantation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Premium Kenyan Tea
            <span className="block text-green-400">for Global Markets</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            ChaiTrade Kenya connects international buyers with the finest Kenyan tea. 
            From the highlands of Kenya to your market, we deliver exceptional quality 
            and reliable supply chains for businesses worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8">
              Request Samples
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black text-lg px-8">
              View Catalog
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Award className="h-8 w-8 text-green-400" />
              <div>
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Globe className="h-8 w-8 text-green-400" />
              <div>
                <div className="text-2xl font-bold">20+</div>
                <div className="text-sm text-gray-300">Countries Served</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Truck className="h-8 w-8 text-green-400" />
              <div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-gray-300">Tons Monthly</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}