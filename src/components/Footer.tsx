import { Separator } from "./ui/separator";
import { Globe, Leaf, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center">
                <span className="text-white text-sm font-bold">CT</span>
              </div>
              <span className="text-xl font-bold">ChaiTrade Kenya</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner for premium Kenyan tea exports to global markets.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-green-400" />
                <span>+254 745 173 050</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-green-400 transition-colors">Black Tea (CTC)</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Black Tea (Orthodox)</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Green Tea</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Specialty Grades</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-green-400 transition-colors">Global Export</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Custom Packaging</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Quality Certification</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Logistics Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Our Markets</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <Globe className="h-4 w-4 mr-2 text-green-400" />
                Middle East & North Africa
              </li>
              <li className="flex items-center">
                <Globe className="h-4 w-4 mr-2 text-green-400" />
                Eastern Europe & Russia
              </li>
              <li className="flex items-center">
                <Globe className="h-4 w-4 mr-2 text-green-400" />
                South & Southeast Asia
              </li>
              <li className="flex items-center">
                <Globe className="h-4 w-4 mr-2 text-green-400" />
                Sub-Saharan Africa
              </li>
            </ul>
          </div>
        </div>
        <Separator className="my-8 bg-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
            <Leaf className="h-4 w-4 text-green-400" />
            <span>© 2025 ChaiTrade Kenya. All rights reserved.</span>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a>
            <a href="mailto:info@chaitrade.co.ke" className="flex items-center space-x-1 hover:text-green-400 transition-colors">
              <Mail className="h-4 w-4" />
              <span>info@chaitrade.co.ke</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}