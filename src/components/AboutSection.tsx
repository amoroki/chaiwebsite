import { Card, CardContent } from "./ui/card";
import { Leaf, Mountain, Shield, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutSection() {
  const features = [
    {
      icon: <Mountain className="h-8 w-8 text-green-600" />,
      title: "High Altitude Growing",
      description: "Our tea is sourced from Kenya's high-altitude regions, ensuring superior flavor and quality."
    },
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: "Sustainable Practices",
      description: "We work with farmers who use eco-friendly and sustainable farming methods."
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Quality Assurance",
      description: "Every batch is tested and certified to meet international quality standards."
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Direct Partnerships",
      description: "We maintain direct relationships with tea gardens for consistent supply and fair trade."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose <span className="text-green-600">Kenyan Tea?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Kenya is renowned worldwide for producing some of the finest tea varieties. 
              Our strategic location along the equator, combined with ideal climate conditions 
              and rich volcanic soil, creates the perfect environment for growing exceptional tea.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="border-l-4 border-l-green-600">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      {feature.icon}
                      <div>
                        <h3 className="font-semibold mb-2">{feature.title}</h3>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1594602990685-2ad837215085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwdGVhJTIwbGVhdmVzJTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3NTYyNzk5MzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Premium tea leaves"
              className="w-full h-[500px] object-cover rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-green-600">100%</div>
              <div className="text-sm text-gray-600">Kenyan Origin</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}