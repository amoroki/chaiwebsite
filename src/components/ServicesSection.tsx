import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Globe, Truck, FileText, HeadphonesIcon, Package, Shield } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: <Globe className="h-10 w-10 text-green-600" />,
      title: "Global Export",
      description: "We export to major markets including Middle East, Russia, Pakistan, UK, and emerging markets across Africa and Asia.",
      features: ["20+ destination countries", "Established trade routes", "Cultural market knowledge"]
    },
    {
      icon: <Package className="h-10 w-10 text-green-600" />,
      title: "Custom Packaging",
      description: "Flexible packaging solutions from bulk containers to consumer-ready packs with your private labeling.",
      features: ["Bulk 20kg/40kg sacks", "Consumer packs", "Private labeling"]
    },
    {
      icon: <Shield className="h-10 w-10 text-green-600" />,
      title: "Quality Certification",
      description: "All our tea meets international standards with proper certification for seamless customs clearance.",
      features: ["ISO 22000", "HACCP certified", "Organic options available"]
    },
    {
      icon: <Truck className="h-10 w-10 text-green-600" />,
      title: "Logistics Support",
      description: "End-to-end logistics management from Mombasa port with reliable shipping partners and tracking.",
      features: ["Port handling", "Shipping coordination", "Real-time tracking"]
    },
    {
      icon: <FileText className="h-10 w-10 text-green-600" />,
      title: "Documentation",
      description: "Complete export documentation support including certificates of origin, phytosanitary certificates, and more.",
      features: ["Export permits", "Quality certificates", "Customs documentation"]
    },
    {
      icon: <HeadphonesIcon className="h-10 w-10 text-green-600" />,
      title: "Market Support",
      description: "Dedicated account management and market insights to help you succeed in your regional market.",
      features: ["Dedicated account manager", "Market insights", "Regular communication"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive <span className="text-green-600">Export Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide end-to-end support for international tea trade, making it easy for 
            businesses worldwide to access premium Kenyan tea.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 mb-4 text-center">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg p-8 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Regional Market Expertise</h3>
              <p className="text-gray-600 mb-6">
                Our team understands the unique requirements of different regional markets, 
                from taste preferences to packaging requirements and regulatory compliance.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <span>Middle East & North Africa</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <span>Eastern Europe & Russia</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <span>South & Southeast Asia</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <span>Sub-Saharan Africa</span>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600 mb-4">Tons Exported Monthly</div>
              <div className="text-2xl font-bold text-green-600 mb-2">99.5%</div>
              <div className="text-gray-600">On-time Delivery Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}