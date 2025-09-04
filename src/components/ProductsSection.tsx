import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { SampleRequestModal } from "./SampleRequestModal";

export function ProductsSection() {
  const products = [
    {
      name: "Black Tea (CTC)",
      grade: "Premium Grade",
      description: "Crush, Tear, Curl processed black tea with robust flavor and strong liquor. Perfect for breakfast blends and milk tea.",
      specifications: ["PEKOE", "BROKEN PEKOE", "FANNINGS"],
      image: "https://images.unsplash.com/photo-1487168791452-17942644e6f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHN0ZWElMjBjdXAlMjBzdGVhbWluZyUyMGVsZWdhbnR8ZW58MXx8fHwxNzU2Mjc5OTMwfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Black Tea (Orthodox)",
      grade: "Export Grade",
      description: "Traditional leaf processing method that preserves the tea's natural flavor profile. Ideal for premium tea markets.",
      specifications: ["OP", "FBOP", "PEKOE"],
      image: "https://images.unsplash.com/photo-1597916374826-dc0750ba5962?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHx0ZWElMjBwYWNrYWdpbmclMjBleHBvcnQlMjBxdWFsaXR5fGVufDF8fHx8MTc1NjI3OTkzMHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Green Tea",
      grade: "Specialty Grade",
      description: "Unfermented tea with delicate flavor and high antioxidant content. Growing demand in health-conscious markets.",
      specifications: ["GUNPOWDER", "SENCHA STYLE", "SPECIALTY"],
      image: "https://images.unsplash.com/photo-1594602990685-2ad837215085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHxwcmVtaXVtJTIwdGVhJTIwbGVhdmVzJTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3NTYyNzk5MzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-green-600">Tea Varieties</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of Kenyan tea varieties to meet diverse market needs 
            across different regions and consumer preferences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-green-600">
                  {product.grade}
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{product.name}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Available Grades:</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.specifications.map((spec, specIndex) => (
                      <Badge key={specIndex} variant="outline" className="text-xs">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <SampleRequestModal>
                  <Button variant="outline" className="w-full hover:bg-green-50 hover:border-green-600">
                    Request Samples
                  </Button>
                </SampleRequestModal>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <SampleRequestModal>
            <Button size="lg" className="bg-green-600 hover:bg-green-700 mr-4">
              Request All Samples
            </Button>
          </SampleRequestModal>
          <Button size="lg" variant="outline">
            Download Full Catalog
          </Button>
        </div>
      </div>
    </section>
  );
}